import React from "react";
import PropTypes from "prop-types"

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <textarea
          type='text'
          name='name'
          placeholder='Pie Name' />
        <input
          type='text'
          name='flavor'
          placeholder='Flavor' />
        <input
          type='number'
          name='price'
          placeholder='Price of Pie' />
        <input 
          type='number'
          name='quantity'
          placeholder='Quantity'/>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;