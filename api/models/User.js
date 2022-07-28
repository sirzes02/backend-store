/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const bcrypt = require("bcrypt");

module.exports = {
  tableName: "l001_users",
  attributes: {
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    id: {
      type: "number",
      columnName: "c001_rowid",
      unique: true,
      autoIncrement: true,
    },
    c001_email: { type: "string", required: true, unique: true, isEmail: true },
    c001_password: { type: "string", required: true, unique: true },
    c001_notes: { type: "string", allowNull: true },
    c001_created_date: {
      type: "number",
      autoCreatedAt: true,
    },
    c001_updated_date: {
      type: "number",
      autoUpdatedAt: true,
    },
    c001_is_active: { type: "boolean", defaultsTo: true },
    c001_creator_user: { type: "string", allowNull: true, defaultsTo: "Admin" },
    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
  },
  encrypt_password: async (c001_password) => {
    const salt = await bcrypt.genSalt(10);

    return await bcrypt.hash(c001_password, salt);
  },
  customToJSON: function () {
    return _.omit(this, ["c001_password"]);
  },
};
