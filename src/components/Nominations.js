import React from 'react';

function Nominations(props) {
  return (
    <section className="sections__nominations">
      <h2 className="sections__nominations__title">My Nominations ({props.count}/5)</h2>
      <div className="sections__nominations__content">
        {props.children}
      </div>
    </section>
  );
}

export default Nominations;