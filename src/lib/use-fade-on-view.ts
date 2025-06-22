import { useEffect, useRef } from "react";

const allowedDelays = [100, 200, 300, 400, 500];

export function useFadeInOnView<T extends HTMLElement>(delay?: number) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.classList.add("animate-fade-in");
          node.classList.remove("opacity-0");
        }
      });
    };

    node.classList.add("opacity-0"); // Start hidden
    if (typeof delay === "number" && allowedDelays.includes(delay)) {
      node.classList.add(`delay-${delay}`);
    }

    const observer = new window.IntersectionObserver(handleIntersect, {
      threshold: 0.2,
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  return ref;
}
