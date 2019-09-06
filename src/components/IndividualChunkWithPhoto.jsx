import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

class IndividualChunkWithPhoto extends Component {
  render() {
      
    const imagePopup = () => {
      return <img src={this.props.individualChunkWithPhoto.imgUrl} />;
    };


    return (
      // <SyntaxHighlighter language="javascript" style={tomorrowNight}>
      //     {codeString}
      // </SyntaxHighlighter>
      <OverlayTrigger
        placement="auto"
        delay={{ show: 250, hide: 400 }}
        overlay={imagePopup}
      >
        <SyntaxHighlighter language="javascript" style={tomorrowNight}>
          {this.props.individualChunkWithPhoto.chunk}
        </SyntaxHighlighter>
      </OverlayTrigger>
    );
  }
}

export default IndividualChunkWithPhoto;

// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

// const SnippetWithPictureOnMouseHover = (props) => {

//     const imagePopup = (imgUrl = 'https://i.imgur.com/sKaBCwf.png') => {
//         return (<img src= {imgUrl} /> )
//     };

//     return (
//         <OverlayTrigger
//             placement="right-start"
//             delay={{ show: 250, hide: 400 }}
//             overlay={imagePopup}
//         >
//             <SyntaxHighlighter language="javascript" style={tomorrowNight}>
//               {props.}
//             </SyntaxHighlighter>
//         </OverlayTrigger>
//     )

// };

// export default SnippetWithPictureOnMouseHover;

// const Component = () => {
//   const codeString = '(num) => num + 1';
//   return (
//     <SyntaxHighlighter language="javascript" style={tomorrowNight}>
//       {codeString}
//     </SyntaxHighlighter>
//   );
// };
