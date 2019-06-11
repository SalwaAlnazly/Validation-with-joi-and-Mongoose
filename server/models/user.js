const mongoose = require('mongoose');

import { hash } from 'bcryptjs';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        validate: {
            validator: email => User.doesntExist({ email }),
            message: ({ value }) => `Email ${value} has already been token`
        }
    },
    username: {
        type: String,
        validate: {
            validator: username => User.doesntExist({ username }),
            message: ({ value }) => `Username ${value} has already been token`
        }
    },
    name: String,
    password: String
}, {
        timestamps: true
    }
)


userSchema.pre('save', async function () {
    if (this.isModified('password')) {
        this.password = await hash(this.password, 10)
    }
})

userSchema.statics.doesntExist = async function (options) {
    return await this.where(options).countDocument() === 0
}

const User = mongoose.model('User', userSchema);

export default User;