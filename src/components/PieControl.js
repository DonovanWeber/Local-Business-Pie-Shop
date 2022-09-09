import React from "react";
import PieDetail from "./PieDetail"

class PieControl extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainPieList: [],
      selectedPie: null,
      editing: false
    }
  }

  handleClick = () => {
    if(this.state.selectedPie != null ){
      this.setState({
        formVisibleOnPage: false,
        selectedPie: null,
        editing: false
      })
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }





  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.selectedPie != null){
      currentlyVisibleState = <PieDetail 
      pie = {this.state.selectedPie}
      onClickingDelete = {this.handleDeletingTicket}
      onClickingEdit = {this.handleEditClick} />
      buttonText="Return to Pie List"
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        {<button onClick ={this.handleClick}>{buttonText}</button>}
      </React.Fragment>
    );
  }
}

export default PieControl;