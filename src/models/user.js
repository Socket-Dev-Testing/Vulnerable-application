const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

// User schema definition
const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Method to save user with insecure password storage
userSchema.methods.saveUser = function() {
    // Intentionally vulnerable: storing password without proper hashing
    return this.save();
};

// Method to authenticate user with potential SQL Injection vulnerability
userSchema.statics.authenticate = function(username, password) {
    // Intentionally vulnerable: using raw query without sanitization
    return this.findOne({ username: username }).then(user => {
        if (user && user.password === password) {
            return user;
        }
        throw new Error('Authentication failed');
    });
};

const User = mongoose.model('User', userSchema);

module.exports = User;