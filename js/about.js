let skillsArray = ["HTML", "CSS", "Jquery", "Javascript", "Github"]

let aboutContainer = document.querySelector(".intro-text")

skillsArray.forEach(skill => {
  const li = document.createElement("li")
  li.classList.add("skills-item")
  li.textContent = skill
  aboutContainer.appendChild(li)
});

