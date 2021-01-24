## Description
More involved React-Laravel-GraphQL app to practice react. Converts PHPUnit XML data into user-friendly report. 

Takes a PHPUnit XML report file and uses native JS [DOMParser API](https://developer.mozilla.org/en-US/docs/Web/Guide/Parsing_and_serializing_XML) to parse it. Returns the data to the React app which parses and passes the relevant data to React components until one displays the data.

Displays aggregate data at the top, along with expandable test and output info. See example_report.png for an example results display.

Expects a PHPUnit report with a single parent `TestSuite` XML Node below a single `TestSuites` node.

Example format:
```
<?xml version="1.0" encoding="UTF-8"?>
<testsuites>
    <testsuite name="All Tests" tests="2" assertions="2" errors="2" failures="0" skipped="7" time="1705.247137">
        <testsuite>
        </testsuite>
        <testsuite>
        </testsuite>
    </testsuite>
</testsuites>

```

## Installation
Uses a Laravel backend, see related project. Once that is set up as is outlined in the readme, change the URI in App.js to point to the development hostname.
Run `yarn start`

## Credits
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

chart.js

fontawesome
