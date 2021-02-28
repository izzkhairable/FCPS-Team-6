function getVolunteerTasks() {
	return null;
}

var volunteer_tasks = getVolunteerTasks();

if (volunteer_tasks == null) {
	document.getElementById("volunteer-task-header").innerHTML = "No tasks available";
	document.getElementById("volunteer-task-list").innerHTML = "<p>We will notify you when there are new requests.</p>";
} else {
	document.getElementById("volunteer-task-header").innerHTML = "Volunteer Tasks Available";
	//Table with volunteer tasks
}