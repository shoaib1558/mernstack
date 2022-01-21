class ErrorResponse extends Error{
    constructor (message, statusCode){
        console.log(statusCode);
        super(message);
        this.statusCode = statusCode;
    }
}

module.exports = ErrorResponse;