// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     alert('Message sent successfully!');
// });

const skills = [
    "HTML", "CSS", "JavaScript", "Node.js", "Git", "C# & .NET", "SQL", "Python", "React", "Docker", "MongoDB", "GraphQL", "Commerce Cloud", "Java", "Python",
    "Knockout.js", "SDLC", "Agile Methodologies", "VBA", "Power BI", "Bootstrap", "jQuery" ,"CI/CD", "RestAPIs"
];

// Get the skills list container
const skillsList = document.getElementById('skills-list');

// Dynamically generate skills
skills.forEach(skill => {
    const skillItem = document.createElement('div');
    skillItem.classList.add('skill-item');
    skillItem.textContent = skill;
    skillsList.appendChild(skillItem);
});

document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            var navbarCollapse = document.querySelector('.navbar-collapse');
            var bsCollapse = new bootstrap.Collapse(navbarCollapse, {toggle: false});
            bsCollapse.hide();
        });
    });
