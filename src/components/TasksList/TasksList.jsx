import './TasksList.css';
import './Task.css';
import React from 'react';
import { Task } from './Task';

const TasksList = (props) => {

    const tasks = [
        new Task('ПОДПИШИСЬ', 'Подпишись на телеграм канал!', 'ПОДПИСАТЬСЯ', '/task1'),
        new Task('ПРИГЛАСИ', 'Пригласи двух друзей!', 'ПРИГЛАСИТЬ', '/task2'),
        // Добавьте дополнительные задачи здесь
    ];

    return (

        <div className="tasks-list">
            {tasks.map((task, index) => (
                <div key={index} className="task">
                    <div className="containerTask">
                    <span className="task-title">{task.title}</span>
                    <span className="task-subtitle">{task.subtitle}</span>
                    </div>
                    <a href={task.link} className="task-button">{task.buttonTitle}</a>
                </div>
            ))}
        </div>

    );
}

export  default TasksList;