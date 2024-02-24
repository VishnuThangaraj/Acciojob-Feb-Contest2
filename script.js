let studentsData = []; // Variable to store the original student data
const secondaryTable = document.getElementById("secondary_table");
const tableHeader = document.getElementsByClassName("table_header");
// Sorting Buttons
const sort_ascending = document.getElementById("sort_ascending");
const sort_descending = document.getElementById("sort_descending");
const sort_by_marks = document.getElementById("sort_by_marks");
const sort_by_passing = document.getElementById("sort_by_passing");
const sort_by_class = document.getElementById("sort_by_class");
const sort_by_gender = document.getElementById("sort_by_gender");

// Fetch Student Data
fetch("./studentData.json")
  .then((response) => response.json())
  .then((students) => {
    studentsData = students; // Save original data
    displayStudents(students);
  })
  .catch((error) => console.error("Error fetching students:", error));

// Function to display students in the table
function displayStudents(students, tableId = "studentTable_body") {
  const tableBody = document.getElementById(tableId);
  tableBody.innerHTML = ""; // Clear existing content

  students.forEach((student) => {
    const row = tableBody.insertRow();
    row.insertCell(0).textContent = student.id;
    // row.insertCell(
    //   1
    // ).textContent = `${student.first_name} ${student.last_name}`;

    const nameAndPhotoCell = row.insertCell(1);
    const photo = document.createElement("img");
    nameAndPhotoCell.className = "left_alignment";
    photo.src = student.img_src;
    photo.alt = `${student.first_name} ${student.last_name} photo`;
    photo.className = "student-photo";
    nameAndPhotoCell.appendChild(photo);
    nameAndPhotoCell.insertAdjacentHTML(
      "beforeend",
      " " + `${student.first_name} ${student.last_name}`
    );

    row.insertCell(2).textContent = student.gender;
    row.insertCell(3).textContent = student.class;
    row.insertCell(4).textContent = student.marks;
    row.insertCell(5).textContent = student.passing;
    row.insertCell(6).textContent = student.email;
  });
}

// Button Functionalities

// Function to sort students by name(Ascending)
sort_ascending.addEventListener("click", function () {
  if (!secondaryTable.classList.contains("hidden")) {
    secondaryTable.classList.add("hidden");
    for (let genderHeaders of tableHeader) {
      genderHeaders.classList.add("hidden");
    }
  }

  const sortedStudents = [...studentsData]; // Create a copy of the original data

  sortedStudents.sort((a, b) => {
    const nameA = `${a.first_name} ${a.last_name}`.toUpperCase();
    const nameB = `${b.first_name} ${b.last_name}`.toUpperCase();

    return nameA.localeCompare(nameB);
  });

  displayStudents(sortedStudents);
  console.log("Students Sorted in Ascending Order");
});

// Function to sort students by name(Descending)
sort_descending.addEventListener("click", function () {
  if (!secondaryTable.classList.contains("hidden")) {
    secondaryTable.classList.add("hidden");
    for (let genderHeaders of tableHeader) {
      genderHeaders.classList.add("hidden");
    }
  }

  const sortedStudents = [...studentsData]; // Create a copy of the original data

  sortedStudents.sort((a, b) => {
    const nameA = `${a.first_name} ${a.last_name}`.toUpperCase();
    const nameB = `${b.first_name} ${b.last_name}`.toUpperCase();

    return nameB.localeCompare(nameA);
  });

  displayStudents(sortedStudents);
  console.log("Students Sorted in Descending Order");
});

// Function to sort students by Marks
sort_by_marks.addEventListener("click", function () {
  if (!secondaryTable.classList.contains("hidden")) {
    secondaryTable.classList.add("hidden");
    for (let genderHeaders of tableHeader) {
      genderHeaders.classList.add("hidden");
    }
  }

  const sortedStudents = [...studentsData]; // Create a copy of the original data

  sortedStudents.sort((a, b) => {
    return a.marks > b.marks ? 1 : -1;
  });

  displayStudents(sortedStudents);
  console.log("Students Sorted on Basis of Mark");
});

// Function to sort students by Passing
sort_by_passing.addEventListener("click", function () {
  if (!secondaryTable.classList.contains("hidden")) {
    secondaryTable.classList.add("hidden");
    for (let genderHeaders of tableHeader) {
      genderHeaders.classList.add("hidden");
    }
  }

  const sortedStudents = [...studentsData].filter((student) => student.passing); // Create a copy of the original data

  displayStudents(sortedStudents);
  console.log("Students Sorted on Basis of Passing");
});

// Function to sort students by Class
sort_by_class.addEventListener("click", function () {
  if (!secondaryTable.classList.contains("hidden")) {
    secondaryTable.classList.add("hidden");
    for (let genderHeaders of tableHeader) {
      genderHeaders.classList.add("hidden");
    }
  }

  const sortedStudents = [...studentsData]; // Create a copy of the original data

  sortedStudents.sort((a, b) => {
    return a.class > b.class ? 1 : -1;
  });

  displayStudents(sortedStudents);
  console.log("Students Sorted on Basis of Class");
});

// Function to sort students by Gender
sort_by_gender.addEventListener("click", function () {
  if (secondaryTable.classList.contains("hidden")) {
    secondaryTable.classList.remove("hidden");
    for (let genderHeaders of tableHeader) {
      genderHeaders.classList.remove("hidden");
    }
  }

  const male = [...studentsData].filter((student) => student.gender == "Male");
  const female = [...studentsData].filter(
    (student) => student.gender == "Female"
  );

  displayStudents(male);
  displayStudents(female, "studentTable_body2");
  console.log("Students Sorted on Basis of Gender");
});

// Function to search and filter students
function searchStudents() {
  if (!secondaryTable.classList.contains("hidden")) {
    secondaryTable.classList.add("hidden");
    for (let genderHeaders of tableHeader) {
      genderHeaders.classList.add("hidden");
    }
  }

  const searchInput = document
    .getElementById("student_searchBox")
    .value.toLowerCase();

  const filteredStudents = studentsData.filter((student) => {
    const fullName =
      student.first_name.toLowerCase() + " " + student.last_name.toLowerCase();
    const email = student.email.toLowerCase();

    return fullName.includes(searchInput) || email.includes(searchInput);
  });

  displayStudents(filteredStudents);
}
