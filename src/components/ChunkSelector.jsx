import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Chunk from './Chunk';


class ChunkSelector extends Component {

    constructor(props) {
        super(props);
        this.state = {
            originalSnippets: [],
            snippets: [],
            isPickingInitialPartOfChunk: true,
            firstIndexOfChunk: null,
            lastIndexOfChunk: null
        };
        this.reset = this.reset.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
        this.handleChunkCreation = this.handleChunkCreation.bind(this);
        this.handleChunkClick = this.handleChunkClick.bind(this);
        this.handleConfirmClick = this.handleConfirmClick.bind(this);

    }

    reset() {
        this.setState({
            snippets: this.state.originalSnippets
        });
    }

    handleResetClick(event) {
        event.preventDefault();
        this.reset();
    }

    componentDidMount() {
        this.setState({
            originalSnippets: this.props.codeSnippets,
            snippets: this.props.codeSnippets
        });
    }

    

    handleChunkClick(index) {
        if (this.state.isPickingInitialPartOfChunk) {
            this.setState({
                isPickingInitialPartOfChunk: !(this.state.isPickingInitialPartOfChunk),
                firstIndexOfChunk: index
            })
        } else {
            this.setState({
                isPickingInitialPartOfChunk: !(this.state.isPickingInitialPartOfChunk),
                lastIndexOfChunk: index
            }, () => {this.handleChunkCreation(this.state.firstIndexOfChunk, this.state.lastIndexOfChunk)});
        }
    }

    handleConfirmClick(event) {
        event.preventDefault();
        this.props.onTransitionToPhotoSelection(this.state.snippets);
    }


    handleChunkCreation(startIndex, endIndex) {
        let newChunks = this.state.snippets.slice();
        let lengthOfChunkToBeDeleted = (endIndex - startIndex) + 1;
        let chunkToInsert = newChunks.slice(startIndex, endIndex + 1).join('\n');
        newChunks.splice(startIndex, lengthOfChunkToBeDeleted, chunkToInsert);
        
        this.setState({
            snippets: newChunks,
            startIndex: null,
            endIndex: null
        })
    }   

    render() {
        return (
            
            <Container className="chunk-selector">
                <h4>Group your lines of code!</h4> 
                <p> Reset selections? <Button variant='warning' onClick={this.handleResetClick}>Reset</Button></p>
                {this.state.snippets.map((snippet, index) => {
                    return (
                        <Chunk 
                            key={index}
                            id={index}
                            className="border justify-content-between chunk-selection-snippets"
                            snippet={snippet}
                            isPickingInitialPartOfChunk={this.state.isPickingInitialPartOfChunk}
                            handleChunkClick={this.handleChunkClick}
                        />
                    )
                })}
                <Button variant="warning" onClick={this.handleConfirmClick}> Confirm your chunk selections </Button>
            </Container>
        );
    }
}

export default ChunkSelector;