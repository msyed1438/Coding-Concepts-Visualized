import React, { Component } from 'react';
import IndividualChunkWithPhoto from './IndividualChunkWithPhoto';
import Jumbotron from 'react-bootstrap/Jumbotron';


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
                {/* <form>
                    First name:<br>
                    <input type="text" name="firstname"/><br>
                    Last name:<br>
                    <input type="text" name="lastname"/>
                </form> */}
                <form>
                    <input type="text" name="title" value="title"/>
                    <input type="text" name="description" />
                    <input type="text" name="author" />
                </form>
            </div>
            
            
        );
    }
}

export default ChunksWithPopupPhotos;