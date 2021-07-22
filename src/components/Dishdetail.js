import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';
    import {MONTHS} from '../shared/months';

class Dishdetail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const comment = Array.isArray(this.props.selectedDish.comments) ? this.props.selectedDish.comments.map((c) => {
            const d = new Date(c.date);
            return (
            <div key={c.id}>
                <div>{c.comment}</div>
                <div>-- {c.author}, {MONTHS[d.getMonth()]},{d.getDate()}, {d.getFullYear()}</div>
            </div>
            );
        }) : <div></div>;
        return (
        <div className="row">
                <div  className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                    <CardBody>
                      <CardTitle>{this.props.selectedDish.name}</CardTitle>
                      <CardText>{this.props.selectedDish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
                <div  className="col-12 col-md-5 m-1">
                <div>
                    <h4>Comments</h4>
                    <div>{comment}</div>
                </div>
                </div>
        </div>
        )
        
    }
}

export default Dishdetail;