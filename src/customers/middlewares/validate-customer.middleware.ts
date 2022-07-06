

import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class ValidateCustomerMiddleware implements 
NestMiddleware {
    use(req:Request, res:Response, next: NextFunction){
       const {authrization} = req.headers;
       if(!authrization){
           return res.status(403)
           .send(['No Authentication']);
       }
       if(authrization === '200'){
        next();
       }else{
        return res.status(403)
        .send(['Invalid Authentication']);       
    }
    }
}