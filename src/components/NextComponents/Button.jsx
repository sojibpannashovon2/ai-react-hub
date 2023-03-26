import React from 'react';

const Button = ({ children }) => {
    // console.log(children);
    return (
        <div>
            <button className=" btn btn-outline btn-warning my-4 cursor-pointer">{children}</button>

        </div>
    );
};

export default Button;