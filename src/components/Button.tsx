import React from "react";

export type ButtonVariant = "primary" | "secondary";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariant;
    children: React.ReactNode;
}

const buttonClassMap: Record<ButtonVariant, string> = {
    primary:
        "font-display px-3 py-1 border-4 border-ega-yellow bg-ega-black text-ega-yellow tracking-widest text-xs sm:text-base transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-ega-white hover:bg-ega-yellow hover:text-ega-black active:bg-ega-dark-gray active:text-ega-yellow",
    secondary:
        "font-display px-3 py-1 border-4 border-ega-cyan bg-ega-black text-ega-cyan tracking-widest text-xs sm:text-base transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-ega-white hover:bg-ega-cyan hover:text-ega-black active:bg-ega-dark-gray active:text-ega-cyan",
};

export function Button({ variant, children, className = "", ...rest }: ButtonProps) {
    // Custom pixel-style box-shadow for retro effect, all grey
    const pixelShadow = {
        boxShadow: '0 0 0 4px #000, 4px 4px 0 0 #555, 8px 8px 0 0 #555',
        borderRadius: '0.25rem',
        imageRendering: 'pixelated',
        position: 'relative',
        zIndex: 1,
    };
    return (
        <button
            className={`${buttonClassMap[variant]} ${className}`.trim()}
            style={pixelShadow}
            {...rest}
        >
            {children}
        </button>
    );
}

export default Button;
