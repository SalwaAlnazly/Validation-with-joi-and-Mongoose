const app = require('express')()
const logger = require('morgan')


// Middlewares
app.use(logger())

// Routes

// Catch 404 Errors and forward them to error handler


// Error handler function
// start the server
const port = app.get('port') || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`));
