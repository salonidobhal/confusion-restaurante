import React, { Component } from 'react'
import Menu from './MenuComponentNew';
import { DISHES } from '../shared/dishes';
import DishDetailComponents from './DishDetailComponents';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

export default class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };

    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {

        const HomePage = () => {
            return (
                <Home
                />
            );
        }

        const check = this.state.selectedDish !== null ?
            <DishDetailComponents selected={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            :
            <div></div>

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />} />
                </Switch>
                <Footer />
            </div>
        );
    }

}
