# Automatic Scheduler for Lambda Invocations

## The application
This application is made to make it possible to reproduce the study and fetch data in the same way, without having to manually invoke the Lambda functions at the specific times. This gives us a more reliable and precise result, that can be used to compare data over time, and also compare it with previous studies made with this application. 

#### *WARNING*
Do not modify the index.js file, it's made to reproduce the study in the same way, meaning that we invoke the Lambda functions on the same every day, to give us the same prerequisites when reproducing the study. The only thing that we modify is the target and url in the YAML file, with description on how to do it in the installation instructions below.

## Installation instructions
This guide assumes that the user are familiar with a Node.js environment.

### Configuring YAML
Each Use Case is represented with a .yml file containing a `target` that you replace with the root URL to your specific Lambda function that shall be invoked. The `url` contains the endpoint that matches the endpoints, for example "/serverless-express-routing".

```YML
config:
  target: 'LAMBDA ROOT URL'
  phases:
    - duration: 0.001
      arrivalRate: 10000
scenarios:
  - flow:
    - get:
        url: "/endpoint"
```

### Installing dependencies
Within the `automatic-scheduler-lambda-invocation` folder run `npm install` to install dependencies.

### The application
Within the `automatic-scheduler-lambda-invocation` folder run `npm start` to start the app.
