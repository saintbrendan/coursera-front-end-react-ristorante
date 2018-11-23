import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


    function RenderDish({dish}) {
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

    function RenderComments({comments}) {
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

    const  DishDetail = (props) => {
      if (props.dish != null) {
        // const dishSelected = this.renderDish(this.props.dish)
        // const dishComments = this.renderComments(this.props.dish.comments)
        console.log(props.dish)
        console.log(props)
        return (
          <div className="container">
            <div className="row">
              <RenderDish dish={props.dish} />
              <RenderComments comments={props.dish.comments} />
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
