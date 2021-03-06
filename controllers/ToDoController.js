
import ToDoModel from '../models/ToDoModels'


const getToDo = async (req, res) => {
    const Todo = await ToDoModel.find();
    res.send(Todo);
}

 const saveToDo = async (req, res) => {
    const { text } = req.body;
    ToDoModel.create({ text }).then(() => res.set(201).send("Added Successfully"))
        .catch((err) => console.log(err))
}


const  deleteToDo = (req, res) => {
    const { _id } = req.body;

ToDoModel
    .findByIdAndDelete(id)
    .then(() => res.set(201).send("Deleted Successfully..."))
    .catch((err) => console.log(err))

}

 const updateToDo = (req, res) => {
    const { _id, text } = req.body;

    ToDoModel
        .findByIdAndUpdate(id, (text))
        .then(() => res.set(201).send("Updated Successfully..."))
        .catch((err) => console.log(err))
}

export default { getToDo, saveToDo, deleteToDo, updateToDo };