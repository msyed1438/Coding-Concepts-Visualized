import React, { Component } from 'react';
import IndividualChunkWithPhoto from './IndividualChunkWithPhoto';
import Jumbotron from 'react-bootstrap/Jumbotron';


class ChunksWithPopupPhotos extends Component {
    render() {
        return (

            
            <div>
                <div className="chunks-with-photos">
                    {this.props.newChunksWithPhotos.map((individualChunkWithPhoto, index) => {
                        return <IndividualChunkWithPhoto key={index} individualChunkWithPhoto={individualChunkWithPhoto}/> 
                    })}
                </div>
            </div>
            
            
        );
    }
}

export default ChunksWithPopupPhotos;