const user = { email: 'jdoe@gmail.com'}

try {
  // produce a reference error
  // myFunction()

  // produce a type error
  // null.myFunction()

  // will produce syntax error
  // eval('hello world')

  // will produce a URIError
  // decodeURIComponent('%')

  if(!user.name){
    // throw 'user has no name'
    throw new SyntaxError('User has no name')
  }

} catch(e){
  console.log(`User Error: ${e.message}`)
  // console.log(e)
  // console.log(e.message)
  // console.log(e.name)
  // console.log(e instanceof TypeError)
} finally {
  console.log('Finally runs regardless of result...')
}

console.log('Program continues...')