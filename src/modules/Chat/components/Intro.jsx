import React from 'react';

const Intro = (props) => {
  return (
    <div className="intro">
      <img src="assets/snowman.png" className="snowman"/>
      <h1>Lets get started</h1>
      <p>
        Hey, I'm Peru, CCO ("Chef" Coordinating Officer) at Vacations Café.
        I'll guide you today to let us understand a little about your family's
        likes and dislikes for vacations. It takes less than 5 minutes.
      </p>
      <p>
        <strong>Claimer</strong>: Nobody else in this world cares better for your
        precious vacations than my vacation chefs that hand-cook vacation experiences
        for your tastes.
      </p>
      <p>
        Shall we begin?
      </p>
      <div className={`next-btn ${props.loading ? 'loading' : ''}`} onClick={props.handler} />
    </div>
  )
}

export default Intro;