const pool = require("../config/db.js");

const createUser = async (email, hashedPassword, rol, lenguage) => {
  try {
    const result = await pool.query(
      "INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4) RETURNING *",
      [email, hashedPassword, rol, lenguage]
    );
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const getUserByEmail = async (email) => {
  try {
    const result = await pool.query("SELECT * FROM usuarios WHERE email = $1", [
      email,
    ]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

const getUserById = async (id) => {
  try {
    const result = await pool.query("SELECT * FROM usuarios WHERE id = $1", [
      id,
    ]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createUser,
  getUserByEmail,
  getUserById,
};
