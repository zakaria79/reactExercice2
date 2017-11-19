import React from 'react';

const validationComponent = props => {
  let text = null;

  if (props.inputLengthValue > 0) {
    if (props.inputLengthValue > 5) {
      text = <p>Text long enough</p>;
    } else {
      text = <p>Text too short</p>
    }
  }

  return text;
}

export default validationComponent;
