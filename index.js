const fetch = require("node-fetch");

const all = fetch(`http://localhost:9669/api/all`).then(r => r.json());
const countries = fetch(`http://localhost:9669/api/countries`).then(r => r.json());

module.exports = { all, countries };
