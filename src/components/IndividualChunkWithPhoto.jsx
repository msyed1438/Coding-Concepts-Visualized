import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from 'react-bootstrap/Popover';

class IndividualChunkWithPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingShadow: false
    }

  }
  render() {
    const popover = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">Image concept</Popover.Title>
        <Popover.Content>
          <img className="popup" src={this.props.individualChunkWithPhoto.imgUrl || "https://media.giphy.com/media/YGIpIZjgxL68w/giphy.gif"} />
        </Popover.Content>
      </Popover>
    );


    return (

      <OverlayTrigger
        placement="right"
        delay={{ show: 1, hide: 20 }}
        overlay={popover}
        className="snippet"
      >
        <SyntaxHighlighter language="javascript" style={tomorrowNight} className="individual-chunk-with-photo">
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

