const revealables = Array.from(document.querySelectorAll("[data-reveal]"));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
  );

  revealables.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index * 35, 260)}ms`;
    observer.observe(element);
  });
} else {
  revealables.forEach((element) => element.classList.add("is-visible"));
}
