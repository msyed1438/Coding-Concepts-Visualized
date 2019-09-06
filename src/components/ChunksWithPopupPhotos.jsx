import React, { Component } from 'react';
import IndividualChunkWithPhoto from './IndividualChunkWithPhoto';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class ChunksWithPopupPhotos extends Component {
    render() {
        return (
            // <>
            // {this.props.newChunksWithPhotos.map((individualChunkWithPhoto, index) => {
            //     <IndividualChunkWithPhoto 
            //         key = {index}
            //         imgUrl = {individualChunkWithPhoto.imgUrl}
            //         chunk = {individualChunkWithPhoto.chunk}
            //     />
            // })}
            // </>
            <div>
                {/* {this.props.newChunksWithPhotos.map((individualChunkWithPhoto, index) => {
                    <IndividualChunkWithPhoto 
                        key={index}
                        chunk={individualChunkWithPhoto.chunk}
                    />
                })} */}
                {/* These are the props we are getting in this component: {JSON.stringify(this.props.newChunksWithPhotos)} */}
                {/* {this.props.newChunksWithPhotos.map((chunkWithPhoto, index) => {
                    <div key={index}>
                        {index}
                    </div>
                })} */}
                {this.props.newChunksWithPhotos.map((individualChunkWithPhoto, index) => {
                        // return <SyntaxHighlighter language="javascript" style={tomorrowNight} key={index} individualChunkWithPhoto={individualChunkWithPhoto}>{individualChunkWithPhoto.chunk}</SyntaxHighlighter>
                        return <IndividualChunkWithPhoto key={index} individualChunkWithPhoto={individualChunkWithPhoto}/> 
                    })}
            </div>
            
            
        );
    }
}

export default ChunksWithPopupPhotos;