import { useState } from "react";
import CreateForm from "./CreateForm";
import ToDo from "./ToDo";

function ToDoWrapper() {
  
    const [todos, setTodos] = useState([]);
    const addTodo = (content) => {
        //用隨機抽一個數字做為key 避免console警告
        setTodos([...todos, {content: content, id: Math.random(),
            isCompleted: false, isEditing: false}]);
    }
    const deleteTodo = (id) => {
        //用filter篩選資料 變數todo代表每一筆資料
        //id一樣就會被刪掉 最後回傳篩選完的陣列
        //再由setTodos來更新state
        setTodos(todos.filter((todo) => {
            return todo.id !== id;
        }));
    }
    const toggleCompleted = (id) => {
        setTodos(todos.map((todo) => {
            return todo.id === id 
            ? {...todo, isCompleted: !todo.isCompleted} 
            : todo
        }))
    }
    const toggleIsEditing = (id) => {
        setTodos(todos.map((todo) => {
            return todo.id === id 
            ? {...todo, isEditing: !todo.isEditing} 
            : todo
        }))
    }
    const editTodo = (id, newcontent) => {
        setTodos(todos.map((todo) => {
            return todo.id === id 
            ? {...todo, content: newcontent, isEditing: false} 
            : todo
        }))
    }
  
    return (
    <div className="wrapper">
      <h1>代辦事項</h1>
      <CreateForm addTodo={addTodo} />
      {todos.map((todo)=>{
        return <ToDo todo={todo} key={todo.id} 
        deleteTodo={deleteTodo} toggleCompleted={toggleCompleted} 
        toggleIsEditing={toggleIsEditing} editTodo={editTodo} />
      })}
    </div>
  );
}

export default ToDoWrapper;
