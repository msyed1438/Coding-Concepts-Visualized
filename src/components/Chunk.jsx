import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

class Chunk extends Component {

    handleClick(event) {
        event.preventDefault();
    }

    render() {
        return (
            (
                <Row 
                    key={this.props.index} 
                    id={this.props.index} 
                    className="border justify-content-between"
                > 
                    <pre>{this.props.snippet}</pre> <Button onClick={this.handleClick.bind(this)}>{this.props.isPickingInitialPartOfChunk ? 'First part of chunk' : 'Last part of chunk'}</Button> 
                </Row>                
            )
        );
    }
}

export default Chunk;