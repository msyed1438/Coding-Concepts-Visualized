import React, { Component } from 'react';
import IndividualChunkWithPhoto from './IndividualChunkWithPhoto';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';


class ChunksWithPopupPhotos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chunksWithPhotos: [],
            description: '',
            author: '',
            title: ''
        }
    }
    render() {
        return (

            
            <div>
                <div className="chunks-with-photos">
                    {this.props.newChunksWithPhotos.map((individualChunkWithPhoto, index) => {
                        return <IndividualChunkWithPhoto key={index} individualChunkWithPhoto={individualChunkWithPhoto}/> 
                    })}
                </div>
                <Jumbotron />
              
              
            </div> //knkbjk
            
            
        );
    }
}

export default ChunksWithPopupPhotos;