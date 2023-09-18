import React, { useState } from 'react';
import './style.css';

// Hàm này tạo ra một ID ngẫu nhiên cho mỗi todo
function generateId() {
  return Math.floor(Math.random() * 10);
}

function Todo() {
  // Trạng thái cho danh sách todos, giá trị input, todo đang sửa, và nội dung mới của todo
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);
  const [newTodoText, setNewTodoText] = useState('');

  // Hàm xử lý khi người dùng nhấn nút "Submit" để thêm một todo mới
  const handleSubmit = () => {
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: generateId(),
      })
    );
    setInput('');
  };

  // Hàm xóa một todo dựa trên ID
  const removeTodo = (id) => setTodos((todos) => todos.filter((t) => t.id !== id));

  // Hàm bắt đầu sửa một todo, lấy ID và nội dung cũ để hiển thị trong input
  const editTodo = (id, text) => {
    setEditingTodo(id);
    setNewTodoText(text);
  };

  // Hàm cập nhật todo sau khi sửa và thoát khỏi chế độ sửa
  const updateTodo = () => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === editingTodo
          ? {
              ...todo,
              text: newTodoText,
            }
          : todo
      )
    );
    setEditingTodo(null);
    setNewTodoText('');
  };

  return (
    <div className="container">
      {/* Trường input cho người dùng nhập todo mới */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New Todo"
      />

      {/* Nút "Submit" để thêm todo mới */}
      <button onClick={handleSubmit}>Submit</button>

      {/* Danh sách todos */}
      <ul className="todos-list">
        {todos.map(({ text, id }) => (
          <li key={id} className="todo">
            {editingTodo === id ? (
              // Nếu đang sửa, hiển thị input và nút "Update"
              <>
                <input
                  type="text"
                  value={newTodoText}
                  onChange={(e) => setNewTodoText(e.target.value)}
                />
                <button onClick={updateTodo}>Update</button>
              </>
            ) : (
              // Nếu không đang sửa, hiển thị nội dung todo và nút "Edit" và "Xóa"
              <>
                <span>{text}</span>
                <div>
                  <button className="edit" onClick={() => editTodo(id, text)}>
                    Edit
                  </button>
                  <button className="close" onClick={() => removeTodo(id)}>
                    X
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
