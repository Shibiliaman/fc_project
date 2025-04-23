document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('#featured .card');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const sortBtns = document.querySelectorAll('.sort-btn');
    const progressFilter = document.getElementById('progressFilter');
    const progressValue = document.getElementById('progressValue');

    // Filter projects by category
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.dataset.category;
            
            projects.forEach(project => {
                if (category === 'all') {
                    project.style.display = 'block';
                } else {
                    const projectCategory = project.dataset.category;
                    project.style.display = projectCategory === category ? 'block' : 'none';
                }
            });
        });
    });

    // Sort projects
    sortBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sortBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const sortType = btn.dataset.sort;
            const projectsArray = Array.from(projects);

            projectsArray.sort((a, b) => {
                if (sortType === 'funded') {
                    return getProgress(b) - getProgress(a);
                } else if (sortType === 'newest') {
                    return getDate(b) - getDate(a);
                } else if (sortType === 'closing') {
                    return getDaysLeft(a) - getDaysLeft(b);
                }
            });

            const container = document.querySelector('#featured .grid');
            projectsArray.forEach(project => container.appendChild(project));
        });
    });

    // Progress filter
    progressFilter.addEventListener('input', (e) => {
        const minProgress = e.target.value;
        progressValue.textContent = `${minProgress}%+ funded`;

        projects.forEach(project => {
            const progress = getProgress(project);
            project.style.display = progress >= minProgress ? 'block' : 'none';
        });
    });

    // Helper functions
    function getProgress(project) {
        const progressBar = project.querySelector('.progress-bar');
        return parseInt(progressBar.style.width);
    }

    function getDate(project) {
        // Add data-date attribute to projects for sorting
        return new Date(project.dataset.date || '2025-01-01').getTime();
    }

    function getDaysLeft(project) {
        // Add data-deadline attribute to projects for sorting
        return parseInt(project.dataset.deadline || '30');
    }
});