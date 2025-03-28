export class ApiResponse{
    constructor(statusCode,data,message="success"){
        this.stausCode=statusCode;
        this.data=data;
        this.message=message;
    }
}