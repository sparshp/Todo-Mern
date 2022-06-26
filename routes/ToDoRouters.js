import express from 'express';
const router = express.Router();


import {getToDo ,saveToDo ,deleteToDo ,updateToDo} from '../controllers/ToDoController'

router.get("/get-todo", getToDo);
router.post("/save-todo", saveToDo);
router.post("/delete-todo", deleteToDo);
router.post("/update-todo", updateToDo);


export default router