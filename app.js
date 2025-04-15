function greet(name) {
    if (!name) {
      return "Hello, stranger!";
    }
    return `Hello, ${name}!`;
  }
  
  console.log(greet("Adam"));
  