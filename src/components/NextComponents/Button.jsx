import React from 'react';

const Button = ({ children }) => {
    // console.log(children);
    return (
        <div>
            <button className="btn btn-outline btn-accent my-4">{children}</button>
        </div>
    );
};

export default Button;