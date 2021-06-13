# "Pico y Placa" simple predictor

A simple React application to predict Quito's Pico y Placa restrictions. It was build with Typescript, Styled-Components, Material UI Framework and MVP pattern.

A car circulation is restricted by the last digit of the license plate with the following criteria:
- Monday: 1,2.
- Tuesday: 3,4.
- Wednesday: 5,6.
- Thursday: 7,8.
- Friday: 9,0.
- Saturday: No restrictions.
- Sunday: No restrictions.

In addition, the circulation restriction time must be match from 7:00 AM to 9:30 AM and from 4:00 PM to 7:30 PM.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn test:coverage`

Launches the test coverage runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

