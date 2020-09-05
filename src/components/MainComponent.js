import React, { Component } from 'react'
import Menu from './MenuComponentNew';
import { DISHES } from '../shared/dishes';
import DishDetailComponents from './DishDetailComponents';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './ContactComponent';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';


export default class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };

    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }
    
   

    render() {

        const HomePage = () => {
            return (
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]} />
            );
        }

        const DishWithId = ({match}) => {
            return(
                <DishDetailComponents selected={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                  comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
            );
          };

        const check = this.state.selectedDish !== null ?
            <DishDetailComponents selected={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            :
            <div></div>

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />} />
                    <Route exact path='/contactus' component={Contact} />
                </Switch>
                <Footer />
            </div>
        );
    }

}
