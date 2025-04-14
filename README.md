# 🎯 Multi-Step Subscription Form

A responsive, user-friendly multi-step subscription form built with **React**, **React Router**, and **Tailwind CSS**. Users can enter personal info, select plans and add-ons, review their choices, and confirm their subscription — all managed through global state with Context API.

---

## 📑 Table of Contents

- [Features](#features)
- [Live Demo](#live-demo)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Installation Instructions](#installation-instructions)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing Guidelines](#contributing-guidelines)
- [License](#license)

---

## ✨ Features

- Multi-step form flow (Personal Info → Plan → Add-ons → Summary → Confirmation)
- Form validation and user input handling
- Dynamic pricing calculation
- Context API for global state management
- Responsive UI with Tailwind CSS
- Route-based navigation using React Router v6+

---

## 🚀 Live Demo
https://multi-step-form-five-tau-23.vercel.app/

---

## 📸 Screenshots

![Image](https://github.com/user-attachments/assets/64ad4e75-aa8d-4dda-be48-21daaab6da9d)

---

## 🛠 Technologies Used

- React
- React Router
- Tailwind CSS
- Context API
- Vite (or CRA if applicable)

---

## 📦 Installation Instructions

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/subscription-form.git
cd subscription-form

# Install dependencies
npm install
# or
yarn
```

### Run the app

```bash
npm run dev
# or
yarn dev
```

---

## 📘 Usage

1. Fill in your **Personal Information**
2. Choose your **Subscription Plan**
3. Select optional **Add-ons**
4. Review selections on the **Summary** page
5. Click **Confirm** to complete

---

## 🗂 Project Structure

```
src/
├── Components/
│   ├── Context/           # Context API for global state
│   │   └── UserProvider.jsx
│   ├── Dashboard/
│   │   ├── AddOns/
│   │   ├── LastStep/
│   │   ├── PersonalInfo/
│   │   ├── Plan/
│   │   ├── Summary/
│   │   └── Layout.jsx
├── AppRouter.jsx          # Routing logic
├── main.jsx               # Entry point
```

---

## 🤝 Contributing Guidelines

1. Fork this repository
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes
4. Commit your changes: `git commit -m 'Add feature'`
5. Push to the branch: `git push origin feature-name`
6. Open a pull request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
