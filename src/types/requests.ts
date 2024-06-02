import { Request } from "express";


export interface RequestCreateProject extends Request {
    body: {
        title: string;
        description: string;
    }
}

