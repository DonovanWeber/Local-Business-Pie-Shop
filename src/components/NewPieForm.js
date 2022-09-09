import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewPieForm(props){

  function handleNewPieFormSubmission(event) {
    event.preventDefault();
    props.onNewPieCreation({
      name: event.target.name.value,
      flavor: event.target.flavor.value,
      price: parseInt(event.target.price.value),
      quantity: parseInt(event.target.quantity.value),
      id: v4()
    });
  }
  return(
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewPieFormSubmission}
        buttonText="Add Pie!" />
    </React.Fragment>
  )
}

NewPieForm.propTypes = {
  onNewPieCreation: PropTypes.func
};
export default NewPieForm;