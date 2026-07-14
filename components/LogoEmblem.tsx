"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";

/**
 * The gold logo as a floating 3D emblem: it drifts (CSS float) and tilts in 3D
 * toward the cursor (JS, spring-smoothed). Renders nothing if the logo asset is
 * missing (so it never duplicates a plain RB mark). Static under reduced-motion.
 */
export function LogoEmblem({
  size = 116,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [errored, setErrored] = useState(false);
  const tilt = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduce) return;
    const el = tilt.current;
    if (!el) return;

    let rx = 0;
    let ry = 0;
    let targetX = 0;
    let targetY = 0;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / (window.innerWidth / 2);
      const dy = (e.clientY - (r.top + r.height / 2)) / (window.innerHeight / 2);
      targetY = Math.max(-1, Math.min(1, dx)) * 18; // rotateY
      targetX = Math.max(-1, Math.min(1, dy)) * -18; // rotateX
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    let raf = 0;
    const loop = () => {
      rx += (targetX - rx) * 0.08;
      ry += (targetY - ry) * 0.08;
      el.style.transform = `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, [reduce]);

  if (errored) return null;

  return (
    <div className={className} style={{ perspective: 900 }}>
      <div className={reduce ? undefined : "emblem-float"}>
        <div
          ref={tilt}
          style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        >
          <Image
            src={site.logo}
            alt={site.logoAlt}
            width={size}
            height={size}
            priority
            onError={() => setErrored(true)}
            className="object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.28)]"
            style={{ width: size, height: size }}
          />
        </div>
      </div>
    </div>
  );
}
