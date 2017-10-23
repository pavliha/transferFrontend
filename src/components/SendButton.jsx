import React from 'react';

function SendButton(props) {

  function handler() {
    if (props.loading) return;
    props.handler();
  }

  return (
    <div className="send" onClick={handler}>
      <div className={props.loading ? 'loading' : ''} />
    </div>
  );
}

export default SendButton;
