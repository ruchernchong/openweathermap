require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

global.___loader = {
  enqueue: jest.fn()
};

require("jest-fetch-mock").enableMocks();
