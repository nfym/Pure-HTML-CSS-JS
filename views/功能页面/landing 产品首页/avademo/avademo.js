! function () {
    const e = document.documentElement;
    if (e.classList.remove("no-js"), e.classList.add("js"), document.body.classList.contains("has-animations")) {
        const e = window.sr = ScrollReveal();
        e.reveal(".hero-title, .hero-paragraph, .newsletter-header, .newsletter-form", {
            duration: 1e3,
            distance: "40px",
            easing: "cubic-bezier(0.5, -0.01, 0, 1.005)",
            origin: "bottom",
            interval: 150
        }), e.reveal(".bubble-3, .bubble-4, .hero-browser-inner, .bubble-1, .bubble-2", {
            duration: 1e3,
            scale: .95,
            easing: "cubic-bezier(0.5, -0.01, 0, 1.005)",
            interval: 150
        }), e.reveal(".feature", {
            duration: 600,
            distance: "40px",
            easing: "cubic-bezier(0.5, -0.01, 0, 1.005)",
            interval: 100,
            origin: "bottom",
            viewFactor: .5
        })
    }
}();