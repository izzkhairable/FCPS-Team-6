console.log("a very long winded message to show this is working");
function getTaskDetails() {
	var task_details = {
		name: "MC Hammer",
		age: 60,
		taskName: "Hammer Time",
		taskDescription: "Move your body move your body",
		address: "123 Sesame Street",
		postalCode: 420690
	}
	return task_details;
}

var task_details = getTaskDetails();
document.getElementById("name").innerHTML = task_details.name;
document.getElementById("age").innerHTML = task_details.age;
document.getElementById("task_name").innerHTML = task_details.taskName;
document.getElementById("task_description").innerHTML = task_details.taskDescription;
document.getElementById("address").innerHTML = task_details.address;
