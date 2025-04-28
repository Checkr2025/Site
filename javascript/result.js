// Student data
const students = [
    { roll: "039", name: "Mieconi Asher King", class: "F.4 C", results: [
        {subject: "Biology", marks: "61.0", comment: "C"},
        {subject: "Chemistry", marks: "56.0", comment: "D"},
        {subject: "Christian Religious Education", marks: "78.0", comment: "B"},
        {subject: "English", marks: "82.0", comment: "B"},
        {subject: "Geography", marks: "92.0", comment: "A"},
        {subject: "History", marks: "33.0", comment: "E"},
        {subject: "Information, Communication and Technology", marks: "83.0", comment: "B"},
        {subject: "Mathematics", marks: "71.0", comment: "B"},
        {subject: "Physics", marks: "82.0", comment: "B"},
    ]},

    { roll: "011", name: "Atim Ejuku Jedidah", class: "F.4 C", results: [
        {subject: "Biology", marks: "40.0", comment: "D"},
        {subject: "Chemistry", marks: "55.0", comment: "D"},
        {subject: "Chinese", marks: "50.0", comment: "D"},
        {subject: "English", marks: "70.0", comment: "B"},
        {subject: "Geography", marks: "70.0", comment: "B"},
        {subject: "History", marks: "33.0", comment: "E"},
        {subject: "Mathematics", marks: "70.0", comment: "B"},
        {subject: "Physics", marks: "71.0", comment: "B"},
        {subject: "Technology and Design", marks: "68.0", comment: "C"},
    ]},

    { roll: "012", name: "Atwebembeire Praise", class: "F.4 C", results: [
        {subject: "Biology", marks: "57.0", comment: "D"},
        {subject: "Chemistry", marks: "60.0", comment: "C"},
        {subject: "Chinese", marks: "74.0", comment: "B"},
        {subject: "English", marks: "88.0", comment: "A"},
        {subject: "Entrepreneurship", marks: "84.0", comment: "B"},
        {subject: "Geography", marks: "90.0", comment: "A"},
        {subject: "History", marks: "33.0", comment: "E"},
        {subject: "Mathematics", marks: "40.0", comment: "D"},
        {subject: "Physics", marks: "76.0", comment: "B"},
    ]},

    { roll: "014", name: "Balaba Prince Christian", class: "F.4 C", results: [
        {subject: "Biology", marks: "46.0", comment: "D"},
        {subject: "Chemistry", marks: "33.0", comment: "E"},
        {subject: "English", marks: "84.0", comment: "B"},
        {subject: "French", marks: "68.0", comment: "C"},
        {subject: "Geography", marks: "73.0", comment: "B"},
        {subject: "History", marks: "33.0", comment: "E"},
        {subject: "Information, Communication and Technology", marks: "69.0", comment: "C"},
        {subject: "Mathematics", marks: "56.0", comment: "D"},
        {subject: "Physics", marks: "52.0", comment: "D"},
    ]},

    { roll: "056", name: "Namanya Matthew Ninkusiima", class: "F.4 C", results: [
        {subject: "Biology", marks: "56.0", comment: "D"},
        {subject: "Chemistry", marks: "57.0", comment: "D"},
        {subject: "Christian Religious Education", marks: "85.0", comment: "A"},
        {subject: "English", marks: "71.0", comment: "B"},
        {subject: "Entrepreneurship", marks: "80.0", comment: "B"},
        {subject: "Geography", marks: "70.0", comment: "B"},
        {subject: "History", marks: "50.0", comment: "D"},
        {subject: "Mathematics", marks: "41.0", comment: "D"},
        {subject: "Physics", marks: "77.0", comment: "B"},
    ]},

    { roll: "082", name: "Wanjala Jonah Samuel", class: "F.4 C", results: [
        {subject: "Biology", marks: "58.0", comment: "D"},
        {subject: "Chemistry", marks: "86.0", comment: "A"},
        {subject: "Christian Religious Education", marks: "82.0", comment: "B"},
        {subject: "English", marks: "70.0", comment: "B"},
        {subject: "Entrepreneurship", marks: "57.0", comment: "D"},
        {subject: "Geography", marks: "55.0", comment: "D"},
        {subject: "History", marks: "50.0", comment: "D"},
        {subject: "Mathematics", marks: "38.0", comment: "E"},
        {subject: "Physics", marks: "68.0", comment: "C"},
    ]},

    { roll: "038", name: "Mark Phillip Serunkuma", class: "F.4 C", results: [
        {subject: "Biology", marks: "45.0", comment: "D"},
        {subject: "Chemistry", marks: "59.0", comment: "D"},
        {subject: "English", marks: "75.0", comment: "B"},
        {subject: "Entrepreneurship", marks: "70.0", comment: "B"},
        {subject: "French", marks: "74.0", comment: "B"},
        {subject: "Geography", marks: "80.0", comment: "B"},
        {subject: "History", marks: "33.0", comment: "E"},
        {subject: "Mathematics", marks: "48.0", comment: "D"},
        {subject: "Physics", marks: "62.0", comment: "C"},
    ]},

    { roll: "075", name: "Sewaya Moses", class: "F.4 C", results: [
        {subject: "Biology", marks: "63.0", comment: "C"},
        {subject: "Chemistry", marks: "76.0", comment: "B"},
        {subject: "Christian Religious Education", marks: "36.0", comment: "E"},
        {subject: "English", marks: "86.0", comment: "A"},
        {subject: "Entrepreneurship", marks: "80.0", comment: "B"},
        {subject: "Geography", marks: "57.0", comment: "D"},
        {subject: "History", marks: "68.0", comment: "C"},
        {subject: "Mathematics", marks: "53.0", comment: "D"},
        {subject: "Physics", marks: "69.0", comment: "C"},
    ]},

    { roll: "043", name: "Mukasa Jonathan Muwanguzi", class: "F.4 C", results: [
        {subject: "Biology", marks: "52.0", comment: "D"},
        {subject: "Chemistry", marks: "57.0", comment: "D"},
        {subject: "English", marks: "66.0", comment: "C"},
        {subject: "French", marks: "62.0", comment: "C"},
        {subject: "Geography", marks: "70.0", comment: "B"},
        {subject: "History", marks: "50.0", comment: "D"},
        {subject: "Mathematics", marks: "34.0", comment: "E"},
        {subject: "Physics", marks: "75.0", comment: "B"},
        {subject: "Technology and Design", marks: "60.0", comment: "C"},
    ]},

    { roll: "018", name: "Byarugaba Gabriel Jayden", class: "F.4 C", results: [
        {subject: "Biology", marks: "36.0", comment: "E"},
        {subject: "Chemistry", marks: "65.0", comment: "C"},
        {subject: "Christian Religious Education", marks: "34.0", comment: "E"},
        {subject: "English", marks: "68.0", comment: "C"},
        {subject: "Entrepreneurship", marks: "41.0", comment: "D"},
        {subject: "Geography", marks: "55.0", comment: "D"},
        {subject: "History", marks: "33.0", comment: "E"},
        {subject: "Mathematics", marks: "38.0", comment: "E"},
        {subject: "Physics", marks: "32.0", comment: "E"},
    ]},

    { roll: "066", name: "Nimurungi Rachael", class: "F.4 C", results: [
        {subject: "Biology", marks: "58.0", comment: "D"},
        {subject: "Chemistry", marks: "61.0", comment: "C"},
        {subject: "Christian Religious Education", marks: "81.0", comment: "B"},
        {subject: "English", marks: "86.0", comment: "A"},
        {subject: "Geography", marks: "70.0", comment: "B"},
        {subject: "History", marks: "33.0", comment: "E"},
        {subject: "Mathematics", marks: "35.0", comment: "E"},
        {subject: "Physics", marks: "68.0", comment: "C"},
        {subject: "Technology and Design", marks: "66.0", comment: "C"},
    ]},

    { roll: "019", name: "Elisha Grace Musumba", class: "F.4 C", results: [
        {subject: "Biology", marks: "46.0", comment: "D"},
        {subject: "Chemistry", marks: "50.0", comment: "D"},
        {subject: "Christian Religious Education", marks: "81.0", comment: "B"},
        {subject: "English", marks: "84.0", comment: "B"},
        {subject: "Geography", marks: "77.0", comment: "B"},
        {subject: "History", marks: "56.0", comment: "D"},
        {subject: "Information, Communication and Technology", marks: "78.0", comment: "B"},
        {subject: "Mathematics", marks: "63.0", comment: "C"},
        {subject: "Physics", marks: "61.0", comment: "C"},
    ]},

    { roll: "068", name: "Nsiima Angel", class: "F.4 C", results: [
        {subject: "Biology", marks: "74.0", comment: "B"},
        {subject: "Chemistry", marks: "68.0", comment: "C"},
        {subject: "English", marks: "75.0", comment: "B"},
        {subject: "Entrepreneurship", marks: "85.0", comment: "A"},
        {subject: "French", marks: "81.0", comment: "B"},
        {subject: "Geography", marks: "97.0", comment: "A"},
        {subject: "History", marks: "56.0", comment: "D"},
        {subject: "Mathematics", marks: "56.0", comment: "D"},
        {subject: "Physics", marks: "81.0", comment: "B"},
    ]},

    { roll: "063", name: "Nansubuga Robinah Kizito", class: "F.4 C", results: [
        {subject: "Agriculture", marks: "69.0", comment: "C"},
        {subject: "Biology", marks: "56.0", comment: "D"},
        {subject: "Chemistry", marks: "55.0", comment: "D"},
        {subject: "Christian Religious Education", marks: "65.0", comment: "C"},
        {subject: "English", marks: "82.0", comment: "B"},
        {subject: "Geography", marks: "65.0", comment: "C"},
        {subject: "History", marks: "50.0", comment: "D"},
        {subject: "Mathematics", marks: "58.0", comment: "D"},
        {subject: "Physics", marks: "81.0", comment: "B"},
    ]},

    { roll: "028", name: "Kirabo Tiltons Egondi", class: "F.4 C", results: [
        {subject: "Biology", marks: "59.0", comment: "D"},
        {subject: "Chemistry", marks: "70.0", comment: "B"},
        {subject: "Christian Religious Education", marks: "70.0", comment: "B"},
        {subject: "English", marks: "88.0", comment: "A"},
        {subject: "Entrepreneurship", marks: "93.0", comment: "A"},
        {subject: "Geography", marks: "65.0", comment: "C"},
        {subject: "History", marks: "72.0", comment: "B"},
        {subject: "Mathematics", marks: "33.0", comment: "E"},
        {subject: "Physics", marks: "77.0", comment: "B"},
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