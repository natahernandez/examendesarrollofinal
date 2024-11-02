# examendesarrollofinal
Documentación Básica
1. Estructura de la Base de Datos
La base de datos de este sistema sigue una estructura que permite gestionar eficientemente los libros y sus ejemplares, con un catálogo de géneros literarios. La estructura incluye las siguientes tablas principales:

Libros: Tabla que almacena información general sobre cada libro, como el título, autor, ISBN y género.
Ejemplares: Tabla que guarda detalles específicos de cada ejemplar de un libro, como su estado (disponible, prestado, reservado), ubicación en la biblioteca y la fecha de adquisición.
Géneros Literarios: Catálogo que categoriza los libros en géneros específicos (ficción, no ficción, ciencia, etc.). Esta tabla está relacionada con Libros, permitiendo asignar un género a cada libro.
Cada libro puede tener múltiples ejemplares, y cada ejemplar tiene un estado individual, lo que permite un control detallado del inventario y la disponibilidad de los recursos de la biblioteca.

Relación de Tablas
Libros - Ejemplares: Relación uno a muchos. Cada registro en Libros puede estar asociado a múltiples registros en Ejemplares.
Libros - Géneros Literarios: Relación muchos a uno. Cada libro tiene un solo género, pero un género puede aplicarse a muchos libros.


2. Arquitectura de la Aplicación
La arquitectura de esta aplicación sigue un enfoque MVC (Modelo-Vista-Controlador), dividiendo el sistema en varias capas para facilitar el desarrollo, mantenimiento y escalabilidad:

Modelo: Define la estructura de los datos y la lógica de negocio de la aplicación. Utiliza un ORM (por ejemplo, Sequelize) para interactuar con la base de datos de manera sencilla, mapeando las tablas de Libros, Ejemplares y Géneros Literarios a modelos que pueden ser gestionados desde el código.

Vista: La capa de presentación es donde se muestra la información al usuario. En un sistema web, esta capa puede estar desarrollada con tecnologías como HTML, CSS y JavaScript, o frameworks como React o Vue para una experiencia de usuario más interactiva.

Controlador: Gestiona la lógica de las rutas y controla cómo se manejan las solicitudes HTTP. Los controladores en esta aplicación se encargan de recibir las peticiones del usuario, procesar la información (por ejemplo, crear, leer, actualizar y eliminar registros en la base de datos) y devolver las respuestas apropiadas.

Flujo General de la Aplicación
Usuario realiza una solicitud (por ejemplo, ver la lista de libros).
Controlador procesa la solicitud, interactúa con el Modelo para obtener los datos necesarios y luego selecciona la Vista adecuada.
Vista presenta los datos al usuario en un formato amigable.
3. Enlace al Sitio de Pruebas
Para probar la aplicación y ver su funcionamiento en un entorno real, puedes visitar el siguiente enlace:

https://examenwebfinal.netlify.app/


https://examendesarrollofinal.onrender.com/api-docs/


Este sitio de pruebas permite a los usuarios interactuar con el sistema, probar las funcionalidades de gestión de libros y ejemplares,
