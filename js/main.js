document.addEventListener("DOMContentLoaded", function() {
    const skills = document.querySelectorAll(".skill");

    skills.forEach(skill => {
        skill.addEventListener("mouseover", () => {
            skill.style.backgroundColor = "#00d8ff";
            skill.style.color = "#121212";
        });

        skill.addEventListener("mouseleave", () => {
            skill.style.backgroundColor = "#242424";
            skill.style.color = "#fff";
        });
    });
});