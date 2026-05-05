import React from 'react';
import { useAppSelector } from '../../hooks/reduxHooks';

const TaskList = () => {
    const tasks = useAppSelector((state) => state.tasks.tasks);
    return (
        <div className="p-4">
            {tasks.length === 0 ? (
                <p>No tasks yet</p>
            ):(
                tasks.map((task) => (
                    <div key={task.id} className="card bg-base-200 p-3 mb-2">
                        <p>{task.title}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default TaskList;