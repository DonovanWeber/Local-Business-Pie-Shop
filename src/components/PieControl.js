import React from "react";
import PieDetail from "./PieDetail"
import NewPieForm from "./NewPieForm";
import PieList from "./PieList";

class PieControl extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainPieList: [],
      selectedPie: null
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

  handleAddingNewPieToList = (newPie) => {
    const newPieList = this.state.mainPieList.concat(newPie);
    this.setState({
        mainPieList: newPieList,
        formVisibleOnPage: false
    });
  }
  
  handleChangingSelectedPie = (id) => {
    const selectedPie = this.state.mainPieList.filter(ticket => ticket.id === id)[0];
    this.setState({selectedPie: selectedPie})
  }

  handleBuyingPie = (pieToBuy) => {
    
    const selectedPie = this.state.mainPieList.filter(pie => pie.id === pieToBuy)[0];
    if(selectedPie.quantity <= 0){
      return "This Pie is No Longer Available";
    } 
    console.log("quantity", selectedPie.quantity);
    console.log("selectedPie:", selectedPie);
    const boughtPie = (pie) => {
      return {
        ...pie,
        quantity: selectedPie.quantity - 1
      };
    }
    const updatedPie = boughtPie(selectedPie);
    console.log("updatedPie:", updatedPie);
    const editedMainPieList = this.state.mainPieList.filter(pie => pie.id !== this.state.selectedPie.id)
    .concat(updatedPie);
    
    this.setState({
        mainPieList: editedMainPieList,
        selectedPie: null
    });
    
  }





  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    
    if(this.state.selectedPie != null){
      currentlyVisibleState = <PieDetail 
      pie = {this.state.selectedPie}
      onClickingBuy = {this.handleBuyingPie} />
      buttonText="Return to Pie List"
    } else if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewPieForm 
        onNewPieCreation = {this.handleAddingNewPieToList} />
        buttonText="Return to Pie List";
    } else {
      currentlyVisibleState = <PieList 
        pieList = {this.state.mainPieList}
        onPieSelection= {this.handleChangingSelectedPie} />
        buttonText = "Add a Pie!";
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