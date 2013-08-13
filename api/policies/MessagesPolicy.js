module.exports = function (req, res, next) {
    if (req.session.user) {
        // var action = req.param('action');
        // In v0.9.0 the action can be accessed in the request's target object.
        var action = req.target.action;
        if (action == "create") {
            req.body.userId = req.session.user.id;
            req.body.username = req.session.user.username;
        }
        next();
    } else {
        res.send("You Must Be Logged In", 403);
    }
};