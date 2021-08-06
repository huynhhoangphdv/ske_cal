# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## useCalculate HOOK

return { ex, handlePush, handleClear, handleCalculate }


### ex

This field express current value of the before & after calculating.

### handlePush

The main function help to validate input before that is included
If the value is not pass the validation that value is not included
If pass that is included
If push any operator into the satisfied expression then it will run calculate function and concat the operator

### handleClear

The fuction to remove latest operator

### handleCalculate

The function to calculating the expression and re-render value

### KeyPanel Component

The component contain list of operation button responsible for assign fields, functions

### KeyPad Conponent

The component Unit to display operation button and related action.

### DisplayPanel

The simple component to display before & after calculating.
