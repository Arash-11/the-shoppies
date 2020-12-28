import React from 'react';

function Nominations(props) {
  return (
    <section className="sections__nominations">
      <h2 className="sections__nominations__title">My Nominations ({props.count}/5)</h2>
      <div className={`sections__nominations__content ${props.count === 5 ? "nominations--banner" : ""}`}>
        {props.children}
        {
          props.count === 0 &&
          <p className="sections__nominations__content__placeholder">Nominate 5 movies of your choice.</p>
        }
      </div>
    </section>
  );
}

export default Nominations;