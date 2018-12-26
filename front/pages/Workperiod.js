import React from 'react';
import SingleWorkperiod from '../components/workperiod/SingleWorkperiod';

/**
 * Workperiod component  for displaying a single workperiod
 */
const Workperiod = (props) => {
    return <div>
      <SingleWorkperiod id={props.query.id} />
      </div>;
}

export default Workperiod;