import React, { useEffect, useState } from "react";

//create your first component
const ToDoList = () => {
	const [task, setTask] = useState([])

	useEffect(() => {
		var requestOptions = {
			method: 'GET',
			redirect: 'follow'
		};

		fetch("https://assets.breatheco.de/apis/fake/todos/user/alesanchezr", requestOptions)
			.then(response => response.json())
			.then(result => setTask(result))
			.catch(error => console.log('error', error));
	})
	const update = (tasks) => {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify(tasks);

		var requestOptions = {
			method: 'PUT',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};

		fetch("https://assets.breatheco.de/apis/fake/todos/user/alesanchezr", requestOptions)
			.then(response => response.json())
			.then(result => console.log(result))
			.catch(error => console.log('error', error));
	}

	const handleRemove = (i) => {
		update(task.filter((value, index, arr) => { return index != i }));
	}
	return (
		<div className="TheList text-center container">
			<h1 className="title text-center">&#10024; <b>To start a good day</b> &#9989;</h1>
			<form onSubmit={(event) => {
				// la siguiente linea previene que se ejecute por defecto el envió del formulario 
				event.preventDefault();
				let newTask = {
					"label": event.target[0].value,
					"done": false
				}
				// setTask([...task, newTask])
				update([...task,newTask])
				// the next line only clear input
				event.target[0].value = "";
			}}>
				<input placeholder="Add another task?" />
			</form>
			{task.map((value, index, arr) => {
				return <li key={index} >{value.label}<button onClick={() => handleRemove(index)}><i className="fa-solid fa-trash-can"></i></button></li>
			})}
		</div>
	);
};

export default ToDoList;
