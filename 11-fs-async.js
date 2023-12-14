const { isUtf8 } = require('buffer');
const { log } = require('console');
const {readFile,writeFile, write} = require('fs');
console.log("start")
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
   // console.log(first)
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        //console.log(second)
        writeFile(                        // it doesn't return a result in the 
            './content/result-async.txt',    //callback only the error
            `Here is the result: ${first},${second}`,
            (err)=>{                                            
                if(err){
                    console.log(err)
                    return
                }
               console.log("end")
            }
        )
    })
})
console.log("starting another task")