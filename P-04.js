function crearUsuario(name, ci, email) {
    return {
        name: name,
        ci: ci,
        email: email
    };
}
var usuario = crearUsuario("Marco", "8511259", "narakucoronel@gmail.com");
console.log(usuario);
