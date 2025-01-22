# Express.js:  res.sendFile() Error Handling

This repository demonstrates a common error when using `res.sendFile()` in Express.js and provides a solution for robust error handling.

## The Problem
The provided `bug.js` code attempts to serve `index.html`. However, if `index.html` is missing, the application crashes without providing sufficient information about the error. This makes debugging difficult.

## The Solution
`bugSolution.js` demonstrates how to handle the error gracefully by providing a custom error response when the file is not found.  This improves user experience and provides more helpful feedback during development.