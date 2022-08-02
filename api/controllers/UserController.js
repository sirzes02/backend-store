/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: async (req, res) => {
    let error = null;
    let status = null;
    let results = null;

    try {
      results = await User.create(req.allParams()).fetch();
      status = "ok";
    } catch (local_error) {
      error = local_error;
      status = "error";
    }

    res.json({ error, status, results });
  },
  get_all: async (_, res) => {
    let error = null;
    let status = null;
    let results = null;

    try {
      results = await User.find();
      status = "ok";
    } catch (local_error) {
      error = local_error;
      status = "error";
    }

    res.json({ error, status, results });
  },
};
