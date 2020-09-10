import React, { Component } from 'react'
import Menu from './MenuComponentNew';
import DishDetailComponents from './DishDetailComponents';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import AboutUs from './AboutUs';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Contact from './ContactComponent';
import { connect } from 'react-redux';
import { addComment, fetchDishes } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';


const mapStateToProps = state => {
    return{
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = dispatch => ({
    addComment: (dishId, rating, author, comment) =>
     dispatch(addComment(dishId, rating, author, comment)),
     fetchDishes: () => {dispatch(fetchDishes())},
     resetFeedbackForm: () => {dispatch(actions.reset('feedback'))} //form will be called feedback

});



class MainComponent extends Component {
    constructor(props) {
        super(props);

    }

    /*onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }*/
    componentDidMount(){
        this.props.fetchDishes();
    }
   

    render() {

        const HomePage = () => {
            return (
                <Home
                   // dish={this.props.dishes.filter((dish) => dish.featured)[0]} //before redux and redux-thunk
                   dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]} 
                   dishesLoading= {this.props.dishes.isLoading}
                   dishesErrMess = {this.props.dishes.errMess}

                   promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]} />
            );
        }

        const DishWithId = ({match}) => {
            return(
                <DishDetailComponents selected={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                isLoading= {this.props.dishes.isLoading}
                errMess = {this.props.dishes.errMess}
 
                  comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
                  addComment = {this.props.addComment} />
            );
          };

        /*const check = this.state.selectedDish !== null ?
            <DishDetailComponents selected={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            :
            <div></div>*/

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />} />
                    <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>} />
                    <Route exact path='/aboutus' component={()=> <AboutUs leaders={this.props.leaders}/>} />
                </Switch>
                <Footer />
            </div>
        );
    }

}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));