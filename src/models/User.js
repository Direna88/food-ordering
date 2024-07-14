import bcrypt from 'bcrypt';
import {model, models, Schema} from 'mongoose';

const UserSchema = new Schema({
  email: {type: String, required: true, unique: true},
  name: {type: String, required: true, unique: true},
  password: {
    type: String,
    required: true,
    validate: pass => {
      if(!pass?.length || pass.length < 5) {
        new Error('password must be at least 5 characters');
      }
    },
  },
}, {timestamps: true});

//UserSchema.post('validate', function (user) {
//const notHashedPassword = user.password;
// console.log(notHashedPassword)
// const salt = bcrypt.genSaltSync(10);
// user.password = bcrypt.hashSync(notHashedPassword, salt);
//   const hashedPassword = bcrypt.hashSync(user.password, salt);
//   console.log("Hashed password: ", hashPassword)
//   user.password = hashPassword
// })

export const User = models?.User || model('User', UserSchema);



