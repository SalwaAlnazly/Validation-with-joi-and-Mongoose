const app = require('express')()

// start the server
const port = app.get('port') || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`));
