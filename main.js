import "./style.css";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* やきそばパン */

document.querySelectorAll("#top .text-w-bg > .bg").forEach((el) => {
  gsap.fromTo(
    el,
    { width: 0 },
    {
      width: "100%",
      scrollTrigger: {
        trigger: el,
        start: "top center",
        ease: "expo",
      },
    }
  );
});

/* アイスクリーム */

const iceSectionEl = document.querySelector("#icecream");
const iceTl = gsap.timeline();
iceTl.from(iceSectionEl, { backgroundColor: "#ff4297" });
iceTl.to(iceSectionEl, { backgroundColor: "#7e42ff", ease: "linear" });
iceTl.to(iceSectionEl, { backgroundColor: "#58deeb", ease: "linear" });
ScrollTrigger.create({
  animation: iceTl,
  trigger: iceSectionEl,
  start: "top bottom",
  end: "bottom top",
  scrub: true,
});

/* ラスト夕飯 */

const lsSectionEl = document.querySelector("#the-last-supper");
const lsImgEl = document.querySelector("#the-last-supper .the-last-supper");
ScrollTrigger.create({
  trigger: lsImgEl,
  start: "top top",
  endTrigger: lsSectionEl,
  end: "bottom bottom",
  pin: true,
  pinSpacing: false,
});

/* 線 */

document.querySelectorAll("#decorations .line-wrapper").forEach((el) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "top center",
      end: "bottom center",
      scrub: 0.5,
    },
  });
  const linebody = el.querySelector(".inner");
  tl.from(linebody, { bottom: "0%", height: "0%" })
    .to(linebody, { height: "100%", ease: "power1" })
    .to(linebody, { bottom: "100%", ease: "power1" });
});

const autoLinesEl = document.querySelector(
  "#decorations > .auto-lines-wrapper > .auto-lines"
);

ScrollTrigger.create({
  trigger: autoLinesEl,
  start: "top top",
  endTrigger: "#decorations > .auto-lines-wrapper",
  end: "bottom bottom",
  pin: true,
  pinSpacing: true,
  markers: true,
  onEnter: () => gsap.to(autoLinesEl, { opacity: 1 }),
  onLeave: () => gsap.to(autoLinesEl, { opacity: 0 }),
  onEnterBack: () => gsap.to(autoLinesEl, { opacity: 1 }),
  onLeaveBack: () => gsap.to(autoLinesEl, { opacity: 0 }),
});

const generateLines = () => {
  if (Math.random() > 0.2) {
    window.requestAnimationFrame(generateLines);
    return;
  }
  const el = document.createElement("div");
  el.style.width = `${Math.random() * 4}px`;
  el.style.position = "absolute";
  el.style.backgroundColor = "var(--color-body)";
  el.style.left = `${Math.random() * 100}%`;
  el.style.bottom = 0;
  autoLinesEl.appendChild(el);
  const tl = gsap.timeline();
  tl.from(el, { height: "0%", bottom: 0 });
  const dur = Math.random() * 0.7 + 0.3;
  tl.to(el, { height: "100%", duration: dur, ease: "expo" });
  tl.to(el, { bottom: "100%", duration: dur, ease: "expo" }, "<0.3");
  tl.call(() => autoLinesEl.removeChild(el));
  window.requestAnimationFrame(generateLines);
};
window.requestAnimationFrame(generateLines);

/* 月見バーガー */

const burgerImageEl = document.querySelector("#burger .burger");
const burgerTopEl = document.querySelector("#burger .top");
const burgerBottomEl = document.querySelector("#burger .bottom");
const burgerZoomInTl = gsap.timeline();
ScrollTrigger.create({
  animation: burgerZoomInTl,
  trigger: "#burger > .pin",
  start: "top top",
  endTrigger: "#burger",
  end: "bottom bottom",
  pin: true,
  pinSpacing: true,
  scrub: true,
});
burgerZoomInTl.from(burgerImageEl, { scale: 0.01, opacity: 0 });
burgerZoomInTl.from(burgerTopEl, { opacity: 0 });
burgerZoomInTl.from(burgerBottomEl, { opacity: 0 });
burgerZoomInTl.to(burgerImageEl, { scale: 1, opacity: 1 });
burgerZoomInTl.to(burgerTopEl, { opacity: 1 });
burgerZoomInTl.to(burgerBottomEl, { opacity: 1 });
