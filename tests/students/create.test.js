"use strict";

const { StatusCodes } = require("http-status-codes");
const { testServer } = require("../jest.setup.js");

describe("### /students/create", () => {
	const URL = "/students/create";

	it("Wrong body format (array instead object)", async () => {
		const exp = { error: "the body must be an object" };
		const req = [];
		const res = await testServer.post(URL).send(req);

		expect(res.statusCode).toEqual(StatusCodes.BAD_REQUEST);
		expect(res.body).toEqual(exp);
	});

	it("Empty body", async () => {
		const exp =  {
			body: {
				name: "name is a required field",
				birthday: "birthday is a required field",
				classId: "classId is a required field"
			}
		};
		const req = {};
		const res = await testServer.post(URL).send(req);

		expect(res.statusCode).toEqual(StatusCodes.BAD_REQUEST);
		expect(res.body).toEqual(exp);
	});

	it("Invalid values of the proprieties body", async () => {
		const exp = {
			body: {
				name: "name must match the following: \"/^[a-zA-Z]{3}[a-zA-Z ]*$/\"",
				birthday: "birthday must match the following: \"/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/\"",
				classId: "classId must match the following: \"/^[1-3][A-G]$/\""
			}
		};
		const req = {
			name: "?",
			birthday: "?",
			classId: "?"
		};
		const res = await testServer.post(URL).send(req);

		expect(res.statusCode).toEqual(StatusCodes.BAD_REQUEST);
		expect(res.body).toEqual(exp);
	});

	it("Valid body", async () => {
		const exp = { message: "work in progress" };
		const req = {
			name: "Jhon",
			birthday: "2011-10-19",
			classId: "2C"
		};
		const res = await testServer.post(URL).send(req);

		expect(res.statusCode).toEqual(StatusCodes.NOT_IMPLEMENTED);
		expect(res.body).toEqual(exp);
	});

});
