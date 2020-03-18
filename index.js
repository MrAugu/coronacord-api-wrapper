const fetch = require("node-fetch");

const setBaseURL = (url) => {
  process.env.CoronaCordApiBase = url;
};

const all = fetch(`${process.env.CoronaCordApiBase}/api/all`).then(r => r.json());
const countries = fetch(`${process.env.CoronaCordApiBase}/api/countries`).then(r => r.json());

module.exports = { setBaseURL, all, countries };
