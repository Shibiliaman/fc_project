document.addEventListener('DOMContentLoaded', () => {
    const campaignsGrid = document.getElementById('campaigns-grid');

    // Load campaigns from localStorage
    function loadCampaigns() {
        const campaigns = JSON.parse(localStorage.getItem('campaigns') || '[]');
        
        if (campaigns.length === 0) {
            campaignsGrid.innerHTML = `
                <div class="no-campaigns">
                    <p>No active campaigns found.</p>
                    <a href="campaign.html" class="btn btn-primary">Create Campaign</a>
                </div>
            `;
            return;
        }

        // Display each campaign
        campaignsGrid.innerHTML = campaigns.map(campaign => `
            <div class="card campaign-card">
                <h3>${campaign.campaignName}</h3>
                <p>${campaign.description}</p>
                <div class="campaign-meta">
                    <span><i class="fas fa-university"></i> ${campaign.institution}</span>
                    <span><i class="fas fa-users"></i> ${campaign.teamMembers}</span>
                </div>
                <div class="progress" role="progressbar" 
                     aria-valuenow="${(campaign.currentFunding / campaign.fundingTarget) * 100}" 
                     aria-valuemin="0" 
                     aria-valuemax="100">
                    <div class="progress-bar" 
                         style="width: ${(campaign.currentFunding / campaign.fundingTarget) * 100}%">
                        ${Math.round((campaign.currentFunding / campaign.fundingTarget) * 100)}%
                    </div>
                </div>
                <p class="funding-status">
                    $${campaign.currentFunding} raised of $${campaign.fundingTarget}
                </p>
                <!--a href="campaigns/${campaign.id}.html" class="btn btn-outline">Learn More</a-->
            </div>
        `).join('');
    }

    // Load campaigns when page loads
    loadCampaigns();
});