/* ================= NAVBAR ================= */
const navTL = gsap.timeline();

navTL
  .from("nav", {
    y: -40,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    skewY: 2
  })
  .from(".part2 > *", {
    y: -20,
    opacity: 0,
    scale: 0.95,
    stagger: 0.08,
    duration: 0.5,
    ease: "power3.out"
  }, "-=0.4");

/* ================= HERO ================= */
const heroTL = gsap.timeline({ delay: 0.2 });

heroTL
  .from(".center-part1 h1", {
    y: 50,
    opacity: 0,
    scale: 0.95,
    duration: 1,
    ease: "power4.out"
  })
  .from(".center-part1 p", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  }, "-=0.6")
  .from(".center-part1 button", {
    y: 20,
    opacity: 0,
    scale: 0.9,
    duration: 0.6,
    ease: "elastic.out(1,0.5)"
  }, "-=0.4")
  .from(".center-part2 img", {
    scale: 0.92,
    opacity: 0,
    rotation: -2,
    y: 10,
    duration: 1,
    ease: "back.out(1.5)"
  }, "-=0.8");

/* ================= BRAND LOGOS ================= */
gsap.utils.toArray(".section1bottom img").forEach((logo, i) => {
  gsap.from(logo, {
    y: 10,
    opacity: 0,
    scale: 0.95,
    duration: 0.6,
    delay: i * 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".section1bottom",
      start: "top 85%"
    }
  });

  // Minimal idle float
  gsap.to(logo, {
    y: "+=5",
    repeat: -1,
    yoyo: true,
    duration: 4 + Math.random(),
    ease: "sine.inOut"
  });
});

/* ================= SERVICES HEADER ================= */
gsap.from(".services h3", {
  x: -80,
  opacity: 0,
  rotation: -2,
  scale: 0.97,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: { trigger: ".services", start: "top 80%" }
});

gsap.from(".services p", {
  x: 80,
  opacity: 0,
  rotation: 2,
  scale: 0.97,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: { trigger: ".services", start: "top 80%" }
});

/* ================= SERVICE CARDS ================= */
gsap.utils.toArray(".elem").forEach((card, i) => {
  gsap.from(card, {
    x: i % 2 === 0 ? -150 : 150,
    opacity: 0,
    scale: 0.95,
    rotationY: i % 2 === 0 ? -2 : 2,
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      end: "top 55%",
      scrub: 1
    }
  });

  // Hover micro-interaction
  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      scale: 1.03,
      y: -5,
      rotation: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      scale: 1,
      y: 0,
      rotation: 0,
      duration: 0.3,
      ease: "power2.out"
    });
  });
});

/* ================= CTA ================= */
gsap.from(".cta", {
  y: 40,
  opacity: 0,
  scale: 0.97,
  rotation: -1,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: { trigger: ".cta", start: "top 85%", end: "top 60%", scrub: 1 }
});

gsap.from(".cta-left > *", {
  y: 20,
  opacity: 0,
  stagger: 0.15,
  scale: 0.97,
  rotation: -1,
  duration: 0.8,
  ease: "power3.out",
  scrollTrigger: { trigger: ".cta", start: "top 75%" }
});

gsap.from(".cta-right img", {
  scale: 0.95,
  opacity: 0,
  rotation: 1,
  duration: 0.8,
  ease: "back.out(1.3)",
  scrollTrigger: { trigger: ".cta", start: "top 75%" }
});

/* ================= BUTTON HOVER EFFECT ================= */
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(btn, {
      x: x * 0.15,
      y: y * 0.15,
      scale: 1.05,
      rotation: x * 0.03,
      duration: 0.25,
      ease: "power2.out"
    });
  });

  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, {
      x: 0,
      y: 0,
      scale: 1,
      rotation: 0,
      duration: 0.3,
      ease: "power2.out"
    });
  });
});
