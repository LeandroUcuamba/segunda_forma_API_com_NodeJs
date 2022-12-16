/* Aqui será escrito todas as funções que vão interagir diretamente 
com o banco de dados */

const connection = require('./connection');

const getAll = async () => {
    const [tasks] = await connection.execute('SELECT * FROM tasks');
    return tasks; // "return tasks[0];" return array I need or look above!
};

const createTask = async (task) => {
  const { title } = task;
  const dateUTC = new Date(Date.now()).toUTCString();
  const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?,?,?)';
  const [createdTask] = await connection.execute(query, [title, 'pendente', dateUTC]);

  return createdTask;
  //ou
  // return {insertId: createdTask.insertId};
};

const deleteTask = async (id) => {

    const removedTask = await connection.execute("DELETE FROM tasks WHERE id = ?", [id]);
    return removedTask;
};

const updateTask = async (id, task) => {

    const query = "UPDATE tasks SET title =?, status =? WHERE id = ?";
    
    const {title, status} = task; //tirar o title e status da nossa "task";

    const updatedTask = await connection.execute(query, [title, status, id]);
    return updatedTask;
};


module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
};