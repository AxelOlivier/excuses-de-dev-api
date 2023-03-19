# Project - Back

API in nodeJs

## Installation

Clone the project : https://github.com/AxelOlivier/excuses-de-dev-front.git

```bash
  git clone https://github.com/AxelOlivier/excuses-de-dev-front.git
```

Install the dependencies

```bash
  npm i
```

And you can start project with 

```bash
  nodemon
```

Server run on port 8080, you can change it const PORT line 13 in the index.js

## API Endpoints

All URIs are relative to _https://localhost:8080/_

| Method         | HTTP request      | Description                                        |
| -------------- | ----------------- | -------------------------------------------        |
| **getOneExcusesByID** | **GET** /excuses/:id  | get One Excuse by ID                    |
| **getAllExcuses** | **GET** /excuses | Get all dev excuses as JSON                      |
| **postNewExcuse** | **POST** /excuses | Add new excuse, get all new excuses as response |
