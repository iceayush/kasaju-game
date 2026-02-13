import React from "react";
import "./floatingHearts.css";

// Generate hearts once outside the component
const generateHearts = (count) => {
    return Array.from({ length: count }).map(() => ({
        id: Math.random(),
        left: Math.random() * 100,      // horizontal position %
        size: 10 + Math.random() * 20,  // size in px
        duration: 4 + Math.random() * 4, // animation duration seconds
        delay: Math.random() * 5,       // animation delay seconds
    }));
};

function FloatingHearts({ count = 20 }) {
    const hearts = React.useMemo(() => generateHearts(count), [count]);

    return (
        <div className="hearts">
            {hearts.map(({ id, left, size, duration, delay }) => (
                <div
                    key={id}
                    className="heart"
                    style={{
                        left: `${left}%`,
                        width: `${size}px`,
                        height: `${size}px`,
                        animationDuration: `${duration}s`,
                        animationDelay: `${delay}s`,
                    }}
                />
            ))}
        </div>
    );
}

export default FloatingHearts;
