import React, { Component } from 'react'
import Menu from './MenuComponentNew';
import { DISHES } from '../shared/dishes';
import DishDetailComponents from './DishDetailComponents';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

export default class MainComponent extends Component {
    constructor(props){
        super(props);
        this.state={
          dishes: DISHES,
          selectedDish: null
        };
        
      }

      onDishSelect(dishId) {
        this.setState({ selectedDish: dishId});
      } 

      render() {
          const check= this.state.selectedDish!==null?
          <DishDetailComponents selected={this.state.dishes.filter((dish)=>dish.id === this.state.selectedDish)[0]}/>
          :
          <div></div>

        return (
          <div>
            <Header/>
            <Menu  dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
            {check}
            <Footer/>
            </div>
        );
      }
    
}
