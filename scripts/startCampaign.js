document.getElementById("campaignFormEl").addEventListener("submit", function (event) {
  event.preventDefault();

  const startupName = document.getElementById("startupName").value;
  const startupDesc = document.getElementById("startupDesc").value;
  const fundingTarget = document.getElementById("fundingTarget").value;
  const college = document.getElementById("college").value;
  const teamMembers = document.getElementById("teamMembers").value;
  const projectLink = document.getElementById("projectLink").value;

  const confirmationMessage = `
    Campaign Submitted Successfully!
    Startup Name: ${startupName}
    Description: ${startupDesc}
    Funding Target: $${fundingTarget}
    College/School: ${college}
    Team Members: ${teamMembers}
    Project Link: ${projectLink || "N/A"}
  `;

  document.getElementById("confirmation").textContent = confirmationMessage;
  document.getElementById("campaignFormEl").reset();
});