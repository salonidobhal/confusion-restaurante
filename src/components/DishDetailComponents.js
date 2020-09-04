import React, { Component } from 'react';
import { Card, CardBody, CardText, CardImg, CardTitle } from 'reactstrap';



  function RenderDish({dish}) {

        if (dish === null) {
            return (
                <div></div>
            )
        }
        else {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}>
                    </CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
    }

    function RenderComments({dish}) {
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
                                <li className=" blockquote-footer">{com.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(com.date)))} </li>
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

   const DishDetailComponents = (props)=> {
        
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.selected}/>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            <RenderComments dish={props.selected}/>

                        </div>
                    </div>
                </div>

            </React.Fragment>


        );
    }
export default DishDetailComponents;
