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

  handlingBuyingPie = (id) => {
    const selectedPie = this.state.mainPieList.filter
  }





  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    
    if(this.state.selectedPie != null){
      currentlyVisibleState = <PieDetail 
      pie = {this.state.selectedPie}
      onClickingBuy = {this.handlingBuyingPie} />
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