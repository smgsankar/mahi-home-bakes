import { useEffect, useRef } from "react";

export function useFadeInOnView<T extends HTMLElement>() {
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

    node.classList.add("opacity-0");

    const observer = new window.IntersectionObserver(handleIntersect, {
      threshold: 0.2,
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
}
