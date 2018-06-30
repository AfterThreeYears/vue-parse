/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

/**
 * 因为有些数组的有些方法会改变自身
 * 需要对这些方法进行拦截处理
 * var foo = function() {
 *  console.log('我是原本的函数')
 * }
 * var wrapFoo = foo;
 * foo = function() {
 *   wrapFoo();
 *   console.log('我是新foo')
 * }
 * 这个文件会把所有会改变数组自身的方法进行了处理，并且重新赋值给用户的array对象的__proto__
 */

import { def } from '../util/index'

const arrayProto = Array.prototype
export const arrayMethods = Object.create(arrayProto)

const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  const original = arrayProto[method]
  def(arrayMethods, method, function mutator (...args) {
    const result = original.apply(this, args)
    const ob = this.__ob__
    let inserted
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2)
        break
    }
    // 对于新增的元素 需要进行观察
    if (inserted) ob.observeArray(inserted)
    // notify change
    ob.dep.notify()
    return result
  })
})
