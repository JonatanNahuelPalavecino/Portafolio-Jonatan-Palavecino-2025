# Bienvenido al Frontend del [Portfolio de Jonatan Palavecino](https://jonatanpalavecino.com)

Hola! Mi nombre es Jonatan Palavecino y aca te explicaré un poco la estructura del código con el cuál armé la interface para el portoflio.

# Estructura Básica

Este proyecto fue contruido con Vite + React 19 para componetizar mejor cada parte de la aplicación, y reutilizar componentes para reducir la repetición de código.Ademas, [mi primer portfolio](https://portafolio-jonatan-palavecino.vercel.app/#about) fue creado con HTML, SCSS y Javascript puro. Por ende, esta vez quería demostrar mis conocimientos en uno de los Frameworks más utilizados.

La estructura costa en la carpeta /src, donde dentro se encuentran:

/assets
/componentes
/helpers

Y las librerias utilizadas son:

```
dotenv - (Para las variables de entorno)
Material UI - (Para componetizar partes de la aplicación)
Splide JS - (Para un Slider moderno)
dayjs - (Para el manejo de fechas)
Motion - (Para componetizar partes de la aplicación)
React Router DOM - (Para las rutas de la aplicación)
SASS - (Para estilar bajo la lógica de SCSS)
Sonner - (Para el manejo de las notificaciones)
```

## Información General de la aplicación

A mi entender, ésta aplicación supera mis expectativas relacionado a las funcionalidades alcanzadas. Por nombrar algunas de las features, desde el registro e inicio de sesión para usuarios, la posibilidad de likear y comentar proyectos, o hasta el envío de mails dinámicos a los usuarios en diferentes partes de la aplicación. Por ese motivo, voy a tomarme este apartado para comentar algunos detalles que creo fundamentales.



## Estados y Hooks

Uno de los hooks mas importantes que uso en la aplicación es **useContext**, para los estados globales que necesito compartir entre diferentes componentes.
En este caso, esos estados son **user** y **loading**; el primero, para identificar cuando un usuario esta logeado o no, y el segundo necesario para los momentos de peticiones.

Luego, utilizo **useState** para estados necesarios dentro de un componente para el guardado de datos, **useRef** para obtener la referencia a algun elemento (en este caso, para seleccionar el input de tipo file), **useLocation** para saber la ruta actual donde un usuario esta posicionado, entre otros.

Por último, utilicé por primera vez **useReducer**, hook el cuál aprendí hace poco y parece muy interesante. Éste hook fue envuelto dentro de un custom hook al que llamé **useForm** para manejar el cambio de los inputs en los 3 formularios que tiene la aplicación.

## Helpers y Validadores

Otra ventaja que encontré en este proyecto es separar la lógica necesaria en diferentes partes, de la aplicación de los compontentes en sí. Por ende creé una carpeta helpers donde alojé las peticiones, el reducer mencionado en el apartado anterior, y los vallidadores necesarios: uno para los formularios, y otro para la validación del token.

# Conclusión

El trabajo hecho en este portfolio me dejó muchas cosas buenas, como formar parte de la creación de punta a punta, aprender conceptos nuevos tantos en el frontend como en el backend, y las ganas de seguir creciendo para hacer más y mejores apliacaciones de forma independiente o trabajando para una empresa.

No me queda más que agradecer a los que se tomaron el tiempo de leer esto, y si queres saber cómo está armado el backend, hacé [click acá.](https://github.com/JonatanNahuelPalavecino/server-para-app-taller)


