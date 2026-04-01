import { useEffect, useRef } from "react";

export default function EcoScene() {
  const ref = useRef();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 300;
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    let t = 0;
    let frameId;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      for (let x = 0; x < canvas.width; x += 1) {
        const y = 150 + Math.sin(x * 0.01 + t) * 20;
        ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "#00ff88";
      ctx.stroke();

      ctx.fillStyle = "#00ff88";
      for (let i = 0; i < 8; i += 1) {
        const x = i * 200 + 50;
        const h = 50 + Math.sin(t + i) * 10;

        ctx.fillRect(x, 200 - h, 10, h);

        ctx.beginPath();
        ctx.arc(x + 5, 200 - h, 20, 0, Math.PI * 2);
        ctx.fill();
      }

      t += 0.02;
      frameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return <canvas ref={ref} style={{ width: "100%" }} />;
}
