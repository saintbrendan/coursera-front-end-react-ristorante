import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
      if (dish != null) {
        return(
          <div key={dish.id} className="col-12 col-md-5 m-1">
            <Card>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <h4 className="text-left">{dish.name}</h4>
              <p className="text-left">{dish.description}</p>
            </Card>
          </div>
        );
      } else {
        return (
          <div></div>
        );
      }
    }

    render() {
      return this.renderDish(this.props.dish)
    }
}

export default DishDetail;
