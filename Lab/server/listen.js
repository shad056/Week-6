module.exports = {
    listen: function(app, PORT) {
        app.listen(PORT, ()=> {
            console.log('Server is started');
        });
    }
}