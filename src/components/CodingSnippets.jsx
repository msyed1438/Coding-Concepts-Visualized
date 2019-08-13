import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

class CodingSnippets extends Component {
    render() {
        
        return (
            <Container>
                <h4>Here's the file that you searched for!</h4>
                {this.props.snippets.map((snippet, index) => {
                    return <Row key={index}>{snippet}</Row>
                })}
            </Container>
        );
    }
}

export default CodingSnippets;

