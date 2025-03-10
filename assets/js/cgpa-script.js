const degreeSubjects = {
  // degree object
  be: {
    // cse object for store sem details
    cse: {
      // semester array
      1: [
        // array inside object for subject details
        { name: "HS3151 / HS3152 - Professional English - I", credits: 3 },
        { name: "MA3151 - Matrices and Calculus", credits: 4 },
        { name: "PH3151 - Engineering Physics", credits: 3 },
        { name: "CY3151 - Engineering Chemistry", credits: 3 },
        { name: "GE3151 - Problem Solving and Python Programming", credits: 3 },
        { name: "GE3152 - தமிழர்மரப / Heritage of Tamils", credits: 1 },
        {
          name: "GE3171 - Problem Solving and Python Programming Laboratory",
          credits: 2,
        },
        {
          name: "BS3171 - Physics and Chemistry Laboratory",
          credits: 2,
        },
        {
          name: "GE3172 - English Laboratory",
          credits: 1,
        },
      ],
      // BS3171 - Physics and Chemistry Laboratory  GE3172 - English Laboratory
      2: [
        { name: "HS3252 Professional English - II ", credits: 2 },
        { name: "MA3251 Statistics and Numerical Methods ", credits: 4 },
        { name: "PH3256 Physics for Information Science", credits: 3 },
        { name: "GE3251 Engineering Graphics ", credits: 4 },
        {
          name: "GE3252 தமிழரும் ததொழில்நுட்பமும்/Tamils and Technology",
          credits: 1,
        },
        { name: "GE3271 Engineering Practices Laboratory ", credits: 2 },

        { name: "CS3271 Programming in C Laboratory ", credits: 2 },
        //
        {
          name: "GE3272 Communication Laboratory / ForeignLanguage ",
          credits: 2,
        },
      ],
      3: [
        { name: "MA3354 Discrete Mathematics ", credits: 4 },
        {
          name: "CS3351 Digital Principles and Computer Organization ",
          credits: 4,
        },
        { name: "CS3301 Data Structures  ", credits: 3 },
        { name: "CS3391 Object Oriented Programming ", credits: 3 },
        { name: "CS3311 Data Structures Laboratory ", credits: 1.5 },
        {
          name: "CS3381 Object Oriented Programming Laboratory ",
          credits: 1.5,
        },

        { name: "CS3361 Data Science Laboratory ", credits: 2 },

        { name: " GE3361 Professional Development ", credits: 1 },
      ],
      4: [
        { name: "CS3452 Theory of Computation  ", credits: 3 },
        {
          name: "CS3491 Artificial Intelligence and Machine Learning ",
          credits: 4,
        },
        { name: "CS3492 Database Management Systems  ", credits: 3 },
        { name: "CS3401 Algorithms  ", credits: 4 },
        { name: "CS3451 Introduction to Operating Systems ", credits: 3 },
        {
          name: "GE3451 Environmental Sciences and Sustainability  ",
          credits: 2,
        },

        { name: "CS3461 Operating Systems Laboratory ", credits: 1.5 },

        {
          name: "CS3481 Database Management Systems Laboratoryt ",
          credits: 1.5,
        },
      ],
      5: [
        { name: "CS3591 Computer Networks  ", credits: 4 },
        {
          name: "CS3501 Compiler Design  ",
          credits: 4,
        },
        { name: "CB3491 Cryptography and Cyber Security", credits: 3 },
        { name: "CS3551 Distributed Computing ", credits: 3 },
        { name: "Professional Elective I ", credits: 3 },
        { name: "Professional Elective II ", credits: 3 },
      ],
      6: [
        { name: "CCS356 Object Oriented Software Engineering ", credits: 4 },
        {
          name: "CS3691 Embedded Systems and IoT",
          credits: 4,
        },
        { name: "Open Elective – I*", credits: 3 },
        { name: "Professional Elective III  ", credits: 3 },
        { name: "Professional Elective IV", credits: 3 },
        { name: "Professional Elective V ", credits: 3 },
        { name: "Professional Elective VI  ", credits: 3 },
      ],
      7: [
        { name: "GE3791 Human Values and Ethics ", credits: 2 },
        {
          name: "Elective - Management",
          credits: 3,
        },
        { name: "Open Elective – II**", credits: 3 },
        { name: "Open Elective – III**  ", credits: 3 },
        { name: "Open Elective – IV** ", credits: 3 },
        // { name: "Professional Elective V ", credits: 3 },
        { name: "CS3711 Summer internship ", credits: 2 },
      ],
      8: [{ name: "CS3811 Project Work/Internship ", credits: 10 }],
    },
    ece: {
      1: [
        { name: "Mathematics I", credits: 4 },
        { name: "Physics I", credits: 3 },
        { name: "Chemistry I", credits: 3 },
        { name: "Engineering Graphics", credits: 4 },
        { name: "Basic Electrical Engineering", credits: 3 },
      ],
      2: [
        { name: "Mathematics II", credits: 4 },
        { name: "Physics II", credits: 3 },
        { name: "Chemistry II", credits: 3 },
        { name: "Programming in C", credits: 4 },
        { name: "Engineering Mechanics", credits: 3 },
      ],
      3: [
        { name: "Circuit Theory", credits: 4 },
        { name: "Electronic Circuits", credits: 4 },
        { name: "Signals and Systems", credits: 4 },
        { name: "Mathematics III", credits: 4 },
        { name: "Digital Electronics", credits: 3 },
      ],
    },
    eee: {
      1: [
        { name: "Mathematics I", credits: 4 },
        { name: "Physics I", credits: 3 },
        { name: "Chemistry I", credits: 3 },
        { name: "Engineering Graphics", credits: 4 },
        { name: "Basic Electrical Engineering", credits: 3 },
      ],
      2: [
        { name: "Mathematics II", credits: 4 },
        { name: "Physics II", credits: 3 },
        { name: "Chemistry II", credits: 3 },
        { name: "Programming in C", credits: 4 },
        { name: "Engineering Mechanics", credits: 3 },
      ],
      3: [
        { name: "Electrical Machines", credits: 4 },
        { name: "Power Systems", credits: 4 },
        { name: "Control Systems", credits: 4 },
        { name: "Mathematics III", credits: 4 },
        { name: "Electromagnetic Theory", credits: 3 },
      ],
    },
    mech: {
      1: [
        { name: "Mathematics I", credits: 4 },
        { name: "Physics I", credits: 3 },
        { name: "Chemistry I", credits: 3 },
        { name: "Engineering Graphics", credits: 4 },
        { name: "Basic Electrical Engineering", credits: 3 },
      ],
      2: [
        { name: "Mathematics II", credits: 4 },
        { name: "Physics II", credits: 3 },
        { name: "Chemistry II", credits: 3 },
        { name: "Programming in C", credits: 4 },
        { name: "Engineering Mechanics", credits: 3 },
      ],
      3: [
        { name: "Thermodynamics", credits: 4 },
        { name: "Fluid Mechanics", credits: 4 },
        { name: "Manufacturing Technology", credits: 4 },
        { name: "Mathematics III", credits: 4 },
        { name: "Material Science", credits: 3 },
      ],
    },
    civil: {
      1: [
        { name: "Mathematics I", credits: 4 },
        { name: "Physics I", credits: 3 },
        { name: "Chemistry I", credits: 3 },
        { name: "Engineering Graphics", credits: 4 },
        { name: "Basic Electrical Engineering", credits: 3 },
      ],
      2: [
        { name: "Mathematics II", credits: 4 },
        { name: "Physics II", credits: 3 },
        { name: "Chemistry II", credits: 3 },
        { name: "Programming in C", credits: 4 },
        { name: "Engineering Mechanics", credits: 3 },
      ],
      3: [
        { name: "Surveying", credits: 4 },
        { name: "Building Materials", credits: 4 },
        { name: "Structural Analysis", credits: 4 },
        { name: "Mathematics III", credits: 4 },
        { name: "Concrete Technology", credits: 3 },
      ],
    },
  },
  btech: {
    // Add subjects for B.Tech courses similarly
  },
  // Add other degrees and their subjects
};

