import bcrypt from 'bcryptjs';
let saltRounds = 10;
export const hashMyPassword = (plainPassword: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(plainPassword, saltRounds, (error, hashedPassword) => {
      if (error) {
        console.log(error);
        reject(error);
      } else if (hashedPassword) {
        resolve(hashedPassword);
      } else {
        reject(new Error('Failed to hash password'));
      }
    });
  });
};
// export const checkPasswordOld = (
//   plainPassword: string,
//   hashedPassword: string
// ) => {
//   return new Promise((resolve, reject) => {
//     let isMatch = bcrypt.compareSync(plainPassword, hashedPassword);
//     resolve(isMatch);
//   });
// };

export const checkMyPassword = (
  plainPassword: string,
  hashedPassword: string
) => {
  return new Promise(async (resolve, reject) => {
    try {
      let isMatch = bcrypt.compareSync(plainPassword, hashedPassword);
      if (isMatch) {
        resolve('Password Is Correct');
      } else {
        reject('Password Is Incorrect');
      }
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
