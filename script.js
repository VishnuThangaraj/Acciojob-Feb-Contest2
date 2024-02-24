let studentsData = []; // Variable to store the original student data
let tempStudentData = []; // Variabel to store the passed students data
// Sorting Buttons
const sort_ascending = document.getElementById("sort_ascending");
const sort_descending = document.getElementById("sort_descending");
const sort_by_marks = document.getElementById("sort_by_marks");
const sort_by_passing = document.getElementById("sort_by_passing");
const sort_by_class = document.getElementById("sort_by_class");
const sort_by_gender = document.getElementById("sort_by_gender");

// Fetch Student Data
fetch("studentData.json")
  .then((response) => response.json())
  .then((students) => {
    studentsData = students; // Save original data
    displayStudents(students);
  })
  .catch((error) => console.error("Error fetching students:", error));

// Function to display students in the table
function displayStudents(students) {
  const tableBody = document.getElementById("studentTable_body");
  tableBody.innerHTML = ""; // Clear existing content

  students.forEach((student) => {
    const row = tableBody.insertRow();
    row.insertCell(0).textContent = student.id;
    row.insertCell(
      1
    ).textContent = `${student.first_name} ${student.last_name}`;
    row.insertCell(2).textContent = student.gender;

    // Add image cell
    //   const imageCell = row.insertCell(1);
    //   const image = document.createElement("img");
    //   image.src = student.image;
    //   image.alt = student.name + " image";
    //   imageCell.appendChild(image);

    row.insertCell(3).textContent = student.class;
    row.insertCell(4).textContent = student.marks;
    row.insertCell(5).textContent = student.passing;
    row.insertCell(6).textContent = student.email;
  });
}

// Button Functionalities

// Function to sort students by name(Ascending)
sort_ascending.addEventListener("click", function () {
  console.log("Students Sorted in Ascending Order");
  const sortedStudents = [...studentsData]; // Create a copy of the original data

  sortedStudents.sort((a, b) => {
    const nameA = `${a.first_name} ${a.last_name}`.toUpperCase();
    const nameB = `${b.first_name} ${b.last_name}`.toUpperCase();

    return nameA.localeCompare(nameB);
  });

  displayStudents(sortedStudents);
});

// Function to sort students by name(Descending)
sort_descending.addEventListener("click", function () {
  console.log("Students Sorted in Descending Order");
  const sortedStudents = [...studentsData]; // Create a copy of the original data

  sortedStudents.sort((a, b) => {
    const nameA = `${a.first_name} ${a.last_name}`.toUpperCase();
    const nameB = `${b.first_name} ${b.last_name}`.toUpperCase();

    return nameB.localeCompare(nameA);
  });

  displayStudents(sortedStudents);
});

// Function to sort students by Marks
sort_by_marks.addEventListener("click", function () {
  console.log("Students Sorted on Basis of Mark");
  const sortedStudents = [...studentsData]; // Create a copy of the original data

  sortedStudents.sort((a, b) => {
    return a.marks > b.marks ? 1 : -1;
  });

  displayStudents(sortedStudents);
});

// Function to sort students by Passing
sort_by_passing.addEventListener("click", function () {
  console.log("Students Sorted on Basis of Passing");
  const sortedStudents = [...studentsData].filter((student) => student.passing); // Create a copy of the original data

  displayStudents(sortedStudents);
});

// Function to sort students by Class
sort_by_class.addEventListener("click", function () {
  console.log("Students Sorted on Basis of Class");
  const sortedStudents = [...studentsData]; // Create a copy of the original data

  sortedStudents.sort((a, b) => {
    return a.class > b.class ? 1 : -1;
  });

  displayStudents(sortedStudents);
});

// Function to sort students by Class
sort_by_gender.addEventListener("click", function () {
  console.log("Students Sorted on Basis of Gender");
  const sortedStudents = [...studentsData].filter(
    (student) => student.gender == "Male"
  );

  displayStudents(sortedStudents);
});
