import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

class ChunkSelector extends Component {

    constructor(props) {
        super(props);
        this.state = {
            snippets: [],
            starting: 'First part of chunk'
        }
    }

    componentDidMount() {
        this.setState({
            snippets: this.props.codeSnippets
        })
    }

    render() {
        console.log('These are the props that ChunkSelector component is getting: ', this.props)
        return (
            <Container>
                <h4>Please group your lines of code!</h4>  
                {this.state.snippets.map((snippet, index) => {
                    return (<Row key={index}><pre>{snippet}</pre> <Button>{this.state.starting}</Button> </Row>)
                })}
            </Container>
        );
    }
}

export default ChunkSelector;