# Deploying a ML Service to AWS Lambda

At the end of this post we will have deployed a serverless machine learning service using AWS Lambda. We will have access to this service through an endpoint that talks to our lambda via AWS Api Gateway's proxy integration.

## What you will need to work along

- AWS account with programmatic access (*Access-Key-Id* and *Secret-Access-Key*)
- Python 3.6
- NodeJS and npm installed 

## Building & deploying the model

TODO

## Building & deploying the service

Now that we have a serialized model we need a service that takes this model and uses it to call the models `predict()`-method on our input data. Furthermore, we need a way to tell our service what the input data is.
We will use AWS Lambda to take care of the first part (calling `model.predict(X)` given some input `X`) and let AWS ApiGateway handle the passing of the input data, which our users will supply via a `POST`-method to our ApiGateway endpoint.

**main.py**
```python
def get_model():
    ... S3 | dynamoDB
    return model
        
MODEL = get_model()

def get_input_data_from_event(event):
    ...
    return data
    
def predict_from_event(event):
    data = get_input_data_from_event(event)
    return MODEL.predict(data)
     

def create_response(result):
    return {"body": result,
            "statusCode": 200,                
            "isBase64Encoded": False}
                       
def lambda_handler(event, context):
    result = predict_from_event(event)
    return create_response(result)
```

### Fetching the model from S3

TODO

### Extracting the input data from ApiGateway proxy event

TODO

### Predicting a result

TODO

### Unsing the result to create a valid proxy response

TODO
