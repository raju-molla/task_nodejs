const allFiles = './logs/'
const fs = require('fs');

const convert = (arr) => {
    const res = {};
    arr.forEach((obj) => {
       const key = `${obj.message}`;
       if (!res[key]) {
          res[key] = { id:obj.id,message:obj.message, totalMgs: 0 };
       };
       res[key].totalMgs += 1;
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