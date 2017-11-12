import React from 'react';

const LastPage = (props) => {
  return (
    <div className="intro last-page">
      <img src="assets/snowman.png" className="snowman"/>
      <h1>Congratulations!</h1>
      <p>
        You are now an official member of Vacations Café community.
      </p>
      <p>
        My vacation chefs have already received your family's tastes for your next vacation.
        Now go ahead and install our app to see our band of
        specialists design your next trip.
      </p>
      <p>
        Join our mission of making the tourism industry more social, fun and community-driven.
      </p>
      <p>
        See you on the other end!
      </p>
      <div className="last-page__downloads">
        <a 
          href="#"
          title="Available on the App Store"
        >
          <img src="assets/ios-download.svg" />
        </a>
        <a 
          href="#"
          title="Get it on Google Play"
        >
          <img src="assets/android-download.png" />
        </a>
      </div>
      <p className="last-page__email-info">
        Psst.. Also, I have sent a welcome email to you with the links to download the app,
        if you do not want to do it now.
      </p>
    </div>
  )
}

export default LastPage;