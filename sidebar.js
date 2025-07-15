window.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const labels = document.querySelectorAll("#sidebar p");
  const progressBar = document.getElementById("vertical-progress");

  if (!progressBar || sections.length === 0 || labels.length === 0) {
    console.error("Required elements not found:", { progressBar, sections, labels });
    return;
  }

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min((scrollY / totalHeight) * 100, 100);
    progressBar.style.height = `${progress}%`;

    let activeIndex = -1;
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      // Check if section is in viewport (top is above midpoint, bottom is below top of viewport)
      if (rect.top <= window.innerHeight * 0.6 && rect.bottom >= 0) {
        activeIndex = index;
      }
    });

    labels.forEach((label, index) => {
      label.classList.toggle("active", index === activeIndex);
    });
  });
});
