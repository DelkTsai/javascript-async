function async (generator) {
  var current = generator.next()
  if (current.done) return
  current.value(async.bind(null, generator))
}

module.exports = async
