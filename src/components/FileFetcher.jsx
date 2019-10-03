import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import axios from 'axios';
import CodingSnippets from './CodingSnippets';

class FileFetcher extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formInput: '',
            placeholder: 'Paste your link here',
            codeSnippets: [],
            isShowingSnippets: false
        }  
    }

    handleUrlSubmissionButtonClick(event) {
        event.preventDefault();
        let encodedUrl = encodeURIComponent(this.state.formInput);
        axios.get(`/jsfile/${encodedUrl}`)
            .then(({ data }) => {
                this.setState({
                    codeSnippets: data,
                    isShowingSnippets: true
                }, ()=> {
                    
                });
            })
            .catch((err) => {
                this.setState({
                    placeholder: `Try again! ${err}`
                })
            })

    }


    handleChange(event) {
        this.setState({formInput: event.target.value});
    }

    render() {

        return (
            <Container className="">
                <Jumbotron>
                    <h3> File Fetcher </h3>
                    <p> Here's a file fetcher! Paste in any raw file URL to get it split into lines</p>
                    <p> For example: https://raw.githubusercontent.com/msyed1438/Coding-Concepts-Visualized/master/samples/example.js</p>
                </Jumbotron>
                <Form>
                    <Form.Group controlId="formBasicLink">
                        <Form.Label>Paste your raw file URL here</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder={this.state.placeholder} 
                            onChange={this.handleChange.bind(this)}
                        />
                    </Form.Group>

                    <Button 
                        variant="primary" 
                        type="submit" 
                        onClick={this.handleUrlSubmissionButtonClick.bind(this)} 
                    > Submit! </Button>
                </Form>
                {this.state.isShowingSnippets 
                    ? <CodingSnippets 
                        snippets={this.state.codeSnippets} 
                        onTransitionToChunkSelection={this.props.onTransitionToChunkSelection}
                        /> 
                    : null}
            </Container>
        );

    }
}

export default FileFetcher;