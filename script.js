function findCourse() {
    let skill = document.getElementById("skill").value;
    let result = document.getElementById("result");

    if (skill === "") {
        result.innerHTML = "Please select a skill.";
    }
    else if (skill === "programming") {
        result.innerHTML = "Recommended Course: Python Programming / Java Programming";
    }
    else if (skill === "design") {
        result.innerHTML = "Recommended Course: Graphic Design / UI-UX Design";
    }
    else if (skill === "database") {
        result.innerHTML = "Recommended Course: Database Management / SQL";
    }
    else if (skill === "networking") {
        result.innerHTML = "Recommended Course: Networking / Cyber Security";
    }
    else if (skill === "web") {
        result.innerHTML = "Recommended Course: Web Development / Full Stack Development";
    }
}