
# aws-sam-docker-nodejs-express

<img width="973" alt="Screenshot 2023-09-17 at 20 36 57" src="https://github.com/wprudencio/aws-sam-docker-nodejs-express/assets/743040/62742410-e62f-4123-9ca8-eaa0be8131d1">

This project serves as a boilerplate template for creating serverless applications using AWS SAM, Docker, and Express.js.

----
# Run Locally:

```
cd api
npm i
node run dev
```

# Deployment to AWS Lambda

Before getting started, ensure SAM is properly installed by visiting the [AWS SAM Official Website](https://aws.amazon.com/serverless/sam/).

#### Initial Deployment

1.  **Build the Project**: Run the following command to build your application.
    
    `sam build` 
    
2.  **Deploy the App**: Next, deploy your serverless Express app using the guided mode.
    
    `sam deploy --guided` 
    

#### Subsequent Deployments

`sam build && sam deploy` 

Congratulations! Your Serverless Express application should now be operational on AWS Lambda.
