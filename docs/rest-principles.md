# REST principles

Representational State Transfer, or just REST, is an architectural style for
distributed hypermedia systems. The tag RESTful is given to services that
satisfy all REST principles.

1. [Uniform interface](#uniform-interface)
1. [Client-server](#client-server)
1. [Stateless](#stateless)
1. [Cacheable](#cacheable)
1. [Layered system](#layered-system)
1. [Code on demand](#code-on-demand)

* [References](#references)

## Uniform interface

The communication between client and server must be standardized, regardless of
the client or the server's internal structure. In other words, the structure
of the requests and responses must be to follow a pattern.

In this project JSON is the pattern, used as text format to transport data between
client and server. In addition to HTTP Request Methods, that it is used to define
the purpose of the endpoints.

## Client-server

Client and server have to be separated, where the client is responsible for the
User Interface (IU) and request formatting, while the server is responsibility
for the data storage and business logic.

It allows that the client and server can evolve in an independent way, what easily
them development and maintain. This project does not have a UI and it will not
have.

## Stateless

Server must not store any data related to user. All information sent in the
request must be discarded after the task end.

This prevents memory problems and easily the scalable of the calls; the client-side
must be responsibility to store these information.

## Cacheable

The server responses have to be associated to client's request and cacheable temporarily,
then returned eveny time the specify client request it. After the end of time, the cached
must expire, then a new request will generate a new result, that it will stored in the
cache too.

It is a good practice to optimize the server (speed and consumption of resources), as it
improve the User eXprerience (UX).

## Layered system

The project parts have to be ordered in a hierarchical layer format, of way enforce their
security and separate the responsibilities of the project chunks. This makes it easier to
maintain, develop and scale the project.

A good example about this is the
[MVC Pattern](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller),
it that is used by this project.

## Code on demand
###### Optional

Server can send executable codes to users, it allows that the IU functionalities can be
expanded with flexibility. JavaScript code is commonly used to do this.

This project will not provide executable chunks, only text information will be sent.

### References:

* [RESTful API: Whats is REST?](https://restfulapi.net/)
* [The Knowledge Academy: What is a REST API?](https://www.theknowledgeacademy.com/blog/what-is-a-rest-api/)
* [Wikipedia: RESTful API](https://en.wikipedia.org/wiki/Overview_of_RESTful_API_Description_Languages)
