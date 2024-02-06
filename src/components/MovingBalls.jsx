    // MovingBalls.js

    import React, { useEffect, useState } from 'react';

    const MovingBalls = () => {
    const [balls, setBalls] = useState([]);

    useEffect(() => {
        // Create initial balls
        const initialBalls = Array.from({ length: 5 }, (_, index) => ({
        id: index,
        top: Math.random() * window.innerHeight,
        left: Math.random() * window.innerWidth,
        image: `https://placekitten.com/50/50?image=${index + 1}`, // You can replace this with your images
        speedX: 0.2 , // Random speed for X direction
        speedY: 0.2, // Random speed for Y direction
        }));
        setBalls(initialBalls);

        // Update ball positions on each animation frame
        const updateBalls = () => {
        setBalls(prevBalls =>
            prevBalls.map(ball => ({
            ...ball,
            top: ball.top + ball.speedY,
            left: ball.left + ball.speedX,
            // Reverse direction if the ball reaches the edges
            speedX: ball.left + ball.speedX > window.innerWidth || ball.left + ball.speedX < 0 ? -ball.speedX : ball.speedX,
            speedY: ball.top + ball.speedY > window.innerHeight || ball.top + ball.speedY < 0 ? -ball.speedY : ball.speedY,
            }))
        );
        requestAnimationFrame(updateBalls);
        };

        requestAnimationFrame(updateBalls);

        // Cleanup on component unmount
        return () => cancelAnimationFrame(updateBalls);
    }, []);

    return (
        <>
        {balls.map(ball => (
            <img
            key={ball.id}
            src={ball.image}
            alt={`ball-${ball.id}`}
            style={{
                position: 'absolute',
                top: ball.top,
                left: ball.left,
                width: '50px', // Adjust size as needed
                height: '50px', // Adjust size as needed
                borderRadius: '50%',
            }}
            />
        ))}
        </>
    );
    };

    export default MovingBalls;
