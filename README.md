## test-pyramid
```
Multiple test suites to validate back-end and front-end functionality from a simple project
```
![Test-pyramid2](https://user-images.githubusercontent.com/24611413/67216208-ce477180-f3f0-11e9-9a1d-5b9fe2b06091.jpg)

## Installing the project to Test
```
The project to test consists in a web solution that prodives soccer statistics about the european soccer league
```
## Back-End
```
The back-end consists in a group of APIs that provides soccer statistics information
Below schema describes the basic architecture
```

![back-end-schema](https://user-images.githubusercontent.com/24611413/67214717-36e11f00-f3ee-11e9-82d7-38aa03e99f39.jpg)

* [back-end](https://github.com/mclaure/test-pyramid/tree/master/src/back-end) - For details about how to run the back-end API's 


## Front-End
```
The front-end is an angular application that acts as a search engine that consume the GET /api/player?name={name} API
If any soccer player is found the results are displayed in the page 
```
![front-end](https://user-images.githubusercontent.com/24611413/67206749-49ecf280-f3e0-11e9-95cb-96f086559955.jpg)
* [front-end](https://github.com/mclaure/test-pyramid/tree/master/src/front-end) - For details about how to run the front-end 

---

## Pre-Requisites

1. The back-end server must be running (default port 8000):

![npm-start-back-end](https://user-images.githubusercontent.com/24611413/67206646-13af7300-f3e0-11e9-8474-040a7dc4e94d.jpg)

2. The front-end service must be running (default port 4200):

![front-end-running](https://user-images.githubusercontent.com/24611413/67209810-0d23fa00-f3e6-11e9-8812-2da29c8c6d20.jpg)


## Running the Tests Suites

Following the pyramid-test architecture the tests suites are divided into three groups: Unit Test, Service Test and End-to_end Test

## Unit Test
![unit-test-output](https://user-images.githubusercontent.com/24611413/67208998-8c183300-f3e4-11e9-802c-291e530a4d6a.jpg)

* [unit-test](https://github.com/mclaure/test-pyramid/tree/master/test/unit-test) - For details about how to run the Unit tests 

---

## Service Test
![service-test-output](https://user-images.githubusercontent.com/24611413/67209554-91c24880-f3e5-11e9-81a7-1d160411a342.jpg)

* [service-test](https://github.com/mclaure/test-pyramid/tree/master/test/service-test) - For details about how to run the Service tests

---

## End-to-End Test
![e2e-test](https://user-images.githubusercontent.com/24611413/67210091-7efc4380-f3e6-11e9-8ddd-1746c642fba7.jpg)

* [e2e-test](https://github.com/mclaure/test-pyramid/tree/master/test/e2e-test) - For details about how to run the End-to-End tests

---

## Author

* **Marcelo Claure** - *Initial work*
