const Task = require('../Model/mongoose');

const getAllTask = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({tasks});
    } catch (error) {
        res.status(501).send(error);
    }

};
const createTask = async (req,res) => {  

    try {
        const task = await Task.create(req.body);
        res.status(201).json({task});
        
    } catch (error) {
        res.status(501).send(error);
    }
};
const getTask = async (req, res) => {

    try {
        const {id : taskId} = req.params;
        const task = await Task.findOne({_id : taskId});
        
        if(!task){
            res.status(404).send(`There is no any item with id: ${taskId}`);
        }else{

            res.status(200).json({task});
        }

    } catch (error) {
        res.status(501).send(error);
    }


};
const updateTask = async (req,res) => {
    const {id: taskID} = req.params;
    
    try {
        const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
            new:true,
            runValidators : true,

        });
        if(!task){
            res.status(404).send(`There is no any item to update with id: ${taskId}`);
        }else{
            res.status(200).json({task});
        }
    } catch (error) {
        res.status(501).send(error);
    }

};

const deletetask = async (req,res) => {
    const {id: taskID} = req.params;
    try {
        const task = await Task.findOneAndDelete({_id : taskID});
    
        if(!task){
            res.status(404).send(`There is no any item to delete with id: ${taskID}`);
    
        }else{
            res.status(200).json({task});
        }
        
    } catch (error) {
        res.status(501).send(error);
    }

};

module.exports = {
    getAllTask,
    createTask,
    getTask,
    updateTask,
    deletetask
};

