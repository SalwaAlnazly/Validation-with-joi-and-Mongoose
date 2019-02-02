const app = require('express')()
const logger = require('morgan')


// Middleware
app.use(logger('dev'))

// Routes

// Catch 404 Errors and forward them to error handler
app.use((req, res, next) => {
    const err = new Error('Not found')
    err.status = 404
    next(err)
})

// Error handler function

// start the server
const port = app.get('port') || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`));
 