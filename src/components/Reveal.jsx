import { useEffect, useRef, useState } from "react";

function Reveal({ children }) {

  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

  }, []);

  return (
    <div
      ref={ref}
      className={visible ? "show" : "hidden"}
    >
      {children}
    </div>
  );
}

export default Reveal;