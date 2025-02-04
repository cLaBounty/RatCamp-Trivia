// Endpoint Routing
const router = app => {

    // Serve clients with homepage
    app.get('/', (request, response) => {
        response.sendFile(__dirname + "index.html");
    });

    // Serve clients with message board
    app.get('/front-end/html/messageBoard.html', (request, response) => {
        response.sendFile(__dirname + "/front-end/html/messageBoard.html");
    });

    // Serve clients login page
    app.get('/front-end/html/login.html', (request, response) => {
        response.sendFile(__dirname + "/front-end/html/login.html");
    });

    // Serve clients signup page
    app.get('/front-end/html/signup.html', (request, response) => {
        response.sendFile(__dirname + "/front-end/html/signup.html");
    });

    // Serve clients error message indicating lack of completed login
    app.get('/front-end/html/notloggedin', (request, response) => {
        response.send("Please login before attempting to access the message board.")
    });

    // Serve clients varying file based on endpoint
    app.get('/front-end/*', (req, res) => {
        res.sendFile(__dirname + req.originalUrl);
    });
}

// Export the router
module.exports = router;
