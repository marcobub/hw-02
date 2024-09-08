const emailList = [
    "javascript@gmail.com", 
    "abc.com",
    "mydomain.com",
    "Python@hotmail.com",
    "test",
    "anotherEmail@kenkoo.com",
    "typescript@gmail.com",
    "mailOfPikachu@@@@@",
    "elta@kkk.co",
    "user123.....",
    "wrongEmail@gmail.com",
    "kattis.go",
    "java@gamil.com",
  ];
  
  function esEmailValido(email) {
        return /@/.test(email) && /\.com$/.test(email);
  }
  
  const emailsValidos = emailList.filter(esEmailValido);
  
  console.log(emailsValidos);