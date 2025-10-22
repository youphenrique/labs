# Sport League Web UI

Welcome to the Sport League Web UI project. The goal of the project is to build a browser-based web frontend SPA that gets the data about match schedule/results from the backend and then computes the leaderboard based on the rules explained in the challenge description.

## Install Dependencies

This solution requires Node.js v20 installed.

In order to install project dependencies, run:

> **npm** install

## Running Backend Mock Server

In order to work on the frontend application, we have provided a simple mock database server.

To run the mock server, run the following command:

> **node** server.js dev-mock-server-config.json

After this you would be able to access backend at http://localhost:3001. To verify if the server is running, you can run:

> export BASE_API_URL=http://localhost:3001/api
> **curl** "$BASE_API_URL/version"

The response should be `{"success": true, "version": "1.0"}`

**IMPORTANT:** If you need to change the default backend port, make sure to revert them to 3001 before submitting the solution as otherwise the grading system might not detect the backend server, and you will lose points.

## Running Frontend Application


### Configure API base URL

The frontend reads the API base URL from the environment variable REACT_APP_BASE_API_URL. If it is not set, it defaults to http://localhost:3001/api.

Set this variable to point to your backend before running or building the app. Create a file named `.env` in the project root with:

```
REACT_APP_BASE_API_URL=http://localhost:3001/api
```

React Scripts will automatically load variables from `.env`.

Notes:
- `.env` files **should be** checked into source control (with the exclusion of .env*.local);
- The mock server runs at http://localhost:3001 by default (base path /api). If you change the mock server port/path, update REACT_APP_BASE_API_URL accordingly.

### Running the application

The following command will run the SPA in a local dev server:

> **npm** start

The application will be available at http://localhost:3000, and by default, you should see the schedule page.

## Production Build

In order to prepare a production build, you need to run:

> **npm** run build

It is important to make sure that code can be built for production successfully before submitting the solution.

## Run tests

The test file to verify src/services/LeagueService.js is located at tests/leaderboard.test.js. Feel free to modify the code there in order to test your work.
It is important to implement all methods on src/services/LeagueService.js and TO NOT CHANGE the interface of them.

To run the tests, run this command. 

```shell
npm test
```

## Storybook

Storybook is set up for developing and testing UI components in isolation.

- Start Storybook locally:

  ```shell
  npm run storybook
  ```

  Then open http://localhost:6006 in your browser. Press Ctrl+C in the terminal to stop it.

- Build a static Storybook (useful for preview/CI artifacts):

  ```shell
  npm run build-storybook
  ```

  The static site will be generated in the storybook-static directory. You can serve it locally with:

  ```shell
  npx serve storybook-static
  ```

### Storybook tests

This project includes the official Storybook Test Runner, which executes interaction tests defined in your stories.

- Run the Storybook tests:

  ```shell
  npm run test-storybook
  ```

  Notes:
  - If Storybook is already running on port 6006, the test runner will reuse it; otherwise it will start a headless instance automatically.
  - The command exits with a non-zero status on failures, making it suitable for CI.
  - Keep Storybook on the default port (6006) unless you also configure the test runner accordingly.

