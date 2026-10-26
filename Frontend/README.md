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

Install the backend and frontend dependencies from the repository root:

```bash
npm install
npm install --prefix Frontend
```

Create a root `.env` file for local backend development:

```bash
GOOGLE_GEMINI_KEY=your_gemini_api_key
```

Start the backend and frontend in separate terminals:

```bash
npm start
```

```bash
cd Frontend
npm run dev
```

The frontend is available at `http://localhost:5173`; its `/api` requests are
proxied to the local backend on port 3000.

## 🚀 Deploy to Vercel

This repository is configured to deploy the Vite frontend and Express API
together as one Vercel project.

1. Import the repository into Vercel and keep the **Root Directory** set to
   the repository root (not `Frontend`).
2. Add the `GOOGLE_GEMINI_KEY` environment variable in the Vercel project
   settings for each environment you use (Production, Preview, and Development).
3. Deploy. The checked-in `vercel.json` installs both packages, builds
   `Frontend`, publishes `Frontend/dist`, and routes `/api/*` to the serverless
   Express app. Client-side routes such as `/about` and `/contact` fall back to
   the SPA entry point.

The Gemini key must be configured in Vercel; it is only read by the backend
and must not use a `VITE_` prefix. Keep local `.env` files out of source
control.

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
