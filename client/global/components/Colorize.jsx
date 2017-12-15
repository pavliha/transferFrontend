import React from "react";

function color(children) {
    if (children < 0) {

    }
}

export default ({children, className}) => <span
    className={(className ? className : '') + (parseFloat(children) < 0 ? " text-danger" : 'text-success')}>
    {children}
</span>
      
