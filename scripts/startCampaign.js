document.addEventListener('DOMContentLoaded', () => {
    const campaignForm = document.getElementById('create-campaign-form');
    const formMessage = document.getElementById('form-message');

    campaignForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            campaignName: document.getElementById('campaign-name').value,
            description: document.getElementById('campaign-desc').value,
            fundingTarget: document.getElementById('funding-target').value,
            institution: document.getElementById('institution-name').value,
            teamMembers: document.getElementById('team-members').value,
            projectUrl: document.getElementById('project-url').value,
            dateCreated: new Date().toISOString(),
            status: 'pending',
            currentFunding: 0
        };

        try {
            // Save to localStorage (temporary storage)
            saveCampaignData(formData);

            // Show success message
            showMessage('Campaign created successfully!', 'success');

            // Send confirmation email
            await sendConfirmationEmail(formData);

            // Reset form
            campaignForm.reset();

            // Redirect after 2 seconds
            setTimeout(() => {
                window.location.href = 'campaigns.html#latest';
            }, 2000);

        } catch (error) {
            console.error('Error:', error);
            showMessage('Error creating campaign. Please try again.', 'error');
        }
    });

    // Helper function to save campaign data
    function saveCampaignData(data) {
        try {
            // Get existing campaigns or initialize empty array
            let campaigns = JSON.parse(localStorage.getItem('campaigns') || '[]');
            
            // Add new campaign
            campaigns.push({
                id: generateCampaignId(),
                ...data
            });

            // Save back to localStorage
            localStorage.setItem('campaigns', JSON.stringify(campaigns));
        } catch (error) {
            throw new Error('Failed to save campaign data');
        }
    }

    // Helper function to generate unique campaign ID
    function generateCampaignId() {
        return 'camp_' + Date.now() + Math.random().toString(36).substr(2, 9);
    }

    // Helper function to show messages
    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
    }

    // Helper function to send confirmation email
    async function sendConfirmationEmail(campaignData) {
        // Email template
        const emailContent = `
            <h2>Campaign Created Successfully!</h2>
            <p>Your campaign "${campaignData.campaignName}" has been created.</p>
            <p>Details:</p>
            <ul>
                <li>Funding Target: $${campaignData.fundingTarget}</li>
                <li>Institution: ${campaignData.institution}</li>
                <li>Team Members: ${campaignData.teamMembers}</li>
            </ul>
            <p>Our team will review your campaign shortly.</p>
        `;

        try {
            // You would typically make an API call to your backend here
            // For demo, we'll just simulate an email being sent
            console.log('Email sent:', emailContent);

            // In production, you would use a proper email service like SendGrid:
            /*
            await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    to: userEmail,
                    subject: 'Campaign Created Successfully',
                    html: emailContent
                })
            });
            */
        } catch (error) {
            throw new Error('Failed to send confirmation email');
        }
    }
});