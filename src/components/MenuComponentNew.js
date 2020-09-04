import React, { Component } from 'react';
import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';


class Menu extends Component { 
    constructor(props){
        super(props);

    }

    render() {  
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <div key={dish.id} >
                        <Card onClick={() => this.props.onClick(dish.id)} >
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
            </div>
        );
    }
}
export default Menu;