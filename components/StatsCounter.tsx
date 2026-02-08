import React, { useEffect, useState, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface StatsCounterProps {
    end: number;
    suffix?: string;
    label: string;
    duration?: number;
}

const StatsCounter: React.FC<StatsCounterProps> = ({ end, suffix = '', label, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const { ref, isVisible } = useScrollReveal();
    const countRef = useRef(0);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | null = null;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Easing function: easeOutQuart
            const easeOut = 1 - Math.pow(1 - percentage, 4);

            countRef.current = Math.floor(easeOut * end);
            setCount(countRef.current);

            if (percentage < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return (
        <div ref={ref} className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-1">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-emerald-950 tabular-nums">
                    {count}{suffix}
                </span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-emerald-600 uppercase tracking-wider mt-1">
                {label}
            </p>
        </div>
    );
};

export default StatsCounter;
