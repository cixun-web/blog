# Promise

## 基本规则

1. 首先Promise 构造函数会立即执行，而Promise.then()内部的代码在当次事件循环的结尾立即执行（微任务）
2. promise的状态一旦由等待pending变为成功fulfilled或者失败rejected。那么当前promise被标记为完成，后面则不会再次改变该状态
3. resolve函数和reject函数都将当前Promise状态改为完成，并将异步结果，或者错误结果当作参数返回
4. Promise.resolve(value)
5. Promise.all(iterable) / Promise.race(iterable), all是全成功返回，race有一个成功就返回，其中任何一个失败，都会直接返回失败的结果
6. promise 对象的构造函数只会调用一次，then方法和catch方法都能多次调用，但一旦有了确定的结果，再次调用就会直接返回结果。

## 例题辅助理解

1. promise构造函数立即执行

   ```js
   const promise = new Promise((resolve, reject) => {
     console.log(1)
     resolve()
     console.log(2)
     reject('error')
   })
   promise
     .then(() => {
       console.log(3)
     })
     .catch(e => console.log(e))
   console.log(4)

   // 最终结果 1，2，4，3
   ```

2. 构造函数中定时任务辅助理解只执行一次

   ```js
   const promise = new Promise((resolve, reject) => {
     setTimeout(() => {
       console.log('once')
       resolve('success')
     }, 1000)
   })
   promise.then(res => {
     console.log(res)
   })
   promise.then(res => {
     console.log(res)
   })

   // 最终结果 once，success，success
   ```

3. 事件循环Event Loot下的Promise如何执行

   ```js
   const p1 = () =>
   new Promise((resolve, reject) => {
       console.log(1);
       let p2 = new Promise((resolve, reject) => {
       console.log(2);
       const timeOut1 = setTimeout(() => {
           console.log(3);
           resolve(4);
       }, 0);
       resolve(5);
       });
       resolve(6);
       p2.then((arg) => {
       console.log(arg);
       });
   });
   const timeOut2 = setTimeout(() => {
   console.log(8);
   const p3 = new Promise((reject) => {
       reject(9);
   }).then((res) => {
       console.log(res);
   });
   }, 0);

   p1().then((arg) => {
   console.log(arg);
   });
   console.log(10);

   // 最终结果 1,2,10,5,6,8,9,3
   /**
    * 第一步提出宏任务，排出队列中有的异步任务
    * --异步任务
    * Promise构造函数创建p1 打印1
    * Promise构造函数创建p2 打印2
    * console.log(10)      打印10
    * --异步任务
    * timeOut2，timeOut1, p2.then, p1.then
    * 第二步，宏任务执行完成执行异步任务，微任务优先执行
    * 则 p2.then, p1.then  打印5，6
    * 第三步，微任务执行完毕，返回宏任务下。从队列中去，timeOut2先被取出来执行  打印8，9
    * 9是在微任务中所以优先与timeOut1执行
    * timeOut1执行         打印3
    * /
   // 因为在p2当中已经resolve(5)了所以resolve(4)不打印，但是如果把resolve(5)注释则打印的顺序应该是1,2,10,6,8,9,3,4
   ```

## 手写Promise

```js
const PENDING = 'pending'
const FULFILL = 'fulfill'
const REJECTED = 'rejected'

// 模拟添加微任务队列
function runMicroTask(callback) {
  if (process && process.nextTick) {
    process.nextTick(callback)
  } else if (MutationObserver) {
    const p = document.createElement('p')
    const ob = new MutationObserver(callback)
    ob.observe(p, { childList: true })
    p.innerHTML = '1'
  } else {
    setTimeout(callback, 0)
  }
}

function isPromise(obj) {
  return !!(obj && typeof obj === 'object' && typeof obj.then === 'function')
}

class MyPromise {
  constructor(executor) {
    this.state = PENDING
    this.value = undefined
    this.handlers = []
    try {
      executor(this.resolve.bind(this), this.reject.bind(this))
    } catch (err) {
      this.reject(err)
    }
  }

  changeState(newState, value) {
    if (this.state !== PENDING) {
      return
    }
    this.state = newState
    this.value = value
    this.runHandler()
  }

  resolve(data) {
    this.changeState(FULFILL, data)
  }

  reject(reason) {
    this.changeState(REJECTED, reason)
  }

  pushHandler(executor, state, resolve, reject) {
    this.handlers.push({
      executor,
      state,
      resolve,
      reject,
    })
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      this.pushHandler(onFulfilled, FULFILL, resolve, reject)
      this.pushHandler(onRejected, REJECTED, resolve, reject)
      this.runHandler()
    })
  }

  runHandler() {
    if (this.state === PENDING) {
      return
    }
    while (this.handlers[0]) {
      const handler = this.handlers[0]
      this.runOneHandler(handler)
      this.handlers.shift()
    }
  }

  runOneHandler({ executor, state, resolve, reject }) {
    runMicroTask(() => {
      if (this.state !== state) {
        return
      }
      if (typeof executor !== 'function') {
        this.state === FULFILL ? resolve(this.value) : reject(this.value)
      }
      try {
        const result = executor(this.value)
        if (isPromise(result)) {
          result.then(resolve, reject)
        }
        resolve(result)
      } catch (e) {
        reject(e)
      }
    })
  }
}
```

## 手写Promise.all

```js
Promise.myAll = proms => {
  let res, rej
  const p = new Promise((reslove, reject) => {
    res = reslove
    rej = reject
  })
  let i = 0
  let result = []
  let fulfiled = 0
  for (const prom of proms) {
    const index = i
    i++
    Promise.resolve(prom).then(data => {
      // 完成的数据汇总到结果中
      result[index] = data
      // 判断是否全部完成
      fulfiled++
      if (fulfiled === i) {
        res(result)
      }
    }, rej)
  }
  if (i === 0) {
    res([])
  }
  return p
}

Promise.myAll([1, 2, 3, Promise.resolve(123)]).then(
  res => {
    console.log(res)
  },
  err => {
    console.log(err, 'err')
  }
)
```
