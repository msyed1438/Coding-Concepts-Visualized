import React, { Component } from 'react';
import FileFetcher from './FileFetcher';
import ChunkSelector from './ChunkSelector';
// import ImageUploader from './ImageUploader';
import ChunkPhotoLinker from './ChunkPhotoLinker';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowingFetcher: true,
            isShowingChunkSelection: false,
            isShowingPhotoUploader: false,
            codeSnippets: [],
            newChunkedCodeSnippets: []
        }
        this.handleTransitionToChunkSelection = this.handleTransitionToChunkSelection.bind(this);
        this.handleTransitionToPhotoSelection = this.handleTransitionToPhotoSelection.bind(this);
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
    
    render() {
        
        // return <S3Uploader />
        
        
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
                <ChunkPhotoLinker chunkedSnippets={this.state.newChunkedCodeSnippets}/>
            )
        }

    
    }
}

export default App;