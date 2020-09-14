define({ "api": [
  {
    "type": "post",
    "url": "/login",
    "title": "",
    "group": "Users",
    "name": "loginUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "emial",
            "description": "<p>user must need to provide the email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>user must need to provide the password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body : ",
          "content": "{\n \"email\" : \"abc@testing.com\",\n \"password\" : \"password123\"\n}",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Token",
            "description": "<p>A Json web token to access protected route</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Login Response : ",
          "content": "HTTP/1.1 200Ok\n{\n \"token\" : \"jsontokenhere\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Exampl usage:",
        "content": "curl -i http://localhost:4000/login",
        "type": "curl"
      }
    ],
    "description": "<p>User can login to the system</p>",
    "version": "0.0.0",
    "filename": "controllers/user.controller.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/signup",
    "title": "",
    "group": "Users",
    "name": "signupUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "emial",
            "description": "<p>user must need to provide the email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>user must need to provide the password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body : ",
          "content": "{\n \"email\" : \"abc@testing.com\",\n \"password\" : \"password123\"\n}",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Msg",
            "description": "<p>Signup Successful!</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Signup-Success-Response : ",
          "content": "HTTP/1.1 200Ok\n{\n \"msg\" : \"Signup Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Exampl usage:",
        "content": "curl -i http://localhost:4000/signup",
        "type": "curl"
      }
    ],
    "description": "<p>User can create new account</p>",
    "version": "0.0.0",
    "filename": "controllers/user.controller.js",
    "groupTitle": "Users"
  }
] });
