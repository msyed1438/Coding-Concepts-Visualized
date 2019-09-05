import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import S3Uploader from './S3Uploader';

class ChunkWithPhotoUpload extends Component {
    render() {
        return (
            <Row className="border justify-content-between">
                <pre>{this.props.chunkWithPhoto.chunk}</pre>
                <S3Uploader
                    index={this.props.index} 
                    handlePhotoUpload={this.props.handlePhotoUpload}
                />
            </Row>
        );
    }
}

export default ChunkWithPhotoUpload;