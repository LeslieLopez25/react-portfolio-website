import { useEffect } from "react";
import gsap from "gsap";

export const useHoverAnimation = () => {
  useEffect(() => {
    const menuBtns = document.querySelectorAll(".menu-btn");

    if (menuBtns.length === 0) {
      console.error("No elements with class 'menu-btn' found.");
    }

    const handleMouseEnter = (btn) => {
      gsap.to(btn, { scale: 1.2, duration: 0.2 });
    };

    const handleMouseLeave = (btn) => {
      gsap.to(btn, { scale: 1, duration: 0.2 });
    };

    menuBtns.forEach((btn) => {
      btn.addEventListener("mouseenter", () => handleMouseEnter(btn));
      btn.addEventListener("mouseleave", () => handleMouseLeave(btn));
    });

    return () => {
      menuBtns.forEach((btn) => {
        btn.removeEventListener("mouseenter", () => handleMouseEnter(btn));
        btn.removeEventListener("mouseleave", () => handleMouseLeave(btn));
      });
    };
  }, []);
};
