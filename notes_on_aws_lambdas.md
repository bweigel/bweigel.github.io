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
