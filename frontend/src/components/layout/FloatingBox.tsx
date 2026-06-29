import { useRef, useEffect, useState } from "react";
import avatar from "../../assets/avatar.png";
export function FloatingBox({
  containerRef,
  speed = 4,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
  speed?: number;
}) {
  const boxRef = useRef<HTMLDivElement>(null);
  const physics = useRef({
    posX: Math.random() * 200,
    posY: Math.random() * 200,
    speedX: 4,
    speedY: 4,
  });

  const images = [
    "https://i.pinimg.com/1200x/04/8f/c9/048fc92bfa85bc12c8be8125cadafe6a.jpg",
    "https://i.pinimg.com/736x/03/c3/a1/03c3a1397636e555e8a32a9356673082.jpg",
    "https://i.pinimg.com/1200x/7e/4e/13/7e4e136037f8cd63909a685d814e3049.jpg",
    "https://i.pinimg.com/originals/71/95/d8/7195d8a4d8589c987f5ef7d85cd82f23.png",
  ];

  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const box = boxRef.current;
    const container = containerRef.current;
    if (!box || !container) return;

    const prevOverflow = container.style.overflow;
    container.style.overflow = "hidden";

    let animationFrameId: number;

    const updatePhysics = () => {
      const { offsetWidth: boxWidth, offsetHeight: boxHeight } = box;
      const screenWidth = container.offsetWidth;
      const screenHeight = container.offsetHeight;
      const p = physics.current;

      p.posX += p.speedX;
      p.posY += p.speedY;

      let bounced = false;

      if (p.posX + boxWidth >= screenWidth) {
        p.posX = screenWidth - boxWidth;
        p.speedX *= -1;
        bounced = true;
      } else if (p.posX <= 0) {
        p.posX = 0;
        p.speedX *= -1;
        bounced = true;
      }

      if (p.posY + boxHeight >= screenHeight) {
        p.posY = screenHeight - boxHeight;
        p.speedY *= -1;
        bounced = true;
      } else if (p.posY <= 0) {
        p.posY = 0;
        p.speedY *= -1;
        bounced = true;
      }

      if (bounced) {
        setImgIndex((prev) => (prev + 1) % images.length);
      }

      box.style.transform = `translate3d(${p.posX}px, ${p.posY}px, 0)`;
      animationFrameId = requestAnimationFrame(updatePhysics);
    };

    animationFrameId = requestAnimationFrame(updatePhysics);
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.style.overflow = prevOverflow;
    };
  }, [containerRef, speed]);

  return (
    <div
      ref={boxRef}
      className={`absolute top-0 left-0 flex h-24 w-24 cursor-pointer items-center justify-center rounded-full font-bold text-white shadow-lg transition-colors duration-300 will-change-transform select-none`}
    >
      <img src={images[imgIndex]} alt="Avatar" className="rounded-full" />
    </div>
  );
}
