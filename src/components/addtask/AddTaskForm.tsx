import React, { useState } from 'react';

const AddTaskForm = () => {

    const [title, setTitle] = useState("");

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        console.log(title);
        setTitle("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Enter task'
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTaskForm;