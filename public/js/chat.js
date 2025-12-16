/* Client-side Chat Logic */
$(function () {
    const socket = io();
    const $usernameForm = $('#usernameForm');
    const $messageForm = $('#messageForm');
    const $chat = $('#chatWindow');
    const $users = $('#usersList');
    const $error = $('#error');
    const $errorModal = $('#errorModal');
    const $errorMsg = $('#error-msg');
    const $typing = $('#typing');
    const $message = $('#message');
    const $username = $('#username');

    function showError(msg) {
        $error.text(msg).show();
        // Auto-hide error after 3 seconds for better UX
        setTimeout(() => {
            $error.fadeOut();
        }, 3000);
    }

    function showModalError(msg) {
        $errorMsg.text(msg);
        $errorModal.modal('show');
    }

    // Username submission
    $usernameForm.on('submit', function (e) {
        e.preventDefault();
        const name = $username.val().trim();

        if (!name) return showError('Username cannot be empty.');
        if (name.length > 20) return showError('Username too long (max 20 chars).');

        socket.emit('new user', name, function (accepted) {
            if (accepted) {
                $('#namesWrapper').fadeOut(function () {
                    $('#mainWrapper').fadeIn();
                });
            } else {
                showError('That username is already taken. Try another.');
            }
        });
    });

    // Receive active user list
    socket.on('usernames', function (list) {
        const usersHtml = list.map(u => `<span class="badge bg-primary me-1">${u}</span>`).join(' ');
        $users.html(usersHtml || '<span class="text-muted">No other users active</span>');
    });

    // Send message
    $messageForm.on('submit', function (e) {
        e.preventDefault();
        const txt = $message.val().trim();

        if (!txt) return showModalError("Can't send an empty message.");
        if (txt.length > 255) return showModalError('Message too long (max 255 chars).');

        socket.emit('send message', { msg: txt, id: socket.id, username: socket.username });
        $message.val('');
        $typing.empty();
    });

    // Receive new messages
    socket.on('new message', function (data) {
        const isMe = data.id === socket.id;
        const $p = $('<p>').addClass(isMe ? 'from-me' : 'from-them').text(data.msg);

        if (!isMe) {
            const $span = $('<span>').html(`<strong>${data.user}</strong>`);
            $p.prepend($span);
        }

        $chat.append($p);

        // Auto-scroll to bottom
        $chat.scrollTop($chat[0].scrollHeight);
    });

    // Typing indicator
    let typingTimeout;
    $message.on('input', function () {
        socket.emit('typing', $message.val());

        // Clear previous timeout
        clearTimeout(typingTimeout);

        // Stop typing indicator after 2 seconds of inactivity
        typingTimeout = setTimeout(function () {
            socket.emit('typing', '');
        }, 2000);
    });

    socket.on('typing', function (txt) {
        if (txt) {
            $typing.html(`<small class="text-muted"><i class="fas fa-keyboard"></i> ${txt} is typing...</small>`);
        } else {
            $typing.empty();
        }
    });
});
