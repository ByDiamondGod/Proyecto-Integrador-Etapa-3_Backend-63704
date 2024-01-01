# Proyecto Integrador: Etapa 3 de 3

## Resultado del bootcamp Full Stack Engineer = Aprobado con nota de 10/10, en las 3 etapas

### Nota importante:

En la nube, el render tarda en cargar de 10 a 60 segundos las cards y img. Esperar por favor.
Ademas las imagenes desaparecen, ya que el render actualiza su servidor y borra los archivos subidos.

### Links:

o	URL Netlify          = (https://galaxyshop-eddev.netlify.app/inicio)
o	URL Render           = (https://galaxyshop-eddev.onrender.com/api/productos)

o	URL GitHub Front-End = (https://github.com/ByDiamondGod/Proyecto-Integrador-Etapa-3_Frontend-63704)
o	URL GitHub Back-End  = (https://github.com/ByDiamondGod/Proyecto-Integrador-Etapa-3_Backend-63704)

### Funcionalidades hechas

1.	Objetivo principal, que funcione correctamente en la nube. (subido a netlify y con la db remota en mongo atlas y render)
2. Crud funcionando correctamente. (productos, carrito, uploads)
3. Validaciones en carrito y productos.
4. handleErros aplicados.
5. Mejoras en el responsive design para carrito, productos, pages.
6. Al presionar el Logo de Galaxy shop, envía al inicio y hace scroll hacia arriba.
7. Actualización de los íconos en forma de OVNI en contacto, redigire a mi WhatsApp, Google Maps, y correo.
8. Mejora en el Navbar al presionar la burger.
9. Saque el autofocus de los inputs, ya que molestan en un celular, siendo más UX.
10. Al editar un producto en la page Alta, se desliza hacia arriba automáticamente, siendo más UX.
11. Al agregar un producto nuevo en la page Alta, es obligatorio hacer el upload de una foto, pero al Editarlo no, siendo más UX.
12. Para evitar que alguien coloque mal la URL, agregue un ERROR 404, que redigire a un componente de page Error, y hay un boton para llevarlo al inicio.
13. Hubo mas mejoras y funcionalidades, pero resalte las más importantes.

PD: Estoy muy feliz del resultado, voy a seguir mejorando el proyecto. gracias por todo.

### Proximas mejoras en la siguiente actualizacion / Next Features

 - Boton de Modo oscuro / light
 - Hacer funcionar el buscador que filtre productos
 - Que aparezca en el carrito +1 productos en rojo si tocas comprar
 - Boton de idioma: en ingles, español, etc.
 - Boton de modena: en USD, ARG, etc.
 - Registro login para Administrador (Alta) y para Cliente (Sin Alta) / Crea un usuario – ingresa “bienvenido x – sus compras – sus parcelas –  coordenadas, informacion de la compra, cantidad, etc”

## ¿Como será la tercera etapa?

   +  E-commerce completo

   +  MERN Stack

   +  Patron arquitectonico MVC

   +  Migrar Etapa 2 a la 3

   +  Libre sin restricciones

           ✅ Dificultad:  Full Stack

           ☢️ Obstáculos:  Muchos (Los aprendí)

## ¿Que contiene el e-commerce ?

### Frontend

  🔹 React

  🔸 Vite

  🔹 Sass

  🔸 Nomenclatura BEM (Metodología)

### Backend

  🔹 NodeJS

  🔸 Express

  🔹 MongoDB

## Dependencias

### Frotend

   +  React Router Dom
   +  SweetAlert 2 dark
   +  TypeWriter
   +  AOS
   +  FontAwesome

### Backend

   +  Nodemon
   +  Dotenv
   +  Mongoose
   +  Multer
   +  Cors
   +  UUID
   +  Express Validator

## Subirlo a la nube

   +  Frontend = Netlify
   +  Backend = Render
   +  DB Remota = Mongo Atlas
   +  DB Local = MongoDB Compass

## ¿Como ejecutar el proyecto?

1 - Descargar o clonar el repositorio

2 - Backend con MongoDB (usando la terminal de conEmu para local)

```sh
mongod
```

3 - Ejecutar mongoshell en otra terminal conEmu (local)

```sh
mongosh
```

4 - Instalar dependencias (Siguientes pasos en  VSCode)

```sh
npm i
```

5 - Agregar los puertos en el archivo .env  (en Frontend y Backend para funcionar)

```sh
Contactame para darte los puertos y rutas .env
```

6 - Ejecutar Backend

```sh
npm run dev
```

7 - Ejecutar Frontend en otra terminal

```sh
npm run dev
```

8 - Archivo preparado para hacer restaurar el dump de la db