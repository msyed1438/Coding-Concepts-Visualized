import React, { Component } from 'react';
import IndividualChunkWithPhoto from './IndividualChunkWithPhoto';


class ChunksWithPopupPhotos extends Component {
    render() {
        return (
  
            <div>
                {this.props.newChunksWithPhotos.map((individualChunkWithPhoto, index) => {
                        return <IndividualChunkWithPhoto key={index} individualChunkWithPhoto={individualChunkWithPhoto}/> 
                    })}
            </div>
            
            
        );
    }
}

export default ChunksWithPopupPhotos;