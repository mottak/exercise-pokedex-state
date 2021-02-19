import React from 'react';

function FilterButton(props) {
console.log(props.props)
  return (
    <button
      type="button"
      disabled={props.disabled}
      onClick={props.onClick}
      value={props.value}
      className={props.className }
    >
    </button>
  );
}

export default FilterButton;
