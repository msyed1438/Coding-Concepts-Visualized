import React, { Component } from 'react';
import S3Uploader from './S3Uploader';

class ChunkPhotoLinker extends Component {
    render() {
        return (
            <div>
                Hello world! Here's all the props that we have: {JSON.stringify(this.props)}
            </div>
        );
    }
}

export default ChunkPhotoLinker;