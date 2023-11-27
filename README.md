# Equipo 27

- ALBENIZ MARTINEZ RESTREPO - a.martinezr23@uniandes.edu.co
- MIGUEL ANGEL AVILA TORRES - ma.avilat12@uniandes.edu.co
- DAVID LEONARDO ESLAVA RINCON - d.eslavar@uniandes.edu.co
- GIANCARLO CORREDOR CATINO - g.corredor2@uniandes.edu.co

# Pre-requisitos
- Node.js >= 18
- ghost-cli >= 1.25.3
- yarn

# Instrucciones para ejecutar Ghost
Con el fin de realizar las pruebas sobre una misma versión de Ghost, y con los mismos datos por defecto, en el directorio `ghost` se encuentra instalada la versión 5.68.0 de esta aplicación.

Dado que las carpetas `node_modules` son ignoradas en el repositorio, el primer paso que debemos dar para ejecutarla es instalar sus dependencias. Desde la raíz de este repositorio ejecutar los siguientes comandos, en el orden en el que se muestran.
``` bash
$ cd ghost/current # Ingresamos al directorio donde esta Ghost
$ yarn install     # Instalamos las dependencias
$ cd ..            # Volvemos al directorio raíz de Ghost
$ ghost start      # Ejecutamos la aplicación
```

Ghost está configurado para ejecutarse localmente en el puerto `2368`. Para probar que la aplicación se está ejecutando, desde un navegador web visitamos la siguiente dirección `http://localhost:2368/ghost`, e ingresamos las siguientes credenciales:

| email                         | password       |
|:--------------------------------:|:--------------:|
| admin@thesoftwaredesigncompany.com | Contraseña123# |

Una vez terminemos de usar la aplicación, podemos detenerla ejecutando
```
$ ghost stop
```

# Instrucciones para ejecutar las pruebas con Cypress
## Setup cypress-gherkin
- Entrar a la carpeta `cypress`
- Ejecutar
    ```shell
    npm install
    ```
## Iniciar cypress
Alternativa #1
```shell
npx cypress-gherkin open --e2e --browser chrome
```

Alternativa #2
```shell
npm run cypress-gherkin:runner
```

## Ejecutar tests sobre GHOST desplegado en docker
Se ha de traer ghost arriba con el siguiente comando (comprobado para fedora linux)

```bash
docker rm -f $(docker ps -qa) && \
docker run -d --name some-ghost -e NODE_ENV=development -e url=http://localhost:2368 -p 2368:2368 ghost:5.68.0
```

Al momento de ejecutar nuestros tests para GHOST 5.68.0 lo podemos conseguir
mediante la ejecución de todos los tests.

# Instrucciones para ejecutar las pruebas con Kraken
[//]: # (Añadir instrucciones para ejecutar las pruebas con Kraken)