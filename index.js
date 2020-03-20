const fetch = require("node-fetch");

module.exports.all = async () => {
  const res = await fetch(`http://localhost:9669/api/all`).then(r => r.json());
  return res;
}

module.exports.countries = async () => {
  const res = await fetch(`http://localhost:9669/api/countries`).then(r => r.json());
  return res;
};

module.exports.states = async () => {
  const res = await fetch("http://localhost:9669/api/states").then(r => r.json());
  return res;
};
