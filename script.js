document.getElementById("portfolioForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const role = document.getElementById("role").value.trim();
    const about = document.getElementById("about").value.trim();
    const skills = document.getElementById("skills").value.trim().split(",").map(s => s.trim());
  
    const output = document.getElementById("output");
  
    const portfolioHTML = `
      <div class="preview">
        <h2>${name}</h2>
        <h3>${role}</h3>
        <p>${about}</p>
        <h4>Skills</h4>
        <ul>
          ${skills.map(skill => `<li>${skill}</li>`).join("")}
        </ul>
      </div>
    `;
  
    output.innerHTML = portfolioHTML;
  });
  
