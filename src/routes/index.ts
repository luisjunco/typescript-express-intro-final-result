import express from 'express';
import { Request, Response } from "express";

import { RequestCreateProject } from '../types/requests';

import Project from "../models/Project.model";

const router = express.Router();


// GET /
router.get('/', (req: Request, res: Response) => {
    res.json({ message: 'all good in here' });
});



// GET /projects
router.get('/projects', (req: Request, res: Response) => {
    Project.find()
        .then((projects) => {
            res.json(projects);
        })
        .catch((err) => {
            console.log("Error getting projects from DB...", err);
            res.status(500).json({ message: "Error getting projects from DB" });
        });
});



// POST /projects
router.post('/projects', (req: RequestCreateProject, res: Response) => {
    const { title, description } = req.body;

    Project.create({ title, description })
        .then((project) => {
            res.json(project);
        })
        .catch((err) => {
            console.log("Error creating project...", err);
            res.status(500).json({ message: "Error creating project" });
        });
});


export default router;