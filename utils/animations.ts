export const easings = {
    // Premium feel easing (smooth start, snappy end)
    premium: 'cubic-bezier(0.5, 0, 0, 1)',
    // Bouncier easing for playful elements
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    // Smooth sine for gentle movements
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
};

export const animations = {
    fadeIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5, ease: easings.premium }
    },
    slideUp: {
        initial: { opacity: 0, transform: 'translateY(20px)' },
        animate: { opacity: 1, transform: 'translateY(0)' },
        transition: { duration: 0.6, ease: easings.premium }
    },
    scaleUp: {
        initial: { opacity: 0, transform: 'scale(0.95)' },
        animate: { opacity: 1, transform: 'scale(1)' },
        transition: { duration: 0.4, ease: easings.bounce }
    }
};

export const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('pt-BR').format(num);
};

// Helper function to simulate "count up" animation data
export const useCounter = (end: number, duration: number = 2000, start: boolean = false) => {
    // Implementation logic would go here if converted to a hook, 
    // currently just a placeholder for the utility file structure.
    return { count: end };
};
