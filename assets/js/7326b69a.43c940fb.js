"use strict";(self.webpackChunkmeta_api_docs=self.webpackChunkmeta_api_docs||[]).push([[1559],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return t?a.createElement(f,i(i({ref:n},l),{},{components:t})):a.createElement(f,i({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1269:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],p={id:"oas-and-meta-api",title:"OpenAPI & Meta-API"},s=void 0,c={unversionedId:"api-connectors/import-api/oas-and-meta-api",id:"api-connectors/import-api/oas-and-meta-api",title:"OpenAPI & Meta-API",description:"Usage of OpenAPI in Meta API",source:"@site/docs/api-connectors/import-api/1-oas-and-meta-api.md",sourceDirName:"api-connectors/import-api",slug:"/api-connectors/import-api/oas-and-meta-api",permalink:"/docs/api-connectors/import-api/oas-and-meta-api",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"oas-and-meta-api",title:"OpenAPI & Meta-API"},sidebar:"mySidebar",previous:{title:"Importing an API",permalink:"/docs/category/importing-an-api"},next:{title:"Create an API on Meta-API",permalink:"/docs/api-connectors/import-api/create-api"}},l={},m=[{value:"Usage of OpenAPI in Meta API",id:"usage-of-openapi-in-meta-api",level:2},{value:"Anatomy and main parts of an OpenAPI Specification file",id:"anatomy-and-main-parts-of-an-openapi-specification-file",level:2},{value:"Example of a Swagger file",id:"example-of-a-swagger-file",level:2}],u={toc:m};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"usage-of-openapi-in-meta-api"},"Usage of OpenAPI in Meta API"),(0,o.kt)("p",null,"Meta API has been created to support any APIs, even the private ones. To achieve this, we rely on ",(0,o.kt)("a",{parentName:"p",href:"https://www.openapis.org/"},"Open API Specifications")," to have a standard and universal support."),(0,o.kt)("p",null,"OpenAPI Specification (OAS) is also known as Swagger, the version 2.0 of this standard."),(0,o.kt)("p",null,"OAS can be written in YAML or JSON"),(0,o.kt)("h2",{id:"anatomy-and-main-parts-of-an-openapi-specification-file"},"Anatomy and main parts of an OpenAPI Specification file"),(0,o.kt)("p",null,"Here is the standard structure of an OpenAPI file: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"openapi"),": The OpenAPI version"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"info"),": Some meta information about this API"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"servers"),": The list of servers"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path"),": the list of paths (endpoints) declared inside the API",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For each path, we can have multiple methods (GET, POST, PATCH, PUT, DELETE) and, for each method, the declaration of security, body schema and the response"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"components"),": Components allow to declare some schemas and to reuse them across the API"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"securitySchemas"),": Schemas to describe supported authentication on this API"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"security"),": A global configuration of security inside this API, referring to a ",(0,o.kt)("inlineCode",{parentName:"li"},"securitySchemas"))),(0,o.kt)("p",null,"OpenAPI is a descriptive standard, so you can have very detailed or a broad description of your API"),(0,o.kt)("h2",{id:"example-of-a-swagger-file"},"Example of a Swagger file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "openapi": "3.0.1",\n  "info": {\n    "title": "Swagger Petstore",\n    "description": "This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.",\n    "termsOfService": "http://swagger.io/terms/",\n    "contact": {\n      "email": "apiteam@swagger.io"\n    },\n    "license": {\n      "name": "Apache 2.0",\n      "url": "http://www.apache.org/licenses/LICENSE-2.0.html"\n    },\n    "version": "1.0.0"\n  },\n  "externalDocs": {\n    "description": "Find out more about Swagger",\n    "url": "http://swagger.io"\n  },\n  "servers": [\n    {\n      "url": "https://petstore.swagger.io/v2"\n    }\n  ],\n  "paths": {\n    "/pet": {\n      "put": {\n        "tags": [\n          "pet"\n        ],\n        "summary": "Update an existing pet",\n        "operationId": "updatePet",\n        "requestBody": {\n          "description": "Pet object that needs to be added to the store",\n          "content": {\n            "application/json": {\n              "schema": {\n                "$ref": "#/components/schemas/Pet"\n              }\n            },\n            "application/xml": {\n              "schema": {\n                "$ref": "#/components/schemas/Pet"\n              }\n            }\n          },\n          "required": true\n        },\n        "responses": {\n          "400": {\n            "description": "Invalid ID supplied",\n            "content": {}\n          },\n          "404": {\n            "description": "Pet not found",\n            "content": {}\n          },\n          "405": {\n            "description": "Validation exception",\n            "content": {}\n          }\n        },\n        "security": [\n          {\n            "petstore_auth": [\n              "write:pets",\n              "read:pets"\n            ]\n          }\n        ],\n        "x-codegen-request-body-name": "body"\n      },\n      "post": {\n        "tags": [\n          "pet"\n        ],\n        "summary": "Add a new pet to the store",\n        "operationId": "addPet",\n        "requestBody": {\n          "description": "Pet object that needs to be added to the store",\n          "content": {\n            "application/json": {\n              "schema": {\n                "$ref": "#/components/schemas/Pet"\n              }\n            },\n            "application/xml": {\n              "schema": {\n                "$ref": "#/components/schemas/Pet"\n              }\n            }\n          },\n          "required": true\n        },\n        "responses": {\n          "405": {\n            "description": "Invalid input",\n            "content": {}\n          }\n        },\n        "security": [\n          {\n            "petstore_auth": [\n              "write:pets",\n              "read:pets"\n            ]\n          }\n        ],\n        "x-codegen-request-body-name": "body"\n      }\n    }\n  },\n  "components": {\n    "schemas": {\n      "Category": {\n        "type": "object",\n        "properties": {\n          "id": {\n            "type": "integer",\n            "format": "int64"\n          },\n          "name": {\n            "type": "string"\n          }\n        },\n        "xml": {\n          "name": "Category"\n        }\n      },\n      "Tag": {\n        "type": "object",\n        "properties": {\n          "id": {\n            "type": "integer",\n            "format": "int64"\n          },\n          "name": {\n            "type": "string"\n          }\n        },\n        "xml": {\n          "name": "Tag"\n        }\n      },\n      "Pet": {\n        "required": [\n          "name",\n          "photoUrls"\n        ],\n        "type": "object",\n        "properties": {\n          "id": {\n            "type": "integer",\n            "format": "int64"\n          },\n          "category": {\n            "$ref": "#/components/schemas/Category"\n          },\n          "name": {\n            "type": "string",\n            "example": "doggie"\n          },\n          "photoUrls": {\n            "type": "array",\n            "xml": {\n              "name": "photoUrl",\n              "wrapped": true\n            },\n            "items": {\n              "type": "string"\n            }\n          },\n          "tags": {\n            "type": "array",\n            "xml": {\n              "name": "tag",\n              "wrapped": true\n            },\n            "items": {\n              "$ref": "#/components/schemas/Tag"\n            }\n          },\n          "status": {\n            "type": "string",\n            "description": "pet status in the store",\n            "enum": [\n              "available",\n              "pending",\n              "sold"\n            ]\n          }\n        },\n        "xml": {\n          "name": "Pet"\n        }\n      }\n    },\n    "securitySchemes": {\n      "petstore_auth": {\n        "type": "oauth2",\n        "flows": {\n          "implicit": {\n            "authorizationUrl": "http://petstore.swagger.io/oauth/dialog",\n            "scopes": {\n              "write:pets": "modify pets in your account",\n              "read:pets": "read your pets"\n            }\n          }\n        }\n      },\n      "api_key": {\n        "type": "apiKey",\n        "name": "api_key",\n        "in": "header"\n      }\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);