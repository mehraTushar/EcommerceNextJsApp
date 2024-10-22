import {userSchema} from '../schema/user.js';
import mongoose from 'mongoose';
import bcrypt from "bcrypt";

const saltRounds = 10;



export async function createUserfn(res) {
    console.log(res);
    const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/test');
    const Users = connection.model('Users', userSchema);
    var hashedPassword = await EncryptPassword(res.password);
    const createUser = new Users({
        fullName: res.fullName,
        email: res.email,
        password: hashedPassword
    });

    var savedUser = await createUser.save();
    return savedUser;
}

export async function loginUserfn(res) {
    const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/test');
    const Users = connection.model('Users', userSchema);
    var user = await Users.findOne({email: res.email});
    if(user) {
        var result = await ComparePassword(res.password, user.password);
        if(result)
            return user;
         else 
            return null;
    } else {
        return null;
    }
}






async function EncryptPassword(password) {
   var hashedPassword = await bcrypt.hash(password, saltRounds);
   return hashedPassword;
}
async function ComparePassword(password, hashedPassword) {
   var result = await bcrypt.compare(password, hashedPassword);
   return result;
}
