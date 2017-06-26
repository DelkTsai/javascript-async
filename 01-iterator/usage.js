const Iterator = require('./iterator')

let count = 1
const timer = new Date()
function tick (done) {
  setTimeout(function () {
    console.log('tick %s after %s ms', count++, new Date() - timer)
    done()
  }, 1000)
}

const iterator = new Iterator([tick, tick, tick])
iterator.run()
