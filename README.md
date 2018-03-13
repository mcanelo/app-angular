# AppAngular

Proyecto generado con  [Angular CLI](https://github.com/angular/angular-cli) versión 1.7.2. y Node: 9.7.1 Es recomendable usar las mismas versiónes. 

## Install

Para instalar el proyecot ejecutamos `npm install`

## Development server

Para ejecutar el proyecto en modo desarollo usamos `ng serve`. 
Abrimos `http://localhost:4200/` en el navegador. 


## Build

Para generar una versión de producción ejecutamos `ng build --prod` que nos generará el directorio `dist`, que a su vez debemos meter en un servidor para que pueda ser ejecutado. 


## El directorio `src`

El código de la aplicación se encuentra en este directorio. Todos los componentes, plantillas, imagenes y en general cualquier cosa que necesite tu aplicación irá aqui.

```text

 src/
   |── app/
      ├── core/

```
Dentro de core irá cada componente independiente que a su vez puede contener otros componentes. Cada uno lleva un fichero .ts, .html y .scss
Las carpetas model contienen modelos que se manejan en vista y los utilizamos para limpiar los controladores de variables. 


## El directorio `css`

```text

 src/
   |── css/
      ├── base/
      ├── blocks/
      ├── components/
      ├── lib/

```

En el directorio css se encuentran los estilos genéricos de la aplicación. 
Además de la estructura propuesta por Cocktail, hemos añadido algunos ficheros en el directorio base, 
para añadir animaciones y fuentes, y la carpeta componentes, dónde se establecen los componentes customizados.
