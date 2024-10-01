import React from 'react';

type ButtonProps = {
    onClick: () => void;
    children: React.ReactNode;
    className: string;
}

const Button = ({ onClick, children, className }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={className}
        >
            {children}
        </button>
    );
}

export default Button;