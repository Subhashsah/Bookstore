class ApiError extends Error{
    constructor(statusCode ,message="somethings went wrong"){
        super()
        this.statusCode=statusCode;
        this.message=message;
        
    }
}
export {ApiError}