# Serverless ML-Models Workshop

#### Deploying ML-Models to the cloud using AWS lambda

<small>Benjamin Weigel, PyData Berlin 2018 - 06.07.2018</small>

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

### What Serverless framework can do for you

<img src="images/sls_2.png">
