const allowedMethods = ["GET"];

function isValidRequest(request) {
    return allowedMethods.includes(request.method);
}

module.exports.validateIncomingRequest = (req,res, next) =>{
    isValidRequest(req) ? 
                            next() : 
                            res.set('Allow', allowedMethods.toString()) && 
                            res.status(405).end();
}