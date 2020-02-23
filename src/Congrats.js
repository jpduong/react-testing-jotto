import React from "react";

/**
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false)
 */

export default props => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations! You guessted the word!
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};
