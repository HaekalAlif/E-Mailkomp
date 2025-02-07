import React, { useState, useEffect } from "react";

const MouseCursorEffect = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div>
            {/* Cursor Glow */}
            <div
                className="hidden md:block fixed w-[45vw] h-[45vw] bg-primary-blue/10 rounded-full blur-3xl pointer-events-none transition-transform duration-300 ease-out"
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                    transform: "translate(-50%, -50%)",
                }}
            ></div>
        </div>
    );
};

export default MouseCursorEffect;
