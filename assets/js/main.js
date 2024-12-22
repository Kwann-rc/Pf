/*
window.addEventListener("focus", () => {
    document.title = "Welcome to my Portfolio"
});
window.addEventListener("blur", () => {
    document.title = "Stay with me :("
});
*/
// smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });
// tilt img
VanillaTilt.init(document.querySelector(".tilt"), {
    max: 15,
});
// thay favicon
document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Welcome to my Portfolio";
            $("#favicon").attr("href", "/assets/img/favico.jpg");
        }
        else {
            document.title = "Stay with me :((";
            $("#favicon").attr("href", "/assets/img/favhand.png");
        }
    });
    // menu
    $(document).ready(function () {

        $('#menu').click(function () {
            $(this).toggleClass('fa-times');
            $('.navbar').toggleClass('nav-toggle');
        });
    });
//skill
async function fetchData(type = "skills") {
    let response
    type === "skills" ?
        response = await fetch("skills.json")
        :
        response = await fetch("./project/projects.json")
    const data = await response.json();
    return data;
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src=${skill.icon} alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`
    });
    skillsContainer.innerHTML = skillHTML;
}

// prj
function getProjects() {
    return fetch("projects.json")
        .then(response => response.json())
        .then(data => {
            return data
        });
}


function showProjects(projects) {
    let projectsContainer = document.querySelector("#work .box-container");
    let projectsHTML = "";
    projects.forEach(project => {
        projectsHTML += `
        <div class="grid-item ${project.category}">
        <div class="box tilt" style="width: 380px; margin: 1rem">
      <img draggable="false" src="/assets/img/projects/${project.image}.png" alt="project" />
      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>
    </div>`
    });
    projectsContainer.innerHTML = projectsHTML;
}

getProjects().then(data => {
    showProjects(data);
})

fetchData().then(data => {
    showSkills(data);
});

fetchData("projects").then(data => {
    showProjects(data);
});

fetchData("skills").then(data => {
    showSkills(data);
});

/* ===== SCROLL REVEAL ANIMATION ===== */
const strop = ScrollReveal({
    origin: 'top',
    distance: '20px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
strop.reveal('.introduce h1', { delay: 200 });
strop.reveal('.introduce p', { delay: 200 });
strop.reveal('.introduce .about-btn', { delay: 200 });
strop.reveal('.introduce .social-icons', { delay: 200 });
strop.reveal('.introduce .image');

/* SCROLL ABOUT */
strop.reveal('.about-me h2', { delay: 200 });
strop.reveal('.about-me h3', { delay: 230 });
strop.reveal('.about-me span', { delay: 200 });
strop.reveal('.about-me .small-text', { delay: 240 });
strop.reveal('.about-me p', { delay: 200 });
strop.reveal('.about-me .box-container', { delay: 200 });
strop.reveal('.about-me .image', { delay: 230 });


/* SCROLL SKILLS */
strop.reveal('.my-skill h2', { interval: 200 });
strop.reveal('.my-skill .skill-container', { interval: 300 });
strop.reveal('.my-skill .skill-container .bar', { delay: 400 });

/* SCROLL EDUCATION */
strop.reveal('.education h2', { interval: 100 });
strop.reveal('.education .education-box', { interval: 100 });

/* SCROLL PROJECTS */
strop.reveal('.project h2', { interval: 220 });
strop.reveal('.project .box-container', { interval: 220 });

/* SCROLL EXPERIENCE */
strop.reveal('.experience h2', { delay: 400 });
strop.reveal('.experience .timeline', { delay: 400 });
strop.reveal('.experience .timeline .containerr', { interval: 400 });
strop.reveal('.experience .morebtn', { interval: 400 });

/* SCROLL CONTACT */
strop.reveal('.contact h2', { delay: 100 });
strop.reveal('.contact img', { delay: 100 });
strop.reveal('.contact .contact-main', { delay: 100 });