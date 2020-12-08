/* eslint-disable no-unused-vars */
var os = require("os");

exports.Host = class Host {
  constructor (options) {
    this.options = options || {};
  }

  async find (params) {
    console.log(os.hostname())
    return {
      host: os.hostname(), uptime: os.uptime(), 
    };
  }

  async get (id, params) {
    console.log(os.hostname())
    return {
      id, host: os.hostname()
    };
  }

  async create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    return data;
  }

  async update (id, data, params) {
    return data;
  }

  async patch (id, data, params) {
    return data;
  }

  async remove (id, params) {
    return { id };
  }
};
