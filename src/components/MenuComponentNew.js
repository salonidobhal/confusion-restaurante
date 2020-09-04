import React, { Component } from 'react';
import { Card, CardTitle, CardImg, CardImgOverlay, CardText } from 'reactstrap';
import DishDetailComponents from './DishDetailComponents';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }

        this.onDishSelect = this.onDishSelect.bind(this);


    }

    onDishSelect(dish) {
        this.setState({
            selectedDish: dish
        });
    }




    render() {  
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <div key={dish.id} >
                        <Card onClick={() => {
                            this.onDishSelect(dish);

                        }} >
                            <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                            <CardImgOverlay>
                                <CardTitle>
                                    <strong>{dish.name}</strong>
                                </CardTitle>
                            </CardImgOverlay>
                        </Card>
                    </div>

                </div>
            );
        });


        return (

            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <DishDetailComponents selected={this.state.selectedDish} />
            </div>
        );
    }
}
export default Menu;