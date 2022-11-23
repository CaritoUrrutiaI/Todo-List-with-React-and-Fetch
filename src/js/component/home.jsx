import React, { useState } from "react";

//create your first component
const ToDoList = () => {
	const [task, setTask] = useState(
		["Be grateful for what you have !!",
		"Drink a glass of water",
		"Do Yoga (30min)",
		"Meditation",
		"Write my morning pages",
		"Take a shower", 
		"Breakfast"])

	const handleRemove = (i) => {
		setTask(task.filter((value, index,arr) => {return index != i}));
	}
	return (
		<div className="TheList text-center container">
			<h1 className="title text-center">&#10024; <b>To start a good day</b> &#9989;</h1>
			<form onSubmit={(event)=>
			{event.preventDefault(); 
			setTask([...task, event.target[0].value])
			// the next line only clear input
			event.target[0].value = "";}}>
			<input placeholder="Add another task?"/>
			</form>
			{task.map((value, index,arr) =>{
				return <li key={index} >{value}<button onClick={() => handleRemove(index)}><i className="fa-solid fa-trash-can"></i></button></li>
			})}
		</div>
	);
};

export default ToDoList;
