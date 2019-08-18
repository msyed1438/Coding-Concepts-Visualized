import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Chunk from './Chunk';
import Highlight from 'react-highlight'


class ChunkSelector extends Component {

    constructor(props) {
        super(props);
        this.state = {
            originalSnippets: [],
            snippets: [],
            isPickingInitialPartOfChunk: true,
            firstIndexOfChunk: null,
            lastIndexOChunk: null
        }
        this.reset = this.reset.bind(this);
        this.onResetClick = this.onResetClick.bind(this);
        this.handleChunkCreation = this.handleChunkCreation.bind(this);
    }

    reset() {
        this.setState({
            snippets: this.state.originalSnippets
        })
    }

    onResetClick(event) {
        event.preventDefault();
        this.reset();
    }

    componentDidMount() {
        this.setState({
            originalSnippets: this.props.codeSnippets,
            snippets: this.props.codeSnippets
        })
    }

    

    // handleClick() {
    //     this.setState({
    //         isPickingInitialPartOfChunk: !(this.state.isPickingInitialPartOfChunk),
    //         firstIndexOfChunk: null
    //     })
    // }


    handleChunkCreation(startIndex, endIndex, joinBy = '\n') {

        let copyOfOriginalChunks = this.state.snippets.slice();
        let lengthOfChunkToBeDeleted = endIndex - startIndex + 1;
        let chunkToInsert = copyOfOriginalChunks.slice(startIndex, endIndex + 1).join(joinBy);

        copyOfOriginalChunks.splice(startIndex, lengthOfChunkToBeDeleted, chunkToInsert);

        this.setState({
            snippets: copyOfOriginalChunks
        })
    }   

    render() {
        return (
            
            <Container>
                <h4>Group your lines of code!</h4> 
                <p> Reset selections? <Button variant='warning' onClick={this.handleChunkCreation}>Reset</Button></p>

                {this.state.snippets.map((snippet, index) => {
                    return (
                    // <Row 
                    //     key={index} 
                    //     id={index} 
                    //     className="border justify-content-between"
                    // > 
                    //     <pre>{snippet}</pre> <Button onClick={this.handleClick.bind(this)}>{this.state.isPickingInitialPartOfChunk ? 'First part of chunk' : 'Last part of chunk'}</Button> 
                    // </Row> //TODO: Refactor this Row into a new component that sends up the clicked index (via this.props.id)
                        <Chunk 
                            key={index}
                            id={index}
                            className="border justify-content-between"
                            snippet={snippet}
                            isPickingInitialPartOfChunk={this.state.isPickingInitialPartOfChunk}
                        />
                    )
                })}
            </Container>
        );
    }
}

export default ChunkSelector;