const async = require('./async')

let count = 1
const timer = new Date()
function tick (done) {
  setTimeout(function () {
    console.log('tick %s after %s ms', count++, new Date() - timer)
    done()
  }, 1000)
}

async(function* () {
  console.log('tick 1 start...')
  yield tick
  console.log('tick 1 done...')
  console.log('tick 2 start...')
  yield tick
  console.log('tick 2 done...')
  console.log('tick 3 start...')
  yield tick
  console.log('tick 3 done...')
})
