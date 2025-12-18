const linkedinBtn = document.getElementById("linkedinBtn");
const githubBtn = document.getElementById("githubBtn");

function go_to_linkedin_page() {
  window.open("https://www.linkedin.com/in/wai-fook/");
}

function go_to_github_page() {
  window.open("https://github.com/wfwan");
}

linkedinBtn.addEventListener("click", go_to_linkedin_page);
githubBtn.addEventListener("click", go_to_github_page);
