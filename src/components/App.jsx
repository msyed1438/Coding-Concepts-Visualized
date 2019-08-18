import React, { Component } from 'react';
import FileFetcher from './FileFetcher';
import ChunkSelector from './ChunkSelector';
import ImageUploader from './ImageUploader';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowingFetcher: true,
            isShowingChunkSelection: false,
            isShowingPhotoUploader: false,
            codeSnippets: []
        }
        this.handleTransitionToChunkSelection = this.handleTransitionToChunkSelection.bind(this);
    }

    handleTransitionToChunkSelection(data) {
        console.log('On handleTransitionToChunkSelection (called from App.jsx), this is the data', data);
        this.setState({
            isShowingChunkSelection: true,
            isShowingFetcher: false,
            codeSnippets: data
        })
    }
    
    render() {
        
        if (this.state.isShowingFetcher) {
            return (
                <>
                <h1 className="text-center">Coding Visualizer!</h1>
                <FileFetcher 
                    onTransitionToChunkSelection={this.handleTransitionToChunkSelection}
                    handleSnippetsData={this.populateSnippets}    
                />
                </>
            );
        }

        if (this.state.isShowingChunkSelection) {
            return (
                <ChunkSelector codeSnippets={this.state.codeSnippets}/>
            )
        }

        if (this.state.isShowingChunkSelection) {
            return (
                <ImageUploader />
            )
        }
    }
}

export default App;