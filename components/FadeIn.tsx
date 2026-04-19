"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
  threshold?: number;
};

export function FadeIn({
  children,
  className = "",
  as = "div",
  threshold = 0.15,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add("ready");

    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const Tag = as;
  const classes = `fade-in ${className}`.trim();

  return (
    <Tag ref={ref as React.RefObject<HTMLDivElement>} className={classes}>
      {children}
    </Tag>
  );
}
