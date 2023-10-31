//Lambda function 

// Lambda function" refers to AWS Lambda, which is a serverless compute service
// provided by Amazon. AWS Lambda allows you to run code without provisioning or 
// managing servers.

//Some  Important Term Related to Lambda Function

// 1.Event-Driven: AWS Lambda functions are triggered by specific events, 
// such as changes in an Amazon S3 bucket, updates to a DynamoDB table, incoming 
// API Gateway requests, or custom events generated within other AWS services.

// 2.Serverless: With AWS Lambda, you don't need to worry about provisioning or 
// managing servers. You simply upload your code, and AWS Lambda handles the rest, 
// including scaling, patching, and monitoring.

// 3.Pay-as-You-Go: You're billed based on the number of requests for your functions
//  and the time your code executes. You're not charged when your code is not running.

// 4.Supported Languages: AWS Lambda supports a variety of programming languages, 
// including Node.js, Python, Java, Ruby, C#, PowerShell, and more.

// 5.Integration: Lambda functions can be easily integrated with other AWS services, 
// such as Amazon API Gateway, Amazon S3, Amazon DynamoDB, AWS Step Functions, and more.

Example

exports.handler = async (event) =>{
    const response ={
        statusCode:200,
        body:JSON.stringify("hello from the Lambda")

    }
    return response;
}

