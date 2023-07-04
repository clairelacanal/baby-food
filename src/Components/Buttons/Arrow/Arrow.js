import React from 'react';
import { useHistory } from 'react-router-dom';

function Arrow() {
  const history = useHistory();

  return (
    <button onClick={() => history.goBack()}>
      {"<"}
    </button>
  );
}

export default Arrow;