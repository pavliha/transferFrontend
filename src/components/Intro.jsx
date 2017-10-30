import React from 'react';

const Intro = (props) => {
  return (
    <div className="intro">
      <img src="/assets/snowman.png" className="snowman"/>
      <h1>Lets get started</h1>
      <p>
        Hey, I'm Peru, COO ("Chef" Coordinating Officer) at vacations cafe. I'll guide you today to let us unserstand a little about your family's likes and dislikes for vacations. It takes just around 5 minutes.
      </p>
      <p>
        Claimer: Nobody else in this world cares better for your precious vacations than my vacation chefs that handbook vacations experiances for your tastes.
      </p>
      <p>
        Shall we begin?
      </p>
      <div className={`next-btn ${props.loading ? 'loading' : ''}`} onClick={props.handler} />
    </div>
  )
}

export default Intro;