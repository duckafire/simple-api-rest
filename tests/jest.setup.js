"use strict";

const supertest  = require("supertest");
const { server } = require("../build/server");

const testServer = supertest(server);

module.exports = { testServer };
