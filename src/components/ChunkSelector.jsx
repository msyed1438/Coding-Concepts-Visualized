import React, { Component } from 'react';

class ChunkSelector extends Component {

    constructor(props) {
        super(props);
        this.state = {
            snippets: []
        }
    }

    render() {
        console.log('These are the props that ChunkSelector component is getting: ', this.props)
        return (
            <div>
                Hello world!
            </div>
        );
    }
}

export default ChunkSelector;