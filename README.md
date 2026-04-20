# 🎭 Playwright Automation Portfolio

A cross-browser end-to-end test automation suite built with **Playwright** and **TypeScript**, targeting a real-world e-commerce web application ([Automation Exercise](https://automationexercise.com)).

This portfolio demonstrates a practical QA automation strategy: automate repetitive regression flows, validate critical user journeys, and maintain manual testing for complex business logic.

---

## 📁 Test Suite Structure

```
tests/
├── login.spec.ts      # Authentication flows
├── smoke.spec.ts      # Critical page availability
└── cart.spec.ts       # E2E cart management
```

---

## 🧪 Test Coverage

### 🔐 Login Tests (`login.spec.ts`)
| Test Case | Type | Status |
|---|---|---|
| Login with valid credentials | Positive | ✅ |
| Login with invalid credentials shows error | Negative | ✅ |
| Login page has all required fields | UI Validation | ✅ |

### 💨 Smoke Tests (`smoke.spec.ts`)
| Test Case | Type | Status |
|---|---|---|
| Homepage loads successfully | Smoke | ✅ |
| Products page loads and displays items | Smoke | ✅ |
| Search functionality works | Functional | ✅ |
| Cart page is accessible | Smoke | ✅ |
| Contact Us page loads | Smoke | ✅ |

### 🛒 Cart Tests (`cart.spec.ts`)
| Test Case | Type | Status |
|---|---|---|
| Add product to cart | Functional | ✅ |
| Cart shows added product | Functional | ✅ |
| Remove product from cart | Functional | ✅ |
| Proceed to checkout is accessible | Functional | ✅ |

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| [Playwright](https://playwright.dev/) v1.59 | Test automation framework |
| TypeScript | Type-safe scripting |
| Node.js | Runtime environment |
| GitHub Actions | CI/CD pipeline |

---

## 🌐 Cross-Browser Coverage

All tests run automatically on:
- ✅ Chromium
- ✅ Firefox

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install dependencies
```bash
npm install
npx playwright install
```

### Run all tests
```bash
npx playwright test
```

### Run a specific file
```bash
npx playwright test login.spec.ts
```

### Run with browser visible
```bash
npx playwright test --headed
```

### View HTML report
```bash
npx playwright show-report
```

---

## 🔄 CI/CD Pipeline

Tests run automatically on every push and pull request via **GitHub Actions**.
See `.github/workflows/playwright.yml`

Every pull request is blocked from merging if tests fail — this protects production.

---

## 📋 Test Strategy

This suite follows a **layered testing approach**:

- **Smoke tests** — verify critical pages load and core navigation works after every deployment
- **Functional tests** — validate key user flows end-to-end (login, cart management)
- **Negative tests** — verify the application handles errors correctly (invalid login credentials)
- **Cross-browser** — all tests run on Chromium and Firefox automatically

### What stays manual:
- Complex business logic with multiple conditions
- UX and visual layout judgment
- Exploratory testing for new features
- Edge cases requiring human intuition

> Automation handles the repetitive regression layer.  
> Human judgment handles everything that requires thinking.

---

## 👤 Author

**Jean Tangkua**  
QA Engineer | 7+ years manual QA | Automation with Playwright & TypeScript  
[GitHub](https://github.com/jtangkua13-afk)