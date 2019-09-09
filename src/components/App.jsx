import React, { Component } from 'react';
import FileFetcher from './FileFetcher';
import ChunkSelector from './ChunkSelector';
import ChunkPhotoLinker from './ChunkPhotoLinker';
import ChunksWithPopupPhotos from './ChunksWithPopupPhotos';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowingFetcher: true,
            isShowingChunkSelection: false,
            isShowingPhotoUploader: false,
            isShowingChunksWithPopupPhotos: false,
            codeSnippets: [],
            newChunkedCodeSnippets: [],
            newChunksWithPhotos: []
        }
        this.handleTransitionToChunkSelection = this.handleTransitionToChunkSelection.bind(this);
        this.handleTransitionToPhotoSelection = this.handleTransitionToPhotoSelection.bind(this);
        this.handleTransitionToShowingChunksWithPopupPhotos = this.handleTransitionToShowingChunksWithPopupPhotos.bind(this);
    }

    handleTransitionToChunkSelection(data) {
        this.setState({
            isShowingChunkSelection: true,
            isShowingFetcher: false,
            codeSnippets: data
        })
    }

    handleTransitionToPhotoSelection(data) {
        this.setState({
            newChunkedCodeSnippets: data,
            isShowingChunkSelection: false,
            isShowingPhotoUploader: true,
        })
    }

    handleTransitionToShowingChunksWithPopupPhotos(data) {
        this.setState({
            newChunksWithPhotos: data,
            isShowingPhotoUploader: false,
            isShowingChunksWithPopupPhotos: true
        })
    }
    
    render() {
        // return (<SamplePopup />);
                
        if (this.state.isShowingFetcher) {
            return (
                <>
                <h1 className="text-center">Coding Visualizer!</h1>
                <FileFetcher 
                    onTransitionToChunkSelection={this.handleTransitionToChunkSelection}
                />
                </>
            );
        }

        if (this.state.isShowingChunkSelection) {
            return (
                <ChunkSelector 
                    codeSnippets={this.state.codeSnippets}
                    onTransitionToPhotoSelection={this.handleTransitionToPhotoSelection}
                />
            )
        }

        if (this.state.isShowingPhotoUploader) {
            return (
                <ChunkPhotoLinker 
                    chunkedSnippets={this.state.newChunkedCodeSnippets}
                    onTransitionToShowingChunksWithPopupPhotos={this.handleTransitionToShowingChunksWithPopupPhotos}
                />
            )
        }

        if (this.state.isShowingChunksWithPopupPhotos) {
            return (
                <ChunksWithPopupPhotos 
                    newChunksWithPhotos={this.state.newChunksWithPhotos}
                />
            )
        }

    }
}

export default App;