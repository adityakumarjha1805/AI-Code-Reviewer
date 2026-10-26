# 🤖 AI Code Reviewer

An AI-powered code review web application built using the **MERN Stack**. It helps developers analyze their code, identify bugs, detect potential improvements, and receive AI-generated suggestions for writing cleaner and more efficient code.

## 🚀 Features

* 🔍 **AI Code Review** – Analyze your code using AI.
* 🐛 **Bug Detection** – Identify possible bugs and issues.
* 💡 **Code Suggestions** – Get suggestions to improve your code.
* ⚡ **Performance Analysis** – Find potential performance improvements.
* 🔐 **User Authentication** – Secure login and registration.
* 📱 **Responsive UI** – Works on desktop, tablet, and mobile devices.
* 📋 **Easy Code Input** – Paste your code and get an instant review.
* 📊 **Detailed Review** – Receive clear explanations and recommendations.

## 🛠️ Tech Stack

### Frontend

* React.js
* HTML5
* CSS3
* JavaScript
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### AI

* AI API for code analysis and review

### Other Tools

* Git & GitHub
* REST API

## 📂 Project Structure

```text
AI-Code-Reviewer/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ai-code-reviewer.git
```

### 2. Navigate to the Project

```bash
cd ai-code-reviewer
```

### 3. Install Frontend Dependencies

```bash
cd client
npm install
```

### 4. Install Backend Dependencies

Open another terminal:

```bash
cd server
npm install
```

## 🔑 Environment Variables

Create a `.env` file inside the `server` folder.

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
AI_API_KEY=your_ai_api_key
JWT_SECRET=your_jwt_secret
```

> Never upload your `.env` file or API keys to GitHub.

## ▶️ Run the Application

### Start Backend

```bash
cd server
npm start
```

### Start Frontend

```bash
cd client
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## 🔄 How It Works

```text
User
  ↓
Enter / Upload Code
  ↓
React Frontend
  ↓
Express + Node.js Backend
  ↓
AI API
  ↓
Code Analysis
  ↓
Review & Suggestions
  ↓
User
```

## 💡 Example

### Input

```javascript
function add(a, b) {
    return a - b;
}
```

### AI Review

```text
⚠️ Possible Issue:
The function is named "add" but performs subtraction.

💡 Suggestion:
Change the return statement to:

return a + b;
```

## 🔮 Future Improvements

* Support for multiple programming languages
* Code quality scoring
* AI-generated optimized code
* Code history and review tracking
* GitHub repository integration
* Dark/Light mode
* Real-time code analysis
* Downloadable code review reports

## 🎯 Purpose

The main goal of this project is to provide developers with an easy-to-use AI assistant that can help them **find coding issues, understand problems, and improve code quality**.

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Commit your changes
5. Push your branch
6. Create a Pull Request

## 📄 License

This project is open-source and available under the **MIT License**.

---

⭐ If you find this project useful, consider giving the repository a star!
