# playwright-test-automation

Data-driven E2E test automation suite built with Playwright and TypeScript,
using the Page Object Model pattern.

**Application Under Test:** [Asana Demo App](https://animated-gingersnap-8cf7f2.netlify.app/)

## Project Structure
```
playwright-test-automation/
├── pages/
│   ├── login-page.ts           # Authentication flow
│   └── board-page.ts           # Board navigation and assertions
├── test-data/
│   └── test-scenarios.json     # All test case data (DDT source)
├── tests/
│   └── board-task.spec.ts      # Main spec — driven by JSON data
├── playwright.config.ts
├── tsconfig.json
└── package.json
```

## Setup
```bash
git clone https://github.com/your-username/playwright-test-automation.git
cd playwright-test-automation
npm install
npx playwright install
```

## Running Tests
```bash
npm test                  # Headless
npm run test:headed       # With browser visible
npm run test:ui           # UI mode
npm run test:report       # View HTML report
```

## Test Coverage
| TC | Project | Task | Column | Tags |
|---|---|---|---|---|
| TC001 | Web Application | Implement user authentication | To Do | Feature, High Priority |
| TC002 | Web Application | Fix navigation bug | To Do | Bug |
| TC003 | Web Application | Design system updates | In Progress | Design |
| TC004 | Mobile Application | Push notification system | To Do | Feature |
| TC005 | Mobile Application | Offline mode | In Progress | Feature, High Priority |
| TC006 | Mobile Application | App icon design | Done | Design |

## Adding a New Test Case
Add a new object to `test-data/test-scenarios.json` — no code changes needed.

## Author
**sdahal** — Test Automation Engineer  
[LinkedIn](https://linkedin.com/in/dahalsovita)
