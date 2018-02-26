AWS Lambda - Notes
---------------------

# Serverless 

## Where to define IAM Roles for Lambdas?

1. Let serverless take care of it
2. Define your role `serverless.yml`  and attach managed policies
3. define your role and policy inside the `serverless.yml`

## Serverless Plugins

### [serverless-python-requirements](https://github.com/UnitedIncome/serverless-python-requirements)

#### Cannot create individually packaged lambdas, only a "fat" zip

One cannot seem to package the lambdas individually, which means all the lambdas share the same deployment package (and libraries)
which may lead to overhead (especially with zipped requirements).
Also this *may prevent deployment of individual functions* using `sls deploy function -f <function-name>`. This seems to be due to different hard restrictions when using CF (~250MB unzipped lambda code) as compared to just updating function code (~60MB; the stack does not neeed to be updated here).

#### Zipping requirements leads to much longer cold-start times

The plugin offers the option for zipping the requirements, which is nice when the dependencies are quite large 
(e.g. scikit-learn, numpy, scipy).  
```yaml
custom:
  pythonRequirements:
    zip: true
```
The option adds a `.requirements.zip` to the deployment package which stays compressed
when the service is deplyoed via CF. However one needs to decompress the requirements during runtime:
```python
try:
    import unzip_requirements
except ImportError:
    pass
```

This adds a **substantial** amount (up to 10 seconds) of warm-up time (the first time a lambda instance is started).
If multiple lambdas are deployed and only one of the functions needs the large dependency package (but the others need some other smaller dependency)
all the lambdas potentially suffer from this overhead.

#### Can you combat long cold-start times with warming-up your lambdas?

Sometimes AWS lambdas behave strangely and might have a delay before processing your data. This becomes apparent if it is user facing (i.e. an API-Gateway integrated to talk to your lambda which should respond to the user). 
Why are lambdas sometimes slow? The first time a lambda is triggered a container instance is started behind the scenes and your code is pre-loaded for execution. After this initial "warm up"-phase the lambda becomes productive member of your cloud infrastructure. Things that impact your lambda warm-up time:
- the runtime environment 
  - NodeJS and Python are usually quicker than JVM or .NET)
- the amount of code deployed 
  - more dependencies means we need more time to load them
  - the need to unzip a `.requirements.zip` as described above is especially time consuming
-
