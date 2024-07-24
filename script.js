document.addEventListener("click", () => {
  details.removeAttribute("open");
});

details = document.getElementById("details");
details.addEventListener("click", (e) => {
  e.stopPropagation();
});

openWorkflowButton = document.getElementById("open-workflow");
openWorkflowButton.addEventListener("click", () => {
  alert("workflow opened!");
});

startOverButton = document.getElementById("start-over");
startOverButton.addEventListener("click", () => {
  alert("started over!");
});
