import { motion, useMotionValue, useSpring } from "framer-motion";

const variants = {
  primary:
    "border-transparent bg-[var(--text)] text-[var(--bg)] shadow-glow hover:bg-white focus-visible:outline-[var(--cyan)]",
  secondary:
    "border-[var(--line)] bg-[var(--surface)] text-[var(--text)] hover:border-[rgba(92,225,230,0.48)] hover:bg-[var(--surface-strong)] focus-visible:outline-[var(--cyan)]",
  ghost:
    "border-transparent bg-transparent text-[var(--text)] hover:bg-white/10 focus-visible:outline-[var(--cyan)]"
};

export default function MagneticButton({
  href,
  children,
  icon: Icon,
  variant = "secondary",
  className = "",
  download = false,
  target,
  rel,
  disabled = false,
  onClick,
  type = "button"
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 18 });
  const springY = useSpring(y, { stiffness: 260, damping: 18 });
  const isExternal = href?.startsWith("http");

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.22);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.22);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  const sharedProps = {
    "data-cursor": "true",
    className: `group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${
      disabled ? "pointer-events-none opacity-60" : ""
    } ${variants[variant]} ${className}`,
    style: { x: springX, y: springY },
    onPointerMove: handlePointerMove,
    onPointerLeave: handlePointerLeave,
    whileTap: { scale: 0.98 }
  };

  const content = (
    <>
      <span>{children}</span>
      {Icon ? <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" /> : null}
    </>
  );

  if (href) {
    return (
      <motion.a
        {...sharedProps}
        href={href}
        download={download || undefined}
        target={target || (isExternal ? "_blank" : undefined)}
        rel={rel || (isExternal ? "noreferrer" : undefined)}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button {...sharedProps} type={type} onClick={onClick} disabled={disabled}>
      {content}
    </motion.button>
  );
}
