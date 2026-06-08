// DATABASE

let students = [

    {
        id:1,
        name:"Arun",
        department:"CSE",
        year:1,
        email:"arun@gmail.com"
    },

    {
        id:2,
        name:"Bala",
        department:"IT",
        year:2,
        email:"bala@gmail.com"
    },

    {
        id:3,
        name:"Charan",
        department:"ECE",
        year:3,
        email:"charan@gmail.com"
    },

    {
        id:4,
        name:"Deepak",
        department:"EEE",
        year:1,
        email:"deepak@gmail.com"
    },

    {
        id:5,
        name:"Eswar",
        department:"MECH",
        year:4,
        email:"eswar@gmail.com"
    },

    {
        id:6,
        name:"Ganesh",
        department:"CSE",
        year:2,
        email:"ganesh@gmail.com"
    },

    {
        id:7,
        name:"Hari",
        department:"IT",
        year:3,
        email:"hari@gmail.com"
    }

];

let currentDepartment = "ALL";
let currentYear = "ALL";

// DISPLAY STUDENTS

function displayStudents() {

    let output = "";

    let departments = ["CSE","IT","ECE","EEE","MECH"];

    departments.forEach(function(dept){

        let deptStudents = students.filter(function(student){

            let departmentMatch =
            currentDepartment == "ALL" ||
            student.department == currentDepartment;

            let yearMatch =
            currentYear == "ALL" ||
            student.year == currentYear;

            return student.department == dept &&
            departmentMatch &&
            yearMatch;

        });

        if(deptStudents.length > 0){

            output += `

            <div class="department-title">

                <div class="dept-name">
                    ${dept}
                </div>

                <div class="student-count">
                    ${deptStudents.length} students
                </div>

            </div>

            <div class="student-container">

            `;

            deptStudents.forEach(function(student){

                output += `

                <div class="student-card">

                    <div class="year-top">
                        Y${student.year}
                    </div>

                    <div class="circle">
                        ${student.name.charAt(0)}
                    </div>

                    <div class="student-name">
                        ${student.name}
                    </div>

                    <div class="email">
                        ${student.email}
                    </div>

                    <div class="bottom">

                        <div class="year-btn">
                            Year ${student.year}
                        </div>

                        <div class="id">
                            ##${student.id}
                        </div>

                    </div>

                </div>

                `;

            });

            output += `</div>`;

        }

    });

    document.getElementById("studentData").innerHTML = output;

}

// FILTER DEPARTMENT

function showDepartment(dept){

    currentDepartment = dept;

    displayStudents();

}

// FILTER YEAR

function showYear(year){

    currentYear = year;

    displayStudents();

}

displayStudents();