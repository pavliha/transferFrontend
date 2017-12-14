import React from "react";
import WelcomeNavbar from "./WelcomeNavbar";

export default ({className,children}) =>
    <div className={className}>
        <WelcomeNavbar className='mb-2'/>
        {children}
    </div>
      
