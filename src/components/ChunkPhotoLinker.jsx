import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ChunkWithPhotoUpload from './ChunkWithPhotoUpload';


class ChunkPhotoLinker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chunksWithPhotos: []
        }

        this.handlePhotoUpload = this.handlePhotoUpload.bind(this);
        this.handleConfirmClick = this.handleConfirmClick.bind(this);
    }

    componentDidMount() {
        let chunkedSnippetsWithImgUrls = this.props.chunkedSnippets.map((chunkedSnippet) => {
            return (
                {
                    chunk: chunkedSnippet,
                    imgUrl: null,
                }
            )
        });

        this.setState({chunksWithPhotos: chunkedSnippetsWithImgUrls}); 
        /* 
        ========================== EXAMPLE ==================================
        If the props going in were: 

                ['Chunk1', 'Chunk2', 'Chunk3'],    <---- INPUT

        Then the state becomes 
              [ 
                 {chunk: 'Chunk1', imgUrl: null}, 
                 {chunk: 'Chunk2', imgUrl: null},         <------ OUTPUT FOR STATE
                 {chunk: 'Chunk3', imgUrl: null}  
              ] 
        ====================================================================
        */
    }

    handlePhotoUpload(index, imgUrl) {
        let transformedState = this.state.chunksWithPhotos.slice();
        let originalChunkAtIndex = transformedState[index];
        originalChunkAtIndex.imgUrl = imgUrl; 

        this.setState({
            chunksWithPhotos: transformedState
        })
    }

    handleConfirmClick(event) {
        event.preventDefault();
        this.props.onTransitionToShowingChunksWithPopupPhotos(this.state.chunksWithPhotos);
    }

    render() {
        return (
            <Container>
                <h4>Select the images from your device to link with each chunk of code</h4> 
                {this.state.chunksWithPhotos.map((chunkWithPhoto, index) => {
                    return (
                        <ChunkWithPhotoUpload 
                            chunkWithPhoto={chunkWithPhoto}
                            key={index}
                            index={index}
                            handlePhotoUpload={this.handlePhotoUpload}
                        />
                    )
                })}
               <Button variant="warning" onClick={this.handleConfirmClick}> Confirm your photo selections </Button>
            </Container>
        );
    }
}

export default ChunkPhotoLinker;