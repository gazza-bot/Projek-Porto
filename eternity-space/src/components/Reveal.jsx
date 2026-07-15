import { useEffect, useRef, useState } from "react";

/**
 * A reusable React component that animates its content when it enters the viewport.
 * Uses IntersectionObserver in a clean, declarative, ref-based approach.
 */
export default function Reveal({ children, className = "", threshold = 0.1 }) {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div ref={ref} className={`reveal ${show ? "show" : ""} ${className}`}>
      {children}
    </div>
  );
}
