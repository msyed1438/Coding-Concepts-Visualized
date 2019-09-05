import React, { Component } from 'react';
import axios from 'axios';

class S3Uploader extends Component {
  constructor(props){
    super(props);
    this.state = {
      success : false,
      url : ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }
  
  handleChange(ev) {
    this.setState({success: false, url : ""});
    
  }
  // Perform the upload
  handleUpload(ev) {
    let file = this.uploadInput.files[0];
    // Split the filename to get the name and type
    let fileParts = this.uploadInput.files[0].name.split('.');
    let fileName = fileParts[0];
    let fileType = fileParts[1];
    console.log("Preparing the upload");
    console.log('Here are the files: ', file);
    axios.post("/sign_s3", {
      fileName : fileName,
      fileType : fileType
    })
    .then(response => {
      console.log('Response from sign_s3 endpoint: ', response)
      var returnData = response.data.data.returnData;
      console.log('This is the returnData: ', returnData);
      var signedRequest = returnData.signedRequest;
      var url = returnData.url;
      this.setState({url: url})
      console.log("Recieved a signed request " + signedRequest);
      
     // Put the fileType in the headers for the upload
      var options = {
        headers: {
          'Content-Type': fileType
          // 'x-amz-acl': 'public-read'
        }
      };
      axios.put(signedRequest,file,options)
      .then(result => {
        this.setState({success: true});
        this.props.handlePhotoUpload(this.props.index, this.state.url);
      })
      .catch(error => {
        alert("ERROR " + JSON.stringify(error));
      })
    })
    .catch(error => {
      alert(JSON.stringify(error));
    })
  }
  
 
  render() {
    const Success_message = () => (
        <text style={{color: 'green'}}>SUCCESSFUL UPLOAD</text>
    )

    return (
      <div className="S3Uploader">
        <div>
          <input onChange={this.handleChange} ref={(ref) => { this.uploadInput = ref; }} type="file"/>
          <button onClick={this.handleUpload} disabled={this.state.success}>{this.state.success ? <Success_message/> : "UPLOAD"}</button>
          {/* {this.state.success ? <Success_message/> : UPLOAD} */}
        </div>
      </div> 
    );
  }
}
export default S3Uploader;