const  TaskModel = require("../models/TaskModel")

module.exports.getTasks = async (req,res) => { 
    const tasks = await TaskModel.find()
    res.send(tasks)
}

module.exports.saveTasks = (req,res) => { 
    const {task} = req.body

    TaskModel.create({task})
    .then((data) => {
        console.log("saved successfully")
        res.status(201).send(data)
    }).catch((err) => {
        console.log(err)
    })
}

module.exports.getTaskById = async (req, res) => { 
    const { id } = req.params;
    
    try {
        const task = await TaskModel.findById(id);
        if (!task) {
            return res.status(404).send("Task not found");
        }
        res.send(task);
    } catch (err) {
        console.log(err);
        res.status(500).send("Server error");
    }
};


module.exports.updateTasks = (req,res) => { 
    const {id} = req.params
    const {task} = req.body

    TaskModel.findByIdAndUpdate(id, {task})
    .then(() => {
        res.send("updated")
    })
    .catch((err) => {
        console.log(err)
    })
}

module.exports.deleteTasks = (req,res) => { 
    const {id} = req.params
    TaskModel.findByIdAndDelete(id)
    .then(() => {
        res.send("deleted")
    })
    .catch((err) => {
        console.log(err)
    })
}