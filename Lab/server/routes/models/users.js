module.exports = class Users {

  constructor (username, birthdate, age, email, password, valid) {
      this.username = username;
      this.birthdate = birthdate;
      this.age = age;
      this.email = email;
      this.password = password;
      this.valid = valid;
  }
};
