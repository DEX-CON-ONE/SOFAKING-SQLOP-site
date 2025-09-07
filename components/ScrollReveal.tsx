"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".scroll-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add("revealed");
            el.style.removeProperty("opacity");
            el.style.removeProperty("transform");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => {
      if (!el.classList.contains("revealed")) {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        observer.observe(el);
      }
    });
    return () => observer.disconnect();
  }, [pathname]);
  return null;
}
