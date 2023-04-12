const conn = require("../db/mysqlConn");

module.exports = {
  getAll(req, res) {
    conn.query("SELECT * FROM users", (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Failed to get users",
          error: err
        });
      }

      return res.status(200).json(result);
    });
  },

  getById(req, res) {
    const id = req.params.id;
    conn.query(`SELECT * FROM users WHERE id = ?`, id, (err, result) => {
      if (err) {
        return res.status(500).json({
          message: `Failed to get user with id ${id}`,
          error: err
        });
      } else if (!result.length) {
        return res.status(404).json({
          message: `User with id ${id} not found`
        });
      }

      return res.status(200).json(result[0]);
    });
  },

  insert(req, res) {
    const user = req.body;
    conn.query("INSERT INTO users SET ?", user, (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Failed to insert user",
          error: err
        });
      }

      return res.status(201).json({
        message: "User created successfully",
        user: user
      });
    });
  },

  edit(req, res) {
    const id = req.params.id;
    const { username, email, password } = req.body;
    const sql = `UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?`;
    const values = [username, email, password, id];

    conn.query(sql, values, (err, result) => {
      if (err) {
        return res.status(500).json({
          message: `Failed to update user with id ${id}`,
          error: err
        });
      } else if (!result.affectedRows) {
        return res.status(404).json({
          message: `User with id ${id} not found`
        });
      }

      return res.status(200).json({
        message: `User with id ${id} updated successfully`
      });
    });
  },

  delete(req, res) {
    const id = req.params.id;
    conn.query(`DELETE FROM users WHERE id = ?`, id, (err, result) => {
      if (err) {
        return res.status(500).json({
          message: `Failed to delete user with id ${id}`,
          error: err
        });
      } else if (!result.affectedRows) {
        return res.status(404).json({
          message: `User with id ${id} not found`
        });
      }

      return res.status(200).json({
        message: `User with id ${id} deleted successfully`
      });
    });
  }
};

