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

    const trees = Array.from({ length: 9 }, (_, i) => ({
      baseX: i * 170 + 60,
      scale: 0.75 + (i % 3) * 0.18,
      swayOffset: i * 0.6,
    }));

    const drawTree = (x, y, scale, sway) => {
      const trunkW = 8 * scale;
      const trunkH = 46 * scale;

      ctx.fillStyle = "#5a3a1a";
      ctx.fillRect(x - trunkW / 2 + sway * 1.2, y - trunkH, trunkW, trunkH);

      const layers = [
        { w: 62, h: 35, offsetY: 52, color: "#1f6c45" },
        { w: 50, h: 30, offsetY: 38, color: "#238451" },
        { w: 38, h: 26, offsetY: 24, color: "#2c975a" },
      ];

      layers.forEach((layer) => {
        ctx.beginPath();
        ctx.moveTo(x + sway * 2, y - layer.offsetY * scale);
        ctx.lineTo(x - (layer.w / 2) * scale + sway * 2, y - (layer.offsetY - layer.h) * scale);
        ctx.lineTo(x + (layer.w / 2) * scale + sway * 2, y - (layer.offsetY - layer.h) * scale);
        ctx.closePath();
        ctx.fillStyle = layer.color;
        ctx.fill();
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const sky = ctx.createLinearGradient(0, 0, 0, canvas.height);
      sky.addColorStop(0, "#091521");
      sky.addColorStop(1, "#112132");
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      for (let x = 0; x <= canvas.width; x += 2) {
        const y = 215 + Math.sin(x * 0.004 + t * 0.5) * 18;
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();
      ctx.fillStyle = "rgba(15, 45, 35, 0.9)";
      ctx.fill();

      ctx.beginPath();
      for (let x = 0; x <= canvas.width; x += 2) {
        const y = 165 + Math.sin(x * 0.01 + t) * 16;
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgba(79, 255, 173, 0.75)";
      ctx.stroke();

      trees.forEach((tree) => {
        const x = tree.baseX % (canvas.width + 80);
        const sway = Math.sin(t * 1.2 + tree.swayOffset) * 1.8;
        drawTree(x, 212 + Math.sin(t * 0.8 + tree.swayOffset) * 2, tree.scale, sway);
      });

      const haze = ctx.createLinearGradient(0, 120, 0, canvas.height);
      haze.addColorStop(0, "rgba(10, 18, 24, 0)");
      haze.addColorStop(1, "rgba(5, 10, 14, 0.45)");
      ctx.fillStyle = haze;
      ctx.fillRect(0, 120, canvas.width, canvas.height - 120);

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
