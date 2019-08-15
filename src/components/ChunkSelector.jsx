import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

class ChunkSelector extends Component {

    constructor(props) {
        super(props);
        this.state = {
            snippets: [],
            isPickingInitialPartOfChunk: true,
            firstIndexOfChunk: null,
            lastIndexOChunk: null
        }
    }

    componentDidMount() {
        this.setState({
            snippets: this.props.codeSnippets
        })
    }

    handleClick(event) {
        event.preventDefault();
        this.setState({
            isPickingInitialPartOfChunk: !(this.state.isPickingInitialPartOfChunk)
        }, () => {
            if (!this.state.isPickingInitialPartOfChunk) {
                
            }
        });
    }

    render() {
        console.log('These are the props that ChunkSelector component is getting: ', this.props)
        return (
            <Container>
                <h4>Please group your lines of code!</h4>  
                {this.state.snippets.map((snippet, index) => {
                    return (
                    <Row 
                        key={index} 
                        id={index} 
                        className="border justify-content-between"
                    > 
                        <pre>{snippet}</pre> <Button onClick={this.handleClick.bind(this)}>{this.state.isPickingInitialPartOfChunk ? 'First part of chunk' : 'Last part of chunk'}</Button> 
                    </Row>
                    )
                })}
            </Container>
        );
    }
}

export default ChunkSelector;