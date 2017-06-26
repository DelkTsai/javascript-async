function Promise (executor) {
  if (!(this instanceof Promise)) {
    return new Promise(executor)
  }

  if (typeof executor !== 'function') {
    throw new Error('Defer params must be a function')
  }

  try {
    executor(this.resolve, this.reject)
  } catch (e) {

  }
}

new Promise((resolve, reject) => {
  setTimeout(() => resolve(Date.now()), 1000)
})
