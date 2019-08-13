import React, { Component } from 'react';
import FileFetcher from './FileFetcher';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowingFetcher: true,
            codeSnippets: []
        }
    }


    
    render() {
        if (this.state.isShowingFetcher) {
            return (
                <FileFetcher />
            );
        }


    }
}

export default App;