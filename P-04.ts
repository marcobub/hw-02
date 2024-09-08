function crearUsuario(name: string, ci: string, email: string): { name: string; ci: string; email: string } {
    
    return {
        name: name,
        ci: ci,
        email: email
    };
}


const usuario = crearUsuario("Marco", "8511259", "narakucoronel@gmail.com");
console.log(usuario);