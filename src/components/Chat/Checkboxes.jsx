import React from 'react';

const Checkboxes = (props) => {
  return (
    <div className="checkboxes">
      {
        props.elements.map((element) => {
           return props.toggleCheckbox ?
             <div
               className={`checkbox ${props.activeElements[element._id] ? 'active' : ''}`}
               key={element._id}
               id={element._id}
               onClick={props.toggleCheckbox}
             >
               {element.text}
             </div>
            :
             <div
               className={`checkbox ${props.activeElements[element._id] ? 'active' : ''}`}
               key={element._id}
               id={element._id}
             >
               {element.text}
             </div>;
        })
      }
    </div>
  );
};

export default Checkboxes;
