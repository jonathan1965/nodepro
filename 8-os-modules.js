 const os = require('os')
 
//   info about current user

const user = os.userInfo()
console.log(user)

//  method returns the system uptime in second

console.log(`the system uptime ${os.uptime} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release()
}

console.log(currentOs)

