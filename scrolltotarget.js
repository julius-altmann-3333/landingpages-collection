window.scrollToTarget = function(targetName) {
    const target = document.getElementById('section-' + targetName);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error(`Element with ID section-${targetName} not found`);
    }
};
