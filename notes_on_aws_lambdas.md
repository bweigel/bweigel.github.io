# AWS Lambda - Notes

## Serverless Plugins

### [serverless-python-requirements](https://github.com/UnitedIncome/serverless-python-requirements)

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
