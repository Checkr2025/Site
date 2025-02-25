        // Student data
        const students = [
            { roll: "040", name: "Mieconi Asher King", class: "F.4 C", results: [
                {subject: "Mathematics", marks: "90", comment: "Many learning outcomes achieved."},
                {subject: "English", marks: "78", comment: "Few learning outcomes achieved."},
                {subject: "Biology", marks: "60", comment: "Not enough learning outcomes achieved."},
                {subject: "Chemistry", marks: "81", comment: "Few learning outcomes achieved. Enough for overall pass."},
                {subject: "Physics", marks: "94", comment: "Many learning outcomes achieved."},
                {subject: "Geography", marks: "89", comment: "Many learning outcomes achieved."},
                {subject: "Information and Communication Technology", marks: "97", comment: "Many learning outcomes achieved. Enough for overall pass."},
                {subject: "Christian Religious Education", marks: "78", comment: "Few learning outcomes achieved."},
                {subject: "History", marks: "58", comment: "Very few learning outcomes achieved."},
            ]},

            { roll: "030", name: "Kirabo Pal Ruth", class: "F.4 C", results: [
                {subject: "Mathematics - Circle Properties", marks: "2.7", comment: "Many learning outcomes achieved."},
                {subject: "Mathematics - Quadratic Equations", marks: "2.4", comment: "Many learning outcomes achieved."},
                {subject: "English - Banking and Money", marks: "2.7", comment: "Many learning outcomes achieved."},
                {subject: "Christian Religious Education - Peace", marks: "2.1", comment: "Few learning outcomes achieved. Enough for overall pass."},
                {subject: "Information and Communication Technology - Web Design", marks: "1.8", comment: "Few learning outcomes achieved. Enough for overall pass."},
                {subject: "Entrepreneurship Education - International Trade", marks: "2.4", comment: "Few learning outcomes achieved."},
                {subject: "Entrepreneurship Education - Insurance", marks: "2.7", comment: "Many learning outcomes achieved."},
                {subject: "Physics - Heat", marks: "1.8", comment: "Few learning outcomes achieved."},
                {subject: "Chemistry - Fossil Fuels", marks: "1.8", comment: "Many learning outcomes achieved."},
                {subject: "Geography - Irrigation farming in East Africa", marks: "1.2", comment: "Very few learning outcomes achieved. Not enough for a pass."},
                {subject: "History - Pan-Africanism", marks: "1.8", comment: "Few learning outcomes achieved. Enough for overall learning."}
            ]}


        ];





        // Extracting query parameters 
        const urlParams = new URLSearchParams(window.location.search);
        const roll = urlParams.get('roll');
        const name = decodeURIComponent(urlParams.get('name'));

        // Find the student by roll number and name
        const student = students.find(s => s.roll === roll && s.name === name);

        // If student found, display their information, else alert an error
        if (student) {
            document.getElementById("resultName").textContent = student.name;
            document.getElementById("resultRoll").textContent = student.roll;
            document.getElementById("resultClass").textContent = student.class;

            // Populate subject results 
            const resultsTable = document.getElementById("resultsTable");
            student.results.forEach(subject => {
                const row = document.createElement("tr");
                row.innerHTML = `<td>${subject.subject}</td><td>${subject.marks}</td><td>${subject.comment}</td>`;
                resultsTable.appendChild(row);
            });
        } else {
            alert("No results found for the provided credentials. Please check your roll number and name.");
            window.location.href = "index.html"; // Redirect to home page if student not found
        }