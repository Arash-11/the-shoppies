import React from 'react';
import PropTypes from 'prop-types';

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

Nominations.propTypes = {
  count: PropTypes.number,
  // not going to test PropTypes for children because there are no children initially
};

export default Nominations;