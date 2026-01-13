let projectsArray = []
const projectsContainer = document.querySelector(".projects-container")
const repoURL = "https://api.github.com/users/clarahedgehog/repos"

const initializeRepos = async () => {
  try {
    const response = await fetch(repoURL)
    if (!response.ok) throw new Error("Could not fetch API")
    projectsArray = await response.json()
    projectsArray.forEach(project => {
      const projectsDiv = document.createElement("div")
      projectsDiv.classList.add("projects-item")
      projectsDiv.textContent = project
      projectsContainer.appendChild(projectsDiv)
      projectsDiv.innerHTML = `
      <a class="project-name" href="${project.html_url}" target="_blank">Github Repo: ${project.name}</a>
      <br>
      ${project.topics.includes("deployed") ?
          `<a class="project-link" href="https://${project.owner.login}.github.io/${project.name}/" target="_blank">Click here for deployed page</a>` : ""
        } 
      `
    });
  } catch (error) {
    projectsContainer.textContent = error.message;
  }
}

initializeRepos()