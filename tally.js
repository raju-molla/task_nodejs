
const allFiles = './logs/'
const fs = require('fs');

const convert = (arr) => {
    const res = {};
    arr.forEach((obj) => {
       const key = `${obj.email}`;
       if (!res[key]) {
          res[key] = { id:obj.id,email:obj.email, total: 0 };
       };
       res[key].total += 1;
    });
 return Object.values(res);
};
fs.readdir(allFiles, (err,files)=>{
    files.forEach(file=>{
        const l = require('./logs/'+file);
         let ans = convert(l.logs);
         console.log(ans);
    })
})