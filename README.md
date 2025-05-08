# 🌿 Cypress UI Test Automation

This project contains automated UI test cases written using **Cypress**, a modern JavaScript end-to-end testing framework.

## ✅ What’s in this Repo?

- Automated test scripts for Dealls Mentoring Features
- Written in **JavaScript** using **Cypress**.
- Easy to install and run, even for beginners.

---

## 🚀 Getting Started

### 1. Clone the Repository


git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name


### 2. Install Dependencies

Make sure you have **Node.js** and **npm** installed. Then run:

```bash
npm install
```

> This will install Cypress and other dependencies listed in `package.json`.

---

## 🧪 How to Run the Tests

### Option A: Run Tests in Cypress UI

This opens an interactive test runner (great for development):

```bash
npx cypress open
```

* A Cypress window will pop up.
* Click on a test file to run it in the browser.

### Option B: Run Tests in Headless Mode (CLI)

This runs all tests in the terminal (useful for CI/CD or fast runs):

```bash
npx cypress run
```

---

## 📁 Project Structure

```
your-project/
│
├── cypress/
│   ├── e2e/              # Your test specs (main test files)
│   ├── fixtures/         # Test data (optional)
│   └── support/          # Custom commands and config (optional)
│
├── cypress.config.js     # Cypress config file
├── package.json          # Project dependencies and scripts
└── README.md             # This guide
```

---

## 🛠️ Troubleshooting

If you run into any issues:

* Make sure Node.js is installed: [https://nodejs.org](https://nodejs.org)
* Run `npm install` again to reinstall dependencies.
* Check Cypress docs: [https://docs.cypress.io](https://docs.cypress.io)

---

## 📌 Notes

* Tests are written in plain JavaScript.
* Cypress is installed locally to this project — no global install needed.
* You can modify or extend the tests in the `cypress/e2e/` folder.

---

## ✨ Author

Created by Immanuel Yabes — for the Dealls QA Engineering Challenge.




