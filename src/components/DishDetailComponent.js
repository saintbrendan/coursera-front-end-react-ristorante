import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        return(
          <div key={dish.id} className="col-12 col-md-5 m-1">
            <Card>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <h4 className="text-left">{dish.name}</h4>
              <p className="text-left">{dish.description}</p>
            </Card>
          </div>
        );
    }

    renderComments(comments) {
      const commentsRendered = comments.map((comment) => {
        const commentDate = new Date(comment.date)
        const dateMonDdYYYY = commentDate.toLocaleDateString('us-EN', {  year: 'numeric', month: 'short', day: '2-digit' })
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

    render() {
      if (this.props.dish != null) {
        const dishSelected = this.renderDish(this.props.dish)
        const dishComments = this.renderComments(this.props.dish.comments)
        return (
          <div className="row">
            {dishSelected}
            {dishComments}
          </div>
        );
      } else {
        return (
          <div></div>
        );
      }
    }
}

export default DishDetail;
