var client = require("../models/client");

exports.getClient = async function (query, page, limit) {
  try {
    var clients = await client.find(query);
    return clients;
  } catch (e) {
    throw Error("Error while Paginating clients");
  }
};
exports.getClientByid = async function (id) {
  try {
    var content = await client.findById(id);
    return content;
  } catch (e) {
    throw Error("Error while finding");
  }
};
exports.addNewClient = async function (document) {
  try {
    var content = await client.create(document);
    return content;
  } catch (e) {
    throw Error("Error while creating new client");
  }
};
/* 
exports.removeFaq = async function (id) {
  try {
    var content = await faq.findByIdAndDelete(id);
    return content;
  } catch (e) {
    throw Error("Error while deleting");
  }
};

exports.updateFaq = async function (id, data) {
  try {
    var content = await faq.findByIdAndUpdate(id, data);
    return content;
  } catch (e) {
    throw Error("Error while updating");
  }
};
 */