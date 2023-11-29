# Sistema "Pizza".


Un sistema de inventario basico listar un menu de pizzas. Desarrollado con vite, react js, botstrap 5.

## Instalación

Debe de descargar el sistema y dentro de la carpeta de este ejecutar el comando npm install.

```bash
  npm install
```

Luego debe de configurar la direccion url del backend en el archivo src/backend.jsx en la variable "url",
es necesario colocar /api al final de la direccion.

```javascript
const url = "http://direccionbackend/"
```

Para arrancar el sistema se debe ejecutar en la consola el comando:
```bash
  npm run dev
```

Los datos del usuario administrador son:
```bash
  correo: admin@mail.com
  contraseña: 12345678
```

## Funcionamiento
### Inicio
En la pagina de inicio se muestra una landingpage con la informacion de la pagina, en la parte superio podemos ver la barra de navegacion donde hay 3 apartados, menu y acerca de, que son paginas estaticas, y iniciar sesión que es donde podemos hacer el login y el registro de cuenta.
### Inicio de sesión y registrar una cuenta
Para iniciar sesion colocamos los datos del usuario en el apartado de "iniciar sesion".

Para registrar una cuenta damos click en el apartado "no tienes cuenta?. da click aqui para registrarte" y llenamos el formulario.

El usuario comun solo podra ver el menu y cambiar sus datos de usuario. El usuario administrador podra agregar, borrar, editar y ver las pizzas del menú.

### Registrar una Pizza
Para agregar una pizza haga click en el boton de agregar en la parte inferior derecha representado con un signo "+" en fondo verde, se le mostrara un formulario con la lista de datos a ingresar, debe de tener en cuenta que no se puede repetir las pizzas y que el formato de las imagenes debe ser JPG o PNG.

Las pizzas registradas se mostraran en la pantalla de menu con sus respectivos detalles.

### Eliminar Pizza
Si quiere eliminar una pizza haga click en el boton que se encuentra en la parte superior derecha de color rojo y con el icono de borrar en la imagen del producto. Debe de confirmar si desea eliminar la pizza.

### Editar Pizza
Para editar una pizza haga click en boton superior derecho de la imagen del producto, este es de color amarillo y con el simblolo de editar. Debe de llenar el formulario y confirmar si desea editar la pizza.
