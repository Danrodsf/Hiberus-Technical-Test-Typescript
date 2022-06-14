# Prueba técnica de FrontEnd para Hiberus

<div id="top"></div>

  <h3>Prueba técnica de FrontEnd para Hiberus</h3>

Daniel Rodriguez
[![LinkedIn][linkedin-shield]][linkedin-url]

  <p>
    Prueba técnica de FrontEnd para Hiberus.
    <br />
    <a href="https://main.d23ehxb0by6s7z.amplifyapp.com/">https://main.d79jbmd9coq6d.amplifyapp.com/</a>
    <br />
    <a href="https://github.com/Danrodsf/Technical-Test-Hiberus/issues">Reportar un Error</a>
  </p>
</div>

## Sobre el FrontEnd.

El sitio está compuesto por una simple aplicación para realizar un CRUD en la tabla Usuarios de una API propia de Hiberus.
Ha sido creado en React (Typescript) dado que tengo más experiencia (6 meses) que con Angular (1 semana).
Para la estructura de proyecto he optado por un acercamiento al patrón MVC, generando componentes tipo pages (vistas), tipo funcionales (modelos) y helpers (controladores). La web es 100% responsive, aunque el apartado visual no ha sido prioridad en este proyecto en específico y, por lo tanto, es muy simple en cuanto a diseño.

He implementado código de gestión de errores tanto para llamadas a la API (try/catch) con sus mensajes de éxito y error correspondientes, como para acceso a rutas desconocidas y, por tanto, simular un Error 404 con redirección automática a la ruta principal. Igualmente, las vistas de "Users" y "AddUser" están protegidas verificando que exista un JWT en Redux, y de no ser así, el usuario es redireccionado a la vista de login para que inicie sesión y así poder acceder a estas vistas.

Para la vista de "Users" en la cual se obtienen y muestran todos los usuarios registrados en la DDBB, como esto es una prueba técnica, he evitado mostrarlos en una tabla o grid como se suele hacer mayormente y en vez he optado por una manera distinta, mostrando solo los nombres e implementando un componente modal para visualizar, editar y/o eliminar dicho usuario. Igualmente, siendo una web 100% responsive, los datos mostrados tipo tabla o grid en dispositivos móviles suelen mostrarse con un overflow obligando al usuario a hacer scroll horizontal, por lo que mostrar únicamente los nombres y usando el modal, hay menos datos que mostrar y, por lo tanto, más fácil que se muestren correctamente en dispositivos móviles.

Los inputs tienen una simple validación de datos tipo required y minLength. Personalmente en mis otros proyectos he optado por una validación más personalizada y con efectos y mensajes individuales para cada input, pero preferí minimizar el uso de css personalizado y basarme en bootstrap para el estilo de la web.

Adicionalmente, no he empleado los scripts de bootstrap para validación de inputs ni para el modal, evitando así en la medida de lo posible la utilización de JS Vanilla y, por lo tanto, mantener el proyecto lo más cercano a uso nativo de React.

Al realizar el deploy de la web, me surgió un error en el que el explorador me bloqueaba las llamadas a la API indicándome que la web tenía un problema de contenido mixto, tras investigar un poco, entendí que se daba porque aws amplify posee un certificado ssl, y la api no lo posee, por lo que generaba un contenido mixto tipo http/https que resulta no ser seguro. Por lo que la solución fue agregar un proxy gratiuto con ssl a la url de la API.

Como última nota, he observado que el Endpoint de login devuelve el refreshToken, pero no existe un Endpoint para el empleo del mismo. Me gustaría acotarlo para que quizás lo implementen para futuros aplicantes.

### Tiempo Invertido.

El proyecto ha tomado un total de 3 días en completarse, de los cuales 2 han sido realizando el proyecto en su totalidad en Javascript, y el 3er día se usó para pasar el proyecto a typescript en su totalidad.
Decidí no implementar Typescript desde el principio por mi falta de experiencia usándolo con React y con Redux, y aunque React no me dio muchos problemas al tiparlo, si es cierto que con Redux tuve que aprender nuevamente a usarlo, ya que la manera en que yo lo implementaba ya ha sido reemplazada por métodos más modernos.

### Vistas.

El FrontEnd está compuesto por 5 vistas

1. 'Login' - Vista principal y permite el inicio de sesión de un usuario registrado.
2. 'SignUp' - Vista no protegida que permite el registro de un usuario.
3. 'Users' - Vista protegida mediante la comprobación de JWT donde se obtienen y muestran todos los usuarios registrados en la base de datos.
   Adicionalmente, se puede clickear en un usuario para mostrar un modal con los datos del mismo y las opciones de editar o eliminar el usuario seleccionado.
4. 'AddUser' - Vista protegida mediante la verificación de JWT donde un usuario puede registrar a otro.
5. 'Error404' - Vista no protegida que se muestra en el caso de que se intente acceder a una ruta desconocida.

### Características a tomar en cuenta.

```
● CRUD completo sobre usuarios
● Obtención y envió por cabecera tipo Bearer del JWT para acceder a los endpoints protegidos.
● Uso de Redux para guardar el JWT en un estado global y de ese modo, proteger el acceso a usuarios no registrados o logueados.
● Uso de Local Storage para la persistencia del JWT y de ese modo no tener que solicitar el inicio de sesión tras una recarga o abandono del sitio web.
● Implementación de un componente Logout para cerrar sesion y limpiar el JWT del Local Storage.
● Uso de Bootstrap para una maquetación más rápida y eficaz, además de ser 100% Responsive.
● Control de acceso a rutas desconocidas mediante la vista Error404.
● Uso de componente Spinner para mostrar un preloader cuando los datos están siendo obtenidos desde la API.
● Uso de paginación.
● Implementación de MVC como patrón para la estructura del proyecto.
● Uso de Helpers para mejorar la estructura y modularidad del proyecto.
● Implementación de mensajes de éxito/error al realizar llamadas a la API.
● Implementación de modal.
● Validación sencilla de inputs.
```

### Tecnologías.

Las tecnologías implementadas fueron las siguientes:

- [Typescript](https://www.typescriptlang.org/).
- [React.js](https://es.reactjs.org/).
- [React-Router-Dom](https://reactrouter.com/).
- [Redux.js](https://redux.js.org/).
- [Axios](https://axios-http.com/).
- [Bootstrap](https://getbootstrap.com/).

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/danielrodriguezserafin/

<p align="right">(<a href="#top">Go to Top</a>)</p>
