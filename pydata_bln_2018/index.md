# Serverless ML-Models Workshop

<h4 style="color:#888888">Deploying ML-Models to the cloud using AWS lambda</h4>

<div style="text-align:right">
<small>Benjamin Weigel</small>
</div>
<div style="text-align:right;color:#888888">
<small>
PyData Berlin - 06.07.2018
</small>
</div>

---

## Who am I?

- biochemist
- Data Engineer at Europace AG for the last 2 years
**Interests:**
- serverless architecture, functional programming, scala, bayesian stats & methods

.>>

<iframe width="1280px" height="720px" data-src="https://www.europace.de/"></iframe>

---

## Serverless Evolution

<img src="images/serverless_evolution.png">

.>>

### Serverless und ML

- once your model is finished you will want to use it: 
    - show your findings to the world
    - let the world use it 
    - raise productivity    



---

## AWS Lambda 

<img src="images/aws_lambda_workflow.png">

.>>

### What AWS Lambda can do for you

- function-as-a-service (FaaS)
- runs your Python, NodeJs, JVM, .NET or Go Code
- no need for clusters, servers or containers
- no need to think about scaling 
- don't pay for idle
- built-in fault tolerance (e.g. dead letter queues)
- synchronous, asynchronous and stream based execution

.>>

### AWS Lambda Pricing

**Free Tier (every user, every month)**
 - 1 million requests
 - 400 000 GBs of compute time
  

---

## AWS API Gateway

<img src="images/api_gw_call_flow.png">

.>>

### What API Gateway can do for you

- managed throttling  and caching
- usage plans
- authorization / authentication
- DDoS protection
- Swagger support
- request/response data transformation and API mocking

.>>

### API Gateway Pricing

3.7$ per 1 Million API calls (1 Mio./month free in first year)

<section>
	<table>
        <tbody><tr>
            <td><img src="images/api_gw_cost_1.png"></td>
            <td><img src="images/api_gw_cost_2.png"></td>
        </tr></tbody>
    </table>
</section>

.>>

### Define an API

- create and API e.g. **MyCarAPI**
- define resources  
    - `/cars`
- define methoods for a resource `/cars/{carid}`
    - `GET`
    - `POST`
    - `DELETE`    

---

## Serverless Framework

<img src="images/sls_1.png">

.>>

### Why the serverless framework?

- manages packaging & deployment of code    
- easy to use abstraction over cloudformation
    - &rarr; provisioning of infrastructure
    - uses cloudformation behind the scenes
- infrastructure as code &rarr; no click orgies
- maturity &rarr; great community & tooling via plugins
    
<img src="images/sls_2.png">

---

## What we will build today

<div style="background:#ffffff">
<img src="images/architecture.svg" style="background:#ffffff">
</div>

.>>

### Limitations of AWS Lambda & ML

- Memory & CPU Limit in AWS Lambda (3008 MB / 2? vCPUs)
- size of deployment package (max 250MB unzipped)

---

<div style="text-align:left">

<h2> Thank you </h2>

<b>Stay in touch</b>

<p>
[www.github.com/bweigel](https://www.github.com/bweigel)<br>
[www.linkedin.com/in/weigelb](https://www.linkedin.com/in/weigelb)
</p>

</div>