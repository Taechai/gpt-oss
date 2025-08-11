# 🫖 TeaChai Bot - AI Chat Interface

![TeaChai Bot](https://img.shields.io/badge/TeaChai-Bot-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Node.js](https://img.shields.io/badge/Node.js-v18+-green)
![React](https://img.shields.io/badge/React-v19+-blue)

A beautiful and modern chat interface powered by the GPT-OSS-20B model. TeaChai Bot combines elegant design with powerful AI capabilities to provide an engaging chat experience.

## ✨ Features

- 🤖 **Advanced AI Model**: Powered by GPT-OSS-20B for intelligent conversations
- 🎨 **Beautiful UI**: Clean, modern interface with smooth animations
- 🌓 **Dark/Light Mode**: Toggle between themes for comfortable viewing
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- ✍️ **Markdown Support**: Rich text formatting in chat messages
- 🚀 **Real-time Responses**: Fast and efficient API integration
- 🔒 **Secure**: Environment-based configuration for API keys

## 🚀 Live Demo

Visit [TeaChai Bot](https://teachai-bot.vercel.app) to try it out!

## 🛠️ Tech Stack

### Frontend
- **React 19+**: Modern UI framework
- **Vite**: Next-generation frontend tooling
- **React-Markdown**: For message formatting
- **CSS3**: Custom styling with CSS variables

### Backend
- **Node.js**: JavaScript runtime
- **Express**: Web application framework
- **Hugging Face API**: AI model integration

## 📦 Project Structure

```
teachai-bot/
├── src/                   # Frontend source files
│   ├── App.jsx           # Main application component
│   ├── App.css           # Application styles
│   └── main.jsx          # Entry point
├── gpt-oss-backend/      # Backend server
│   ├── index.js          # Express server setup
│   └── .env.example      # Environment variables template
├── public/               # Static assets
├── package.json          # Dependencies and scripts
└── vite.config.js        # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Hugging Face API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Taechai/gpt-oss.git
   cd gpt-oss
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd gpt-oss-backend
   npm install
   ```

4. **Configure environment variables**
   ```bash
   cp gpt-oss-backend/.env.example gpt-oss-backend/.env
   # Edit .env and add your Hugging Face API key
   ```

5. **Start the backend server**
   ```bash
   cd gpt-oss-backend
   node index.js
   ```

6. **Start the frontend development server**
   ```bash
   # In a new terminal, from the root directory
   npm run dev
   ```

7. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

## 🔧 Configuration

### Environment Variables

Backend configuration (`gpt-oss-backend/.env`):
```env
HUGGINGFACE_API_TOKEN=your_token_here
```

### Frontend Configuration

The Vite configuration (`vite.config.js`) includes:
- Development server settings
- API proxy configuration
- Build optimizations

## 🖥️ Usage

1. Open the application in your browser
2. Choose your preferred theme (light/dark)
3. Start chatting with TeaChai Bot
4. Enjoy markdown-formatted responses
5. Experience real-time AI interactions

## 🎨 Customization

### Themes
The application supports both light and dark themes. Colors can be customized in `src/App.css`:

```css
:root {
  /* Color variables */
  --bg-gradient-light: ...;
  --bg-gradient-dark: ...;
  /* Add your custom colors */
}
```

### API Configuration
Modify `gpt-oss-backend/index.js` to:
- Adjust API parameters
- Configure response formatting
- Add new features

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. Push to the branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🤝 Contact

Your Name - [@YourTwitter](https://twitter.com/YourTwitter)

Project Link: [https://github.com/Taechai/gpt-oss](https://github.com/Taechai/gpt-oss)

## 🙏 Acknowledgments

- [GPT-OSS-20B](https://huggingface.co/openai/gpt-oss-20b) for the powerful AI model
- [React](https://reactjs.org/) for the fantastic UI framework
- [Vite](https://vitejs.dev/) for the blazing fast build tool
- [Hugging Face](https://huggingface.co/) for the AI infrastructure
