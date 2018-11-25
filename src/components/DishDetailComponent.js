import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({ dish }) {
  return (
    <div key={dish.id} className="col-12 col-md-5 m-1">
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <h4 className="text-left">{dish.name}</h4>
        <p className="text-left">{dish.description}</p>
      </Card>
    </div>
  );
}

function RenderComments({ comments }) {
  const commentsRendered = comments.map((comment) => {
    const commentDate = new Date(comment.date)
    const dateMonDdYYYY = commentDate.toLocaleDateString('us-EN', { year: 'numeric', month: 'short', day: '2-digit' })
    return (
      <li key={comment.id} className="text-left">
        <p>{comment.comment}</p>
        <p>--{comment.author} , {dateMonDdYYYY}</p>
      </li>
    );
  });

  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <h4 className="text-left">Comments</h4>
        <ul className="list-unstyled">
          {commentsRendered}
        </ul>
      </Card>
    </div>
  );
}

const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Contact Us</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments comments={props.comments} />
        </div>
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
}


export default DishDetail;
