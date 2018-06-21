# PyData Berlin 2018

### Deploying ML-Models to the cloud using AWS lambda

<small>Benjamin Weigel, 06.07.2018</small>

---

## AWS API Gateway - Call Flow

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

3.7$ per 1 Million API calls (1 Mio./month free in first 12 months)

<section>
	<h2>Pricing information</h2>
	<table>
        <tbody><tr>
            <td><img src="images/api_gw_cost_1.png"></td>
            <td><img src="images/api_gw_cost_2.png"></td>
        </tr></tbody>
    </table>
</section>

### Define an API

- create and API e.g. **MyCarAPI**
- define resources  
    - `/cars`
- define methoods for a resource `/cars/{carid}`
    - `GET`
    - `POST`
    - `DELETE`    

---

## Serverless Evolution

<img src="images/api_gw_cost_1.png">

.>>

### AWS Lambda
