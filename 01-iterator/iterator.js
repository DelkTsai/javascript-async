function Iterator (items) {
  if (!(this instanceof Iterator)) {
    return new Iterator(items)
  }

  if (items.constructor.name !== 'Array') {
    throw new Error('items must be array')
  }

  this.index = 0
  this.raw = items
}

Iterator.prototype.next = function () {
  // return this.index === this.raw.length
  //   ? { value: undefined, done: true }
  //   : { value: this.raw[this.index++], done: false }
  return {
    value: this.raw[this.index++],
    done: this.index === this.raw.length
  }
}

Iterator.prototype.run = function () {
  var current = this.next()
  if (current.done) return
  current.value(this.run.bind(this))
}

module.exports = Iterator