document.getElementById("degree").addEventListener("change", populateCourses);
document.getElementById("course").addEventListener("change", populateCourses);
document.getElementById("semester").addEventListener("change", populateCourses);
document.getElementById("calculate").addEventListener("click", calculateCGPA);

function populateCourses() {
  const degree = document.getElementById("degree").value;
  const course = document.getElementById("course").value;
  const semester = document.getElementById("semester").value;
  const coursesContainer = document.getElementById("courses-container");

  coursesContainer.innerHTML = ""; // Clear existing courses

  if (degree === "choose" || course === "choose" || semester === "choose") {
    return; // Exit if a valid degree, course, or semester is not selected
  }

  const subjects = degreeSubjects?.[degree]?.[course]?.[semester] || [];

  subjects.forEach((subject) => {
    const courseDiv = document.createElement("div");
    courseDiv.classList.add("form-group");

    courseDiv.innerHTML = `
            <label for="subject">Subject:</label>
            <input type="text" class="form-control" value="${subject.name}" readonly>
            <label for="status">Status:</label>
            <select class="form-control status">
                <option value="choose">Choose</option>
                <option value="pass">Pass</option>  
                <option value="arrear">Arrear</option>
            </select>
            <div class="grade-container" style="display: none;">
                <label for="grade">Grade:</label>
                <select class="form-control grade">
                    <option value="10">O</option>
                    <option value="9">A+</option>
                    <option value="8">A</option>
                    <option value="7">B+</option>
                    <option value="6">B</option>
                    <option value="5">C</option>
                </select>
            </div>
            <input type="hidden" class="credits" value="${subject.credits}">
        `;

    coursesContainer.appendChild(courseDiv);
  });

  coursesContainer.addEventListener("change", (event) => {
    if (event.target.classList.contains("status")) {
      toggleGradeInput(event);
    }
  });
}
// grade toggle value
function toggleGradeInput(event) {
  const status = event.target.value;
  const gradeContainer = event.target
    .closest(".form-group")
    .querySelector(".grade-container");
  gradeContainer.style.display = status === "pass" ? "block" : "none";
}

function calculateCGPA() {
  const grades = document.querySelectorAll(".grade"); //O,B+ etc..
  const credits = document.querySelectorAll(".credits"); //subject credits
  const statuses = document.querySelectorAll(".status"); //pass  or arrear

  let totalGradePoints = 0;
  let totalCredits = 0;

  statuses.forEach((status, index) => {
    if (status.value === "pass") {
      const gradeValue = parseFloat(grades[index].value);
      const creditValue = parseFloat(credits[index].value);

      totalGradePoints += gradeValue * creditValue;
      totalCredits += creditValue;
      console.log("-------------------");
      console.log(totalCredits);
      console.log(totalGradePoints);
    }
  });
  if (totalCredits !== 0) {
    const cgpa = totalCredits
      ? (totalGradePoints / totalCredits).toFixed(2)
      : 0.0;
    console.log(cgpa);
    document.getElementById("cgpa").innerText = cgpa;
  } else {
    alert("Fill the form");
  }
}

