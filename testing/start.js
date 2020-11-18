//start.js
var spawn = require('child_process');
    py    = spawn.spawnSync('python', ['./PythonServer.py','1234']);
    // data = [1,2,3,4,5,6,7,8,9],
//console.log(py);
   //console.log('Sum of numbers=',py.pid);
   console.log('stdut  of numbers=',`${py.stdout}`);
   //console.log('stdut  of numbers=',py.stdout);


// py.stdout.on('data', function(data2){
  // console.log(`${data2}`);
  // console.log('Sum of numbers=',dataString);
// });
// py.stdout.on('end', function(){
  // console.log('Sum of numbers=',dataString);
// });
// py.stdin.write(JSON.stringify(data));
// py.stdin.end();