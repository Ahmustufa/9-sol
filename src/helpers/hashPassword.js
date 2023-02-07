import bcrypt from 'bcrypt';

const hashPassword = async (password) => {
  try {
    let salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    return password;
  } catch (error) {
    throw error;
  }
};

export default hashPassword;