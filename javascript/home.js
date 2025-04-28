function checkResult() {
    const rollNumber = document.getElementById("rollNumber").value;
    const studentName = document.getElementById("studentName").value;




    
    // Students data
    const students = [
        { roll: "029", name: "Kirabo Pal Ruth" },
        { roll: "039", name: "Mieconi Asher King" },
        { roll: "038", name: "Mark Phillip Serunkuma" },
        { roll: "043", name: "Mukasa Jonathan Muwanguzi" },
        { roll: "075", name: "Sewaya Moses" },
        { roll: "014", name: "Balaba Prince Christian" },
        { roll: "011", name: "Atim Ejuku Jedidah" },
        { roll: "012", name: "Atwebembeire Praise" },
        { roll: "056", name: "Namanya Matthew Ninkusiima" },
        { roll: "082", name: "Wanjala Jonah Samuel" },
        { roll: "018", name: "Byarugaba Gabriel Jayden" },
        { roll: "066", name: "Nimurungi Rachael" },
        { roll: "019", name: "Elisha Grace Musumba" },
        { roll: "068", name: "Nsiima Angel" },
        { roll: "063", name: "Nansubuga Robinah Kizito" },
        { roll: "028", name: "Kirabo Tiltons Egondi" },
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