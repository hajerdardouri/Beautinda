import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
const Addtodo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  console.log(task);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTodo = (e) => {
    setTodos([task, ...todos]);
  };

  const handleDelete = (todo) => {
    const deleteTask = todos.filter(
      (todoTask) => todos.indexOf(todoTask) != todos.indexOf(todo)
    );
    setTodos(deleteTask);
  };

  return (
    <div className=" grid justify-items-center ">
      <div className="tab-bordered mb-10 py-10">
        <p className="text-xl">Things To do:</p>
      </div>
      <div className="form-control w-80">
        {todos?.length >= 1
          ? todos.map((todo, id) => (
              <div key={id} className="flex">
                <div>
                  <label className="label cursor-pointer">
                    <span className="label-text">{todo}</span>
                    <input
                      type="checkbox"
                      defaultChecked="checked"
                      className="checkbox"
                    />
                  </label>
                </div>
                <div>
                  <button
                    onClick={() => {
                      handleDelete(todo);
                    }}
                  >
                    <AiFillDelete />
                  </button>
                </div>
                <div className="tab-bordered"></div>
              </div>
            ))
          : "Enter a todo item"}
      </div>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs  mb-5"
      />
      <button className="btn btn-active mb-80" onClick={handleAddTodo}>
        Button
      </button>
    </div>
  );
};
export default Addtodo;
