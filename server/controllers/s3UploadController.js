const AWS = require('aws-sdk');
const { accessKey, secretKey } = require('../awsConfig.js');

AWS.config.setPromisesDependency(require('bluebird'));
AWS.config.update({
    region: 'us-east-1',
    accessKeyId: accessKey,
    secretAccessKey: secretKey,
    signatureVersion: 'v4'
});

const S3_BUCKET = 'code-concept-photos'
console.log('We got here, also here are the access key:  ', accessKey, ' and the secret key: ', secretKey);


exports.sign_s3 = (req,res) => {
    const s3 = new AWS.S3();  // Create a new instance of S3
    const fileName = req.body.fileName;
    const fileType = req.body.fileType;
  // Set up the payload of what we are sending to the S3 api
    const s3Params = {
      Bucket: S3_BUCKET,
      Key: fileName,
      Expires: 500,
      ContentType: fileType,
      ACL: 'public-read'
    };
  // Make a request to the S3 API to get a signed URL which we can use to upload our file
  s3.getSignedUrl('putObject', s3Params, (err, data) => {
      if(err){
        console.log('There was an error');
        console.log(err);
        res.json({success: false, error: err})
      }
      // Data payload of what we are sending back, the url of the signedRequest and a URL where we can access the content after its saved. 
  const returnData = {
        signedRequest: data,
        url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
      };
      console.log('This is the returnedData from the signedUrl generator: ', returnData);
      // Send it all back
      res.json({success:true, data:{returnData}});
    });
  }
  
