import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { useState } from 'react';
import { isValidTitle } from '../utils.js';

function ToDoForm({ addTask, toggleAllTasks, allChecked }) {

    const [title, setTitle] = useState('');
    const [validTitle, setValidTitle] = useState(false);

    const handleInput = (e) => {
        const value = e.target.value;
        setTitle(value);
        setValidTitle(isValidTitle(value));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            id: Date.now(),
            title: title,
            completed: false
        }

        addTask(newTask);
        setTitle('');
        setValidTitle(false);
    }

    const isValidForm = validTitle;

    return (
        <form
            className='form mx-auto mt-5 w-75 d-flex flex-column justify-content-center align-content-center'>
            <h1 className='text-center mb-4'>ToDo List</h1>
            <div className="input-group  mx-auto " id="input-group">
                <div className="input-group-text border-0 " id="checkbox-div">
                    <input
                        className="form-check-input  border-1 rounded-4 fs-3 my-2"
                        type="checkbox"
                        aria-label="Checkbox for following text input"
                        checked={allChecked}
                        onChange={toggleAllTasks}
                    />
                </div>
                <input
                    onChange={handleInput}
                    type="text"
                    className={`form-control border-0 ${validTitle ? '' : 'is-invalid'}`}
                    aria-label="Text input with checkbox"
                    placeholder='Create a new task'
                    value={title}
                />
                <button type="submit"
                    className='btn border-0'
                    id='btn-plus'
                    onClick={handleSubmit}
                    disabled={!isValidForm}
                >
                    <FaPlus className='opacity-25'
                    />
                </button>
            </div>
        </form>
    )
}

export default ToDoForm
