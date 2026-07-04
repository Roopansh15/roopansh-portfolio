import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 420, damping: 34 });
  const smoothY = useSpring(y, { stiffness: 420, damping: 34 });

  useEffect(() => {
    const canUseCursor = window.matchMedia("(pointer: fine)").matches;
    if (!canUseCursor) return undefined;

    setEnabled(true);
    document.body.classList.add("cursor-enabled");

    const move = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const over = (event) => {
      if (event.target.closest("a, button, input, textarea, [data-cursor='true']")) setActive(true);
    };

    const out = (event) => {
      if (event.target.closest("a, button, input, textarea, [data-cursor='true']")) setActive(false);
    };

    window.addEventListener("pointermove", move);
    document.addEventListener("pointerover", over);
    document.addEventListener("pointerout", out);

    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.removeEventListener("pointerout", out);
      document.body.classList.remove("cursor-enabled");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[95] rounded-full border border-white/40 bg-white/10 mix-blend-difference backdrop-blur-sm"
      style={{ x: smoothX, y: smoothY }}
      animate={{
        width: active ? 44 : 18,
        height: active ? 44 : 18,
        marginLeft: active ? -22 : -9,
        marginTop: active ? -22 : -9,
        opacity: active ? 0.92 : 0.72
      }}
      transition={{ type: "spring", stiffness: 360, damping: 28 }}
    />
  );
}
