import { useState } from "react";
export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = async () => {
    try {
      const response = await fetch("http://localhost:3000/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (!response.ok) {
        throw new Error(`Failed to add todo: ${response.statusText}`);
      }

      const result = await response.json();
      alert("Todo added successfully");
      console.log("Response:", result);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add todo. Check your backend and network.");
    }
  };

  return (
    <div>
      <input
        style={{
          padding: 10,
          margin: 10,
          borderRadius: 5,
          border: "none",
          boxShadow: "0 0 5px 0 rgba(0,0,0,0.2)",
        }}
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        style={{
          padding: 10,
          margin: 10,
          borderRadius: 5,
          border: "none",
          boxShadow: "0 0 5px 0 rgba(0,0,0,0.2)",
        }}
        type="text"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button
        style={{
          padding: 10,
          margin: 10,
          borderRadius: 5,
          border: "none",
          boxShadow: "0 0 5px 0 rgba(0,0,0,0.2)",
        }}
        onClick={handleAddTodo}
      >
        Add a todo
      </button>
    </div>
  );
}
