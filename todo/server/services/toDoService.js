const ToDo = require('../models/ToDo');

class ToDoService {
  async createToDo(task, when) {
    if (!task || !when) {
      throw new Error('Please fill all fields');
    }

    const toDo = await ToDo.create({
      task: task,
      when: when,
    });

    return toDo;
  }

  async getAllToDos() {
    const toDos = await ToDo.find();
    return toDos;
  }

  async updateToDoById(id, updates) {
    const toDo = await ToDo.findById(id);
    if (!toDo) {
      throw new Error('toDo was not found');
    }

    if (updates.task) {
      toDo.task = updates.task;
    }

    if (updates.when) {
      toDo.when = updates.when;
    }

    const result = await toDo.save();
    return result;
  }

  async deleteToDoById(id) {
    const result = await ToDo.deleteOne({ _id: id });
    return result;
  }
}

module.exports = new ToDoService();
