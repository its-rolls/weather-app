# 🌤️ React Weather App

A sleek, responsive weather application built with React and Vite. It fetches real-time weather data from the OpenWeatherMap API, allowing users to search for current weather conditions, temperatures, humidity, and wind speeds for any city worldwide.

![Weather App Preview](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=WHITE)
![GitHub Repo stars](https://img.shields.io/github/stars/its-rolls/weather-app?style=social)

---

## 🚀 Features

- **Real-Time Weather Data:** Instantly fetch current weather conditions (temperature, humidity, wind speed) using the OpenWeatherMap API.
- **Dynamic Weather Icons:** Automatically updates weather visuals depending on cloud cover, rain, snow, or clear skies.
- **City Search Bar:** Search for any city globally with seamless `useRef` input handling.
- **Responsive Layout:** Clean, intuitive UI designed for seamless use across different screen sizes.

---

## 🛠️ Built With

- **React** (Component-based architecture & hooks like `useState`, `useEffect`, and `useRef`)
- **Vite** (Next-generation frontend build tool)
- **OpenWeatherMap API** (External meteorological data source)
- **CSS3** (Custom styling)

---

## ⚙️ Getting Started & Installation

To run this project locally on your machine, follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/its-rolls/weather-app.git
cd weather-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory of your project and add your OpenWeatherMap API key:
```env
VITE_APP_ID=your_actual_api_key_here
```

### 4. Run the Development Server
```bash
npm run dev
```
Open your browser and navigate to the local URL provided by Vite (usually `http://localhost:5173`).

---

## 📦 Project Structure

```text
weather-app/
├── public/
├── src/
│   ├── assets/        # Icons for weather conditions (sunny, rainy, windy, etc.)
│   ├── components/    # Core components (Weather.jsx & Weather.css)
│   ├── App.jsx        # Root component
│   └── main.jsx       # Application entry point
├── .env               # Environment variables (git-ignored)
├── package.json
└── README.md
```

---

## 👤 Author

- GitHub: [@its-rolls](https://github.com/its-rolls)
## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
