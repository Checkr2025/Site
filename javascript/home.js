function checkResult() {
    const rollNumber = document.getElementById("rollNumber").value;
    const studentName = document.getElementById("studentName").value;




    
    // Students data
    const students = [
        { roll: "030", name: "Kirabo Pal Ruth" },
        { roll: "040", name: "Mieconi Asher King" }
    ];




    
    // Check if the entered credentials match any student
    const student = students.find(s => s.roll === rollNumber && s.name === studentName);

    // If student is found, redirect to the results page
    if (student) {
        window.location.href = `result.html?roll=${student.roll}&name=${encodeURIComponent(student.name)}`;
    } else {
        alert("No results found for the provided credentials. Please check your roll number and name.");
    }
}