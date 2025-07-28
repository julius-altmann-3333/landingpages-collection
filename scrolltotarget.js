document.addEventListener('DOMContentLoaded', () => {
    // Function to handle smooth scrolling to target section
    window.scrollToTarget = function(targetName) {
        const target = document.getElementById('section-' + targetName);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error(`Element with ID section-${targetName} not found`);
        }
    };

    // Select all anchor links with data-target attribute
    const anchors = document.querySelectorAll('a[data-target]');

    // Add event listeners for both click and touchstart
    anchors.forEach(anchor => {
        // Click event for desktop
        anchor.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            const targetName = anchor.getAttribute('data-target');
            window.scrollToTarget(targetName);
        });

        // Touchstart event for mobile
        anchor.addEventListener('touchstart', (e) => {
            e.preventDefault(); // Prevent default to avoid touch conflicts
            const targetName = anchor.getAttribute('data-target');
            window.scrollToTarget(targetName);
        });
    });
});
