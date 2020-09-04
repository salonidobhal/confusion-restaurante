import React, { Component } from 'react';
import { Card, CardBody, CardText, CardImg, CardTitle } from 'reactstrap';

export default class DishDetailComponents extends Component {

    constructor(props) {
        super(props);

        this.renderDish = this.renderDish.bind(this);
        this.renderComments = this.renderComments.bind(this);
    }

    renderDish(selectedDish) {

        if (selectedDish === null) {
            return (
                <div></div>
            )
        }
        else {
            return (
                <Card>
                    <CardImg width="100%" src={selectedDish.image} alt={selectedDish.name}>
                    </CardImg>
                    <CardBody>
                        <CardTitle>{selectedDish.name}</CardTitle>
                        <CardText>{selectedDish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
    }

    renderComments(dish) {
        var commentList;
        if (dish === null) {
            return (
                <div></div>
            )
        }
        else {
            if (dish.comments !== null) {
                commentList = dish.comments.map((com) => {
                    return (
                        <div key={com.id}>
                            <ul className="list-unstyled ">
                                <li>{com.comment}</li>
                                <li className=" blockquote-footer">{com.author},{com.date}</li>
                            </ul>
                        </div>)
                });
            }


            return (
                <div>
                    {commentList}
                </div>
            );
        }
    }

    render() {
        const selected_dish = this.props.selected;
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(selected_dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {this.renderComments(selected_dish)}
                        
                    </div>
                </div>
            </React.Fragment>


        );
    }
}
