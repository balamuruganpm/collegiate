// script.js

const degreeSubjects = {
    be: {
        cse: {
            1: [
                { name: 'Mathematics I', credits: 4 },
                { name: 'Physics I', credits: 3 },
                { name: 'Chemistry I', credits: 3 },
                { name: 'Engineering Graphics', credits: 4 },
                { name: 'Basic Electrical Engineering', credits: 3 }
            ],
            2: [
                { name: 'Mathematics II', credits: 4 },
                { name: 'Physics II', credits: 3 },
                { name: 'Chemistry II', credits: 3 },
                { name: 'Programming in C', credits: 4 },
                { name: 'Engineering Mechanics', credits: 3 }
            ],
            3: [
                { name: 'Data Structures', credits: 4 },
                { name: 'Digital Electronics', credits: 4 },
                { name: 'Mathematics III', credits: 4 },
                { name: 'Electronic Devices', credits: 4 },
                { name: 'Discrete Mathematics', credits: 3 }
            ]
            // Add subjects for other semesters
        },
        ece: {
            1: [
                { name: 'Mathematics I', credits: 4 },
                { name: 'Physics I', credits: 3 },
                { name: 'Chemistry I', credits: 3 },
                { name: 'Engineering Graphics', credits: 4 },
                { name: 'Basic Electrical Engineering', credits: 3 }
            ],
            2: [
                { name: 'Mathematics II', credits: 4 },
                { name: 'Physics II', credits: 3 },
                { name: 'Chemistry II', credits: 3 },
                { name: 'Programming in C', credits: 4 },
                { name: 'Engineering Mechanics', credits: 3 }
            ],
            3: [
                { name: 'Circuit Theory', credits: 4 },
                { name: 'Electronic Circuits', credits: 4 },
                { name: 'Signals and Systems', credits: 4 },
                { name: 'Mathematics III', credits: 4 },
                { name: 'Digital Electronics', credits: 3 }
            ]
            // Add subjects for other semesters
        },
        eee: {
            1: [
                { name: 'Mathematics I', credits: 4 },
                { name: 'Physics I', credits: 3 },
                { name: 'Chemistry I', credits: 3 },
                { name: 'Engineering Graphics', credits: 4 },
                { name: 'Basic Electrical Engineering', credits: 3 }
            ],
            2: [
                { name: 'Mathematics II', credits: 4 },
                { name: 'Physics II', credits: 3 },
                { name: 'Chemistry II', credits: 3 },
                { name: 'Programming in C', credits: 4 },
                { name: 'Engineering Mechanics', credits: 3 }
            ],
            3: [
                { name: 'Electrical Machines', credits: 4 },
                { name: 'Power Systems', credits: 4 },
                { name: 'Control Systems', credits: 4 },
                { name: 'Mathematics III', credits: 4 },
                { name: 'Electromagnetic Theory', credits: 3 }
            ]
            // Add subjects for other semesters
        },
        mech: {
            1: [
                { name: 'Mathematics I', credits: 4 },
                { name: 'Physics I', credits: 3 },
                { name: 'Chemistry I', credits: 3 },
                { name: 'Engineering Graphics', credits: 4 },
                { name: 'Basic Electrical Engineering', credits: 3 }
            ],
            2: [
                { name: 'Mathematics II', credits: 4 },
                { name: 'Physics II', credits: 3 },
                { name: 'Chemistry II', credits: 3 },
                { name: 'Programming in C', credits: 4 },
                { name: 'Engineering Mechanics', credits: 3 }
            ],
            3: [
                { name: 'Thermodynamics', credits: 4 },
                { name: 'Fluid Mechanics', credits: 4 },
                { name: 'Manufacturing Technology', credits: 4 },
                { name: 'Mathematics III', credits: 4 },
                { name: 'Material Science', credits: 3 }
            ]
            // Add subjects for other semesters
        },
        civil: {
            1: [
                { name: 'Mathematics I', credits: 4 },
                { name: 'Physics I', credits: 3 },
                { name: 'Chemistry I', credits: 3 },
                { name: 'Engineering Graphics', credits: 4 },
                { name: 'Basic Electrical Engineering', credits: 3 }
            ],
            2: [
                { name: 'Mathematics II', credits: 4 },
                { name: 'Physics II', credits: 3 },
                { name: 'Chemistry II', credits: 3 },
                { name: 'Programming in C', credits: 4 },
                { name: 'Engineering Mechanics', credits: 3 }
            ],
            3: [
                { name: 'Surveying', credits: 4 },
                { name: 'Building Materials', credits: 4 },
                { name: 'Structural Analysis', credits: 4 },
                { name: 'Mathematics III', credits: 4 },
                { name: 'Concrete Technology', credits: 3 }
            ]
            // Add subjects for other semesters
        }
    },
    btech: {
        // Add subjects for B.Tech courses similarly
    }
    // Add other degrees and their subjects
};

document.getElementById('degree').addEventListener('change', populateCourses);
document.getElementById('course').addEventListener('change', populateCourses);
document.getElementById('semester').addEventListener('change', populateCourses);
document.getElementById('calculate').addEventListener('click', calculateCGPA);

function populateCourses() {
    const degree = document.getElementById('degree').value;
    const course = document.getElementById('course').value;
    const semester = document.getElementById('semester').value;
    const coursesContainer = document.getElementById('courses-container');

    coursesContainer.innerHTML = ''; // Clear existing courses

    if (degree === 'choose' || course === 'choose' || semester === 'choose') {
        return; // Exit if a valid degree, course, or semester is not selected
    }

    const subjects = degreeSubjects[degree][course][semester] || [];

    subjects.forEach(subject => {
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('form-group');

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

    document.querySelectorAll('.status').forEach(select => {
        select.addEventListener('change', toggleGradeInput);
    });
}

function toggleGradeInput(event) {
    const status = event.target.value;
    const gradeContainer = event.target.parentElement.querySelector('.grade-container');
    if (status === 'pass') {
        gradeContainer.style.display = 'block';
    } else {
        gradeContainer.style.display = 'none';
    }
}

function calculateCGPA() {
    const grades = document.querySelectorAll('.grade');
    const credits = document.querySelectorAll('.credits');
    const statuses = document.querySelectorAll('.status');

    let totalGradePoints = 0;
    let totalCredits = 0;

    statuses.forEach((status, index) => {
        if (status.value === 'pass') {
            const gradeValue = parseFloat(grades[index].value);
            const creditValue = parseFloat(credits[index].value);

            totalGradePoints += gradeValue * creditValue;
            totalCredits += creditValue;
        }
    });

    const cgpa = totalCredits ? (totalGradePoints / totalCredits).toFixed(2) : 0.00;
    document.getElementById('cgpa').innerText = cgpa;
}
