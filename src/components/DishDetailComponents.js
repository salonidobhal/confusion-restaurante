import React from 'react';
import { Card, CardBody, CardText, CardImg, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderDish({ dish }) {

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

function RenderComments({ comments }) {
    var commentList;
    /*if (dish === null) {
        return (
            <div></div>
        )
    }
    else {*/
        if (comments !== null) {
            commentList = comments.map((com) => {
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
//}

const DishDetailComponents = (props) => {

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.selected.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.selected.name}</h3>
                        <hr />
                    </div>
                    </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.selected} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <RenderComments comments={props.comments} />

                    </div>
                </div>
            </div>

        </React.Fragment>


    );
}
export default DishDetailComponents;
