import React from 'react';

const Partners = (props) => {
  return (
    <div className="partners">
      <div onClick={props.handler} id="hasPartner">
        <img src="/assets/partner.png" />
        <div>Yes I do</div>
      </div>
      <div onClick={props.handler} id="noPartner">
        <img src="/assets/alone.png" />
        <div>No</div>
      </div>
    </div>
  );
};

export default Partners;
