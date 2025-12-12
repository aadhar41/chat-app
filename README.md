# **💬 ChatIO - Real-Time Chat Application**

![GitHub stars](https://img.shields.io/github/stars/aadhar41/chat-app?style=social)
![GitHub forks](https://img.shields.io/github/forks/aadhar41/chat-app?style=social)
![GitHub issues](https://img.shields.io/github/issues/aadhar41/chat-app)
![GitHub license](https://img.shields.io/github/license/aadhar41/chat-app)

**A modern, real-time chat application built with Node.js, Socket.io, and Bootstrap that brings people together through instant messaging.**

---

## **✨ Features**
## **Features**

* **Home Username Create to chat [ Validation Added ]**
* **Chatroom Active Users List**
* **Chat Window ( Responsive, Vertical Scroll )**
* **Chat Window Chat bubbles**
* **Username color code**
* **emoji support**
* **is Typing... feature**
* **validation for empty message and limitaion for message characters**
* **Real-time Messaging** - Instant message exchange with Socket.io
* **User Management** - Unique username creation with validation
* **Active Users List** - See who's currently chatting
* **Responsive Design** - Works perfectly on all devices
* **Message Bubbles** - Visually appealing message containers
* **Username Color Coding** - Personalized message styling
* **Emoji Support** - Express yourself with emojis
* **Typing Indicators** - See when others are typing
* **Message Validation** - Empty message prevention and character limits
* **Modern UI** - Clean, intuitive interface using Bootstrap 5

---

## **🛠️ Tech Stack**

**Client:**
- HTML5
- CSS3
- Bootstrap 5 (Materia theme)
- Custom CSS styling

**Server:**
- Node.js
- Express.js
- Socket.io

**Development Tools:**
- VS Code (recommended)
- Node Package Manager (npm)

---

## **📦 Installation**

### **Prerequisites**

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A modern web browser (Chrome, Firefox, Edge, or Safari)

### **Quick Start**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/aadhar41/chat-app.git
   cd chat-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   node server.js
   ```

4. **Open the application in your browser:**
   ```bash
   open http://localhost:3000
   ```
   (or navigate to `http://localhost:3000` in your browser)

---

## **🎯 Usage**

### **Basic Usage**

1. **Enter a unique username** when prompted on the home page
2. **Join the chat room** and start messaging
3. **See active users** in the sidebar
4. **Send messages** to everyone in the chat
5. **Use emojis** to express yourself
6. **Watch typing indicators** to see when others are composing messages

### **Example HTML Structure**

Here's a simplified version of the main HTML structure:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ChatIO</title>
    <link rel="stylesheet" href="https://bootswatch.com/5/materia/bootstrap.min.css">
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
    <div class="container">
        <div id="chatWindow"></div>
        <div id="messageInput">
            <input type="text" id="message" placeholder="Type your message...">
            <button id="sendButton">Send</button>
        </div>
    </div>
    <script src="/socket.io/socket.io.js"></script>
    <script src="client.js"></script>
</body>
</html>
```

### **Server-side Socket.io Events**

The server handles several Socket.io events:

```javascript
// New user connection
socket.on("new user", function(data, callback) {
    // Username validation and registration
});

// Send message
socket.on("send message", function(data) {
    // Broadcast message to all clients
});

// Typing indicator
socket.on('typing', (data) => {
    // Notify others when someone is typing
});

// Disconnect handler
socket.on("disconnect", function(data) {
    // Remove user from active list
});
```

---

## **📁 Project Structure**

```
chat-app/
├── .gitignore                # Specifies intentionally untracked files
├── index.html                # Main HTML file
├── package.json              # Project metadata and dependencies
├── package-lock.json         # Lockfile for exact dependency versions
├── server.js                 # Server-side application logic
├── css/
│   └── main.css              # Custom CSS styles
└── README.md                # Project documentation
```

---

## **🔧 Configuration**

### **Environment Variables**

You can customize the application by setting environment variables:

```bash
# Set custom port
PORT=5000 node server.js

# Or set in your environment
export PORT=5000
node server.js
```

### **Customization Options**

1. **Change the Bootstrap theme**: Modify the link in `index.html` to use a different Bootswatch theme
2. **Adjust message limits**: Edit the validation logic in `server.js`
3. **Change colors**: Modify the CSS variables in `main.css`
4. **Add new features**: Extend the Socket.io event handlers in `server.js`

---

## **🤝 Contributing**

We welcome contributions from the community! Here's how you can help:

1. **Fork the repository** and create your branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** and ensure they follow our coding standards

3. **Test your changes** thoroughly

4. **Commit your changes**:
   ```bash
   git commit -m "Add some feature"
   ```

5. **Push to the branch**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request** on GitHub

### **Development Setup**

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   node server.js
   ```

### **Code Style Guidelines**

- Use consistent indentation (2 spaces)
- Follow the existing code structure and patterns
- Write clear, concise comments
- Keep functions small and focused
- Use meaningful variable and function names

---

## **📝 License**

This project is licensed under the **ISC License** - see the [LICENSE](LICENSE) file for details.

---

## **👥 Authors & Contributors**

**Maintainer:**
- [Aadhar Gaur](https://github.com/aadhar41)

**Contributors:**
- [Your Name](https://github.com/yourusername) - (your contributions)
- [Another Contributor](https://github.com/anotheruser) - (their contributions)

---

## **🐛 Issues & Support**

### **Reporting Issues**

If you encounter any problems or have feature requests:
1. Search the [issue tracker](https://github.com/aadhar41/chat-app/issues) to see if the issue is already reported
2. If not, open a new issue with:
   - A clear title describing the problem
   - Detailed steps to reproduce the issue
   - Expected behavior
   - Actual behavior
   - Any relevant screenshots or error messages

### **Getting Help**

- **Discussions**: Join our [GitHub Discussions](https://github.com/aadhar41/chat-app/discussions)
- **Community**: Find us on [our community forum](https://community.example.com)
- **Email**: For urgent matters, contact us at support@example.com

---

## **🗺️ Roadmap**

Here's what we have planned for future releases:

### **Short-term (Next 1-2 months)**
- [ ] Add user authentication
- [ ] Implement message persistence
- [ ] Add file sharing capability
- [ ] Improve mobile responsiveness

### **Medium-term (3-6 months)**
- [ ] Add private/direct messaging
- [ ] Implement user profiles
- [ ] Add chat rooms with different topics
- [ ] Create a mobile app version

### **Long-term (6+ months)**
- [ ] Develop a desktop application
- [ ] Add voice and video chat
- [ ] Implement a more sophisticated user system
- [ ] Create a marketplace for chat apps

---

## **🎉 Get Started Today!**

Ready to bring people together through instant messaging? Join the ChatIO community today!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?url=https://github.com/aadhar41/chat-app)

Or simply run it locally:
```bash
git clone https://github.com/aadhar41/chat-app.git
cd chat-app
npm install
node server.js
```

Then visit [http://localhost:3000](http://localhost:3000) in your browser!

---

## **📸 Screenshots**

### **Home Page**
![Home Page](https://github.com/aadhar41/chat-app/blob/master/home-page.png)


### **Chat Room**
![Chat Room](https://github.com/aadhar41/chat-app/blob/master/chatroom-page.png)

---

## **💡 Tips & Tricks**

1. **Customize your username**: Choose a unique name to stand out in the chat
2. **Use emojis**: Express your emotions with a wide range of emoji options
3. **Watch the typing indicators**: See when others are composing messages
4. **Responsive design**: Works perfectly on all devices, from desktop to mobile
5. **Message bubbles**: Each message is clearly attributed to its sender

---

## **🤝 Join Our Community**

We'd love to have you join our community of chat enthusiasts!

- **GitHub**: [https://github.com/aadhar41/chat-app](https://github.com/aadhar41/chat-app)
- **Discussions**: [https://github.com/aadhar41/chat-app/discussions](https://github.com/aadhar41/chat-app/discussions)
- **Twitter**: [@ChatIOApp](https://twitter.com/ChatIOApp)
- **Email**: community@chatio.example

Let's build something amazing together!

This README.md file is designed to:

1. **Engage developers** with a compelling overview and clear structure
2. **Provide comprehensive instructions** for installation and usage
3. **Showcase the project's features** with visual appeal using emojis
4. **Encourage contributions** by clearly explaining how to get involved
5. **Include practical examples** that developers can use immediately
6. **Follow modern GitHub README best practices** with badges, clear sections, and visual elements
7. **Highlight the project's potential** with a roadmap and community information

The file is formatted to be visually appealing, easy to read, and actionable for both new and experienced developers.



