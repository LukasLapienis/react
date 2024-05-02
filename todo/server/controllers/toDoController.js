const asyncHandler = require('express-async-handler');
const toDoService = require('../services/toDoService');

// create toDo
// @route: POST /api/toDo

const createToDo = asyncHandler(async (req, res) => {
   const { task, when } = req.body;

   try {
      const toDo = await toDoService.createToDo(task, when);
      res.status(201).json({ message: 'task created successfully', toDo });
   } catch (error) {
      res.status(400).json({ error: 'task creation failed: ' + error.message });
   }
});

// get all toDos
// @route: GET /api/toDo

const getAllToDos = asyncHandler(async (req, res) => {
   try {
      const toDos = await toDoService.getAllToDos();
      res.status(200).json({ message: 'toDos fetched successfully', toDos });
   } catch (error) {
      res.status(400).json({ error: 'toDos fetch failed: ' + error.message });
   }
});

// update toDo by toDo id
// @route: PUT /api/toDo/:id

const updateToDoById = asyncHandler(async (req, res) => {
   const { id } = req.params;
   const updates = req.body;

   try {
      const updatedToDo = await toDoService.updateToDoById(id, updates);
      res.status(200).json({
         message: 'toDo updated successfully',
         ToDo: updatedToDo,
      });
   } catch (error) {
      res.status(400).json({
         error: 'Failed to update toDo: ' + error.message,
      });
   }
});

// delete any toDo by toDo id
// @route: DELETE /api/toDo/:id

const deleteToDoById = asyncHandler(async (req, res) => {
   const { id } = req.params;

   try {
      const result = await toDoService.deleteToDoById(id);
      if (result.deletedCount === 0) {
         return res.status(404).json({ error: 'ToDo not found' });
      }
      res.status(200).json({ message: 'ToDo deleted successfully' });
   } catch (error) {
      res.status(400).json({
         error: 'Failed to delete toDo: ' + error.message,
      });
   }
});

module.exports = { createToDo, getAllToDos, updateToDoById, deleteToDoById };
