const app = require('express')()
const logger = require('morgan')


// Middleware
app.use(logger('dev'))

// Routes
app.get('/', (req, res, next) => {
    res.status(200).json({
        message: "You requested index page"
    })
})

// Catch 404 Errors and forward them to error handler
app.use((req, res, next) => {
    const err = new Error('Not found')
    err.status = 404
    next(err)
})

// Error handler function
app.use((err, req, res, next) => {
    const error = app.get('env') === 'development' ? err : {}
    const status = err.status || 500

    //Respond to client
    res.status(status).json({
        error: {
            message: error.message
        }
    })
     
    // Respond to ourselves
    console.error(err);
    
})
// start the server
const port = app.get('port') || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`));
 