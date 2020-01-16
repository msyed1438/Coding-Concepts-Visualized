/* Go to https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html 
to set up your Amazon S3 credentials. If S3 is not working with this app, the 
index.js file needs to be refactored with a new storage option, such as Google Cloud 
Services, OneDrive, DropBox, etc. */

module.exports.S3_BUCKET = '<Name of the S3 bucket goes here>';
module.exports.accessKey = '<Access key from S3 goes here>';
module.exports.secretkey = '<Secret key from S3 goes here>';