import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Highlight from 'react-highlight'


class CodingSnippets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            snippets: []
        }
        this.handleConfirmClick = this.handleConfirmClick.bind(this);
    }

    handleConfirmClick(event) {
        event.preventDefault();
        this.props.onTransitionToChunkSelection(this.props.snippets);
    }  

    componentDidMount() {
        this.setState({
            snippets: this.props.snippets
        })
    }

    render() {
        return (
            <Container>
                <div>
                    <h4>Here's the file that you searched for!</h4>
                    <h6>Would you like to confirm this selection? 
                        <Button 
                            variant="success" 
                            onClick={this.handleConfirmClick.bind(this)}
                        >
                             Confirm 
                        </Button>
                    </h6> 
                    {this.props.snippets.map((snippet, index) => {
                        return <Row key={index}><pre>{snippet}</pre></Row>
                    })}
                </div>
            </Container>
        );
    }
}

export default CodingSnippets;

