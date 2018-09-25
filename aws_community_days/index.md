# Smart Cat(egorization)

<h4 style="color:#516188">Building a serverless multi-class document classification service using AWS Lambda</h4>

<div style="text-align:right">
<small>Benjamin Weigel</small>
</div>
<div style="text-align:right;color:#516188">
<small>
AWS Community Day - Frankfurt, 26.-27.09.2018
</small>
</div>

---

### Who am I?

- biochemist
- Data Engineer in dNa-Team at Europace AG for the last 2 years
- experiences in serverless architectures:
    - etl-pipelines
    - reporting-services
    - serverless machine-learning services

.>>

<iframe width="1280px" height="720px" data-src="https://www.europace.de/"></iframe>

---

### Our business

<img src="images/logo.gif">

.>>

#### The house of your dreams ...

<img src="images/neuschwanstein.jpg">


.>>

#### Knowing you can afford it ...

<img src="images/happy.gif" style="width:150%;">


---

### Our usecase

<img src="images/paperwork.jpg">

.>>

#### Getting some paperwork ...

<img src="images/oh_no.gif">

.>>

#### Manually ordering tons of paperwork ...

<img src="images/oh_noes.gif">


---

#### How to start a machine learning project

<div>
<span class="image"  style="padding-top: 0px; padding-bottom: 0px">
<img src="images/datascientist.jpg" width="80%" >
</span> 
<div  style="padding-top: 0px; padding-bottom: 0px">&darr;</div><p>
<span class="image">
<img src="images/brain_ret.png"  width="280">
</span>

</div>


.>>

#### Ok. We have this model:

<img src="images/brain_ret.png"  width="280">

#### But, how to we put it into production?

.>>

#### serverless!

<div class="stretch"  >
<img  src="images/lambda.png">
</div>

---

### (Optional) Intro to AWS Lambda ?! 

<img src="images/aws_lambda_workflow.png">

.>>

### What is AWS Lambda

- function-as-a-service (FaaS)
- runs your Python, NodeJs, JVM, .NET or Go Code
- no need for clusters, servers or containers
- no need to think about scaling 
- don't pay for idle
- built-in fault tolerance (e.g. dead letter queues)
- synchronous, asynchronous and stream based execution

---

**SmartCat(egorization)**

<div style="background:#ffffff; height:550px">
<img src="images/smartcat_workflow.svg" style="background:#ffffff">
</div>


---

### Which problems we encountered...

<div style="text-align:left;color:#516188">
...and how we solved them
</div>


---

### Problem 1
#### There is soo much stuff to do for a deployment ...

- creating a lambda function
    - and roles/policies
    - and event/triggering resources (e.g. SNS-Topics)
    - and event-subscriptions/triggers
- zipping your sources
- uploading your sources to s3


&rarr; **Don't do it yourself** and try reinventing the wheel 

.>>

#### Instead: 

Use something that already exists ...

<img src="images/lambda_tools.png">

---

### Serverless Framework

<div style="height:450px">
    <img src="images/sls_1.png">
</div>
<div style="height:100px">
    <img src="images/sls_2.png">
</div>

.>>

<img src="images/sls_python_requirements.png">

#### Perks

- cross-compilation (for binary dependecies)
- tons of configurable features

.>>

#### `serverless.yml`
```yaml
service: myService

provider:
  name: aws
  runtime: python3.6
  memorySize: 512
  timeout: 10 

custom:
  pythonRequirements:
    dockerizePip: true

functions:
  hello:
    handler: main.hello 
    name: ${self:provider.stage}-helloWorld 
    reservedConcurrency: 5 
```


---

### Problem 2
#### Large deployment-artifacts


- some libraries are large (e.g. Python ML-Libraries)
- &rarr; potentially too large for deployment:
    - hard limit of 250 MB for unzipped artifact
    - 50 MB (zipped) limit, when updating code for a single function


.>>

<div style="text-align:left; font-size:80%">
**Solution 1:** excluding tests & stripping libraries (`*.so`-files)<br>
&rarr; Example: Function with numpy, scipy and sklearn dependencies
</div>

```yaml
# serverless.yml
custom:
  pythonRequirements:
    slim: true
```

<img src="images/serverless_fat_slim_compare.png", height>

.>>

<div style="text-align:left; font-size:80%">
**Solution 2:** zip-in-zip and extract at runtime<br>
</div>

```yaml
custom:
  pythonRequirements:
    zip: true
```

```python
try:
  import unzip_requirements
except ImportError:
  pass
```


.>>

#### You might also try...

- load dependencies from s3
- customize your libraries (remove stuff you don't use)

---

### Problem 3
#### Long (cold) start-times

- linked to the size of the artifact
- language of choice
- VPC
- and what you have to do in advance to your logic

.>>

#### Influence of artifact size on cold-start times

<div style="height:500px">
<img src="images/cold_start_times.svg">
</div>


.>>

#### Influence of language/memory on cold-start times

<div style="height:450px">
<img src="images/lambda_coldstart_language.png">
</div>

<small>
https://read.acloud.guru/does-coding-language-memory-or-package-size-affect-cold-starts-of-aws-lambda-a15e26d12c76
</small>

.>>

<div style="text-align:left; font-size:80%">
**Solution:** 
</div>

- use another runtime
- smaller artifact &rarr; strip away everything unnecessary
- more Memory (hence CPU power) for Lambda
- avoid Lambdas in VPCs   
- preemptive Lambda warm-ups
- avoid multiple initialization / authentication calls during container uptime
    - keep connections open
    - use singletons and global/module state when possible 


---

<div style="text-align:left">

<h2> Thank you </h2>

<b>Stay in touch</b>

<p>
[www.github.com/bweigel](https://www.github.com/bweigel)<br>
[www.linkedin.com/in/weigelb](https://www.linkedin.com/in/weigelb)
</p>

</div>

---

#### Why not use (cascading) S3-triggers?

- only one trigger per Bucket
- needed to include some metadata in the messages (page number, to know when we are done)
