const { Router } = require("express");
const {
    getTaskData,
    createTaskData,
    updateTaskData,
    deleteTaskData,
    findById,
} = require("../controller/taskcontroller");
const taskRouter = Router();

taskRouter.get("/", getTaskData);
taskRouter.get("/:id", findById);

taskRouter.post("/", createTaskData);
taskRouter.patch("/:id", updateTaskData);
taskRouter.delete("/:id", deleteTaskData);

module.exports = { taskRouter };
