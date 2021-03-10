// const user = { email: 'jdoe@gmail.com'}

// try {
//   // produce a reference error
//   // myFunction()

//   // produce a type error
//   // null.myFunction()

//   // will produce syntax error
//   // eval('hello world')

//   // will produce a URIError
//   // decodeURIComponent('%')

//   if(!user.name){
//     // throw 'user has no name'
//     throw new SyntaxError('User has no name')
//   }

// } catch(e){
//   console.log(`User Error: ${e.message}`)
//   // console.log(e)
//   // console.log(e.message)
//   // console.log(e.name)
//   // console.log(e instanceof TypeError)
// } finally {
//   console.log('Finally runs regardless of result...')
// }

// console.log('Program continues...')


// Regular Expressions - Eval functions

let re;
re = /hello/
re = /hello/i //i = case insensitive
// re = /hello/g //Global search

// console.log(re)
// console.log(re.source)

// exec() - return result in an array or null
// const result = re.exec('hello world')

// console.log(result)
// console.log(result[0])
// console.log(result.index)
// console.log(result.input)

// test() - returns true or false
// const result = re.test('Hello')
// console.log(result)

// match() - return result array or null
// const str = 'Hello There'
// const result = str.match(re)
// console.log(result)

// search() - returns index ofthe first match if not found returns -1 (like indexOf)
// const str = 'Peter Hello There'
// const result = str.search(re)
// console.log(result)

// replace() - return new string with some or all matches of a pattern
// const str = 'Hello there'
// const newStr = str.replace(re, 'Hi')
// console.log(newStr)