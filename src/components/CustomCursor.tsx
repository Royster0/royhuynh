import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const CustomCursor = ({
  position,
}: {
  position: { x: number; y: number };
}) => {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, button")) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      if (!(e.relatedTarget as Element)?.closest("a, button")) {
        setIsHovering(false);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      style={{
        left: position.x,
        top: position.y,
      }}
      animate={{
        width: isHovering ? 32 : 8,
        height: isHovering ? 32 : 8,
        x: "-50%",
        y: "-50%",
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <div
        className={`w-full h-full rounded-full transition-colors ${
          isHovering ? "bg-dusty-rose/50" : "bg-dusty-rose"
        }`}
      ></div>
    </motion.div>
  );
};
