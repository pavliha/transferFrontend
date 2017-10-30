import React from 'react';

const ChildrenGroups = (props) => {
  return (
    <div className="children">
      {
        Object.keys(props.groups).map((groupName) => {
          return (
            <div className="child" key={groupName}>
              <div className="child-group">
                {groupName}
              </div>
              <div className="child-counter">
                <div className={`minus ${props.counter[groupName] === 0 ? 'hidden' : ''}`} onClick={props.remove} id={groupName}>-</div>
                {props.counter[groupName]}
                <div className="plus" onClick={props.add} id={groupName}>+</div>
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default ChildrenGroups;
