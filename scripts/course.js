// Update completed status as needed
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: ['Python'],
        completed: true,
        personallyCompleted: true // <-- Mark as personally completed
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: ['HTML', 'CSS'],
        completed: true,
        personallyCompleted: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: ['Python'],
        completed: false,
        personallyCompleted: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: ['C#'],
        completed: false,
        personallyCompleted: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false,
        personallyCompleted: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false,
        personallyCompleted: false
    }
];

// Helper to create course HTML
function createCourseCard(course) {
    let style = '';
    let statusText = '';

    if (course.personallyCompleted) {
        style = 'background: linear-gradient(90deg, #e0c3fc 0%, #8ec5fc 100%); border-left: 5px solid #6f42c1;';
        statusText = '<span style="color:#6f42c1;font-weight:bold;">&#11088; Personally Completed!</span>';
    } else if (course.completed) {
        style = 'background: #d4edda; border-left: 5px solid #28a745;';
        statusText = '<span style="color:#28a745;font-weight:bold;">&#10003; Completed</span>';
    } else {
        style = 'background: #f8d7da; border-left: 5px solid #dc3545;';
        statusText = '<span style="color:#dc3545;font-weight:bold;">&#10007; Not Completed</span>';
    }

    return `
    <div class="course-card" style="margin:1em 0; padding:1em; ${style}">
        <h3>${course.subject} ${course.number}: ${course.title}</h3>
        <p><strong>Credits:</strong> ${course.credits}</p>
        <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
        <p>${course.description}</p>
        <p>${statusText}</p>
    </div>
    `;
}

// Setup filter buttons
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('all-btn').addEventListener('click', () => renderCourses('ALL'));
    document.getElementById('wdd-btn').addEventListener('click', () => renderCourses('WDD'));
    document.getElementById('cse-btn').addEventListener('click', () => renderCourses('CSE'));

    renderCourses('ALL');

    function renderCourses(filter = 'ALL') {
        let filtered = courses;
        if (filter === 'WDD') filtered = courses.filter(c => c.subject === 'WDD');
        if (filter === 'CSE') filtered = courses.filter(c => c.subject === 'CSE');

        // Calculate total credits dynamically
        const totalCredits = filtered.reduce((sum, course) => sum + course.credits, 0);

        // Display total number of courses as well
        document.querySelector('aside').innerHTML = `
            <div style="font-weight:bold; margin-bottom:0.5em; margin-left:10px; margin-top:0.5em;">
                The total credit of courses listed below is: ${filtered.length}
            </div>
            ${filtered.map(createCourseCard).join('')}
        `;
    }
    function createCourseCard(course) {
    return `
    <div class="course-card" style="padding:1em; margin:0.5em 0; background:#979791fd; margin-right:10px; margin-left:10px; ">
        <span style="padding:0.5em 1em; display:inline-block; font-weight:bold;">
            ${course.subject} ${course.number}
        </span>
    </div>
    `;
}
});