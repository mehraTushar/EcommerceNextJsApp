import {userSchema} from '../schema/user.js';
import mongoose from 'mongoose';


export async function createUserfn(res) {
    console.log(res);
    const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/test');
    const Users = connection.model('Users', userSchema);
    const createUser = new Users({
        fullName: res.fullName,
        email: res.email,
        password: res.password
    });

    var savedUser = await createUser.save();
    return savedUser;
}

