const allowedMethods = ["GET"];

function isValidRequest(request) {
    return allowedMethods.includes(request.method);
}

module.exports.validateIncomingRequest = (req,res, next) =>{
    isValidRequest(req) ? next() : res.status(405).end();
}