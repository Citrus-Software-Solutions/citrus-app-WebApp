
<h1 align="center">
    Citrus Web App
</h1>

## Sobre el proyecto

Citrus App es una app para encontrar trabajos desarrollada por Citrus Software Solutions.
Este repositorio contiene nuestro Fron-End desarrollado en Vue, usando Arquitectura CLEAN.

### Requisitos del proyecto

- Node.js: 14.17.1
- npm: 6.14.13
- vue/cli 4.5.13

### Descarga del proyecto

1. Clonar el repositorio:

```js
    git clone https://github.com/Citrus-Software-Solutions/citrus-app-WebApp.git
```

2. Abrir el repositorio clonado y ejecutar:

```js
    npm run install
```

3. El proyecto estará listo para ser ejecutado una vez haya finalizado la instalación de dependencias

### ¿Cómo ejecutar el proyecto?

1.  Una vez instaladas las dependencias **_(ver pasos sección anterior)_**, se puede correr el proyecto de la siguiente manera:

    - Opción A - Usando concurrently:

      Para ello ejecute el siguiente comando:

      ```js
      npm run serve:dev
      ```

        Si presenta errores de referentes a "concurrently", puede intentar instalarlo de manera global en su equipo con:

        ```js
      npm install -g concurrently
        ```
    Puede ver más sobre este paquete aquí:  [Concurrently](https://www.npmjs.com/package/concurrently)
    - Opción B - Corriendo el servidor y la aplicación por separados

        Esta opción es en caso de que el paso anterior no haya funcionado. Para ello, ejecute los siguientes comandos:

        - Para ejecutar la aplicación de Vue

            ```js
              npm run start
            ```
        - Para ejecutar el Json-Server

            ```js
            npm run jsonserver
            ```


      **Nota**: Es necesario correr ambos simultaneamente, ya que para esta entrega se decidió emplear jsonserver como servidor.

2.  Finalizado lo anterior, dirijase a la siguiente dirección:

    ```js
    http://localhost:8080/
    ```

### Instrucciones de Build

Para crear la **build** del proyecto ejecutar el siguiente comando:

```js
npm run build
```

## Sobre Tests

**IMPORTANTE**: Para el test de integración debe tener corriendo el servidor de jsonserver y para el e2e debe tener corriendo el servidor y la aplicación, de lo contrario, estos fallarán. *** Para ver como ejecutar el servidor y la app diríjase a la sección de ¿Cómo ejecutar el proyecto? ***

- Para ejecutar el Json-Server

    ```js
    npm run jsonserver
    ```

### Tests unitarios

Para ejecutar los tests unitarios, emplee:

```js
npm run test:unit
```

### Tests de integración

Para ejecutar los tests de integración, emplee:

```js
npm run test:int
```

### Tests end-to-end

Para ejecutar los tests de end to end, emplee:

```js
npm run test:e2e
```

#### Instrucciones adicionales para los tests end-to-end

Una vez ejecute el comando dado, se abrirá una ventana de cypress. Cuando esta abra, deberá darle al botón **"Run all specs"** y se iniciará la ejecución de los tests.


## Referencias

[1] A. Ferrera (s.f.). Arquitectura Hexagonal en el FrontEnd [En línea], Softwarecrafter. Disponible en: https://softwarecrafters.io/react/arquitectura-hexagonal-frontend

[2] A. Zimarev,Hands-On Domain-Driven Design with .NET Core.Primera edición. Birmingham UK. Packt Publishing Ltd,2019

[3] (2021) Utility Types [En línea], Typescriptlang. Disponible en: https://www.typescriptlang.org/docs/handbook/utility-types.html

[4] (2021) Declaration Merging [En línea], Typescriptlang. Disponible en: https://www.typescriptlang.org/docs/handbook/declaration-merging.html

[4] V. Khorikov(2019), Domain services vs Application services [En línea],Enterprisecraftsmanship . Disponible en: https://enterprisecraftsmanship.com/posts/domain-vs-application-services/

[5] T. Hombergs,Get Your Hands Dirty on Clean Architecture. Segunda edición. Leanpub 2019

[6] R. Martin, Clean Architecture. Primera Edición. Estados Unidos de América. Prentice Hall, Pearson. 2018

[7] Aula Software Libre. “Frontend Clean Architecture - A never ending story”, Youtube,  [archivo de vídeo]. Disponible en: https://www.youtube.com/watch?v=zwNcHQ-SqSI&ab_channel=AulaSoftwareLibre

[8] Geeks Hub Academy. “Arquitectura Hexagonal en Node + Typescript" Samuel Andreo, Full Stack en IBM Londres”, Youtube, [Archivo de vídeo]. Disponible en : https://www.youtube.com/watch?v=b5ngTWAPNeg&ab_channel=GeeksHubsAcademy

[9] Jest (2021). Testing Asynchronous Code [En línea], JestJs. Disponible en: https://jestjs.io/docs/asynchronous

[10] A. Nathan (2020). Testing Database Interactions with Jest [En línea], Walrus. Disponible en: https://walrus.ai/blog/2020/04/testing-database-interactions-with-jest/

[11] (2019) Value Objects - DDD w/ Typescript [En línea] , Khalilstemmler. Disponible en: https://khalilstemmler.com/articles/typescript-value-object/

[12] Bshelling (2020). Database Testing Made Easy With Jest [En línea], Better Programming . Disponible en :https://betterprogramming.pub/database-testing-made-easy-with-jest-db96ad5f1f46

[13] Jest (2021). Expect[En línea], JestJs. Disponible en: https://jestjs.io/docs/expect

[14] Jest (2021). Mock Functions[En línea], JestJs. Disponible en: https://jestjs.io/docs/mock-functions

[15] D.Pavlutin(2020). How to fecth with async/await[En línea], dmitripavlutin. Disponible en: https://dmitripavlutin.com/javascript-fetch-async-await/

[16] Event Handling [En línea] , Vue.js. Disponible en:
https://vuejs.org/v2/guide/events.html


[17]  V. Chircu (2019). Defining Test Boundaries – An example [En línea], Simple Oriented Architecture. Disponible en: https://www.simpleorientedarchitecture.com/defining-test-boundaries/

[18]  A. Masan(2019). Interfaces in TypeScript: What are they and how do we use them [En línea], Log Rocket. Disponible en: https://blog.logrocket.com/interfaces-in-typescript-what-are-they-and-how-do-we-use-them-befbc69b38b3/

[19] Committing Mutations in Componentes [En línea], Vuex.vuejs. Disponible en:
https://vuex.vuejs.org/guide/mutations.html#commit-with-payload

[20] Andrew Hughes (2018). Build a Simple CRUD App with Spring Boot and Vue.js [En linea], Developer.okta. Disponible en:
https://developer.okta.com/blog/2018/11/20/build-crud-spring-and-vue

[21] (2021) What is Vuex? [En línea], Vuex.vuejs. Disponible en:  https://next.vuex.vuejs.org/

[22] (2021) Factory Method in TypeScrip t[En línea], Refactoring . Disponible en: https://refactoring.guru/design-patterns/factory-method/typescript/example

[23]Konrad Gadzinowski. Trunk-based Development vs. Git Flow [En línea], Toptal. Disponible en:
https://www.toptal.com/software/trunk-based-development-git-flow

[24]  Mariano Álvarez (2020). ¿Por qué Trunk-Based Development? [En línea], Dev.to. Disponible en: https://dev.to/malvarezcr/por-que-trunk-based-development-i5n

[25] N. Nisi (2020).  Advanced TypeScript 4.2 Concepts: Classes and Types [En línea], Site Pen. Disponible en: https://www.sitepen.com/blog/advanced-typescript-concepts-classes-and-types

[26] J. Bodnar (2020). JavaScript Builder pattern tutorial [En línea] , ZetCode. Disponible en : https://zetcode.com/javascript/builderpattern/

[27] T. Christopher (2019). The Builder Pattern in JavaScript [En línea], Jsmanifest . Disponible en: https://jsmanifest.com/the-builder-pattern-in-javascript/

[28] V. Prasanna (2019). JavaScript Object Oriented Patterns: Factory Pattern [En línea], Digital Ocean. Disponible en: https://www.digitalocean.com/community/tutorials/js-factory-pattern

[29] M. Fowler (2016). Value Object [En línea], Martin Fowler. Disponible en:  https://martinfowler.com/bliki/ValueObject.html

[30] (2021) . Typescript Support [En línea],V3 Vuejs.  Disponible en: https://v3.vuejs.org/guide/typescript-support.html#official-declaration-in-npm-packages

[31] M. Oberlehner (2019) . Container Components in Vue.js: Advanced Component Composition[En línea], Markus Oberlehner. Disponible en: https://markus.oberlehner.net/blog/advanced-vue-component-composition-with-container-components/

[32] M. Thiessen(2018). How to Pass a Function as a Prop in Vue [En línea], Michael N Thiessen. Disponible en: https://michaelnthiessen.com/pass-function-as-prop/

[33] D. Rodriguez(2021).  Implementing a Clean Architecture Modular Application in Nuxt/Vue Typescript Part 1: Domain Layer[En línea], Dirodriguezm.  Disponible en: https://dirodriguezm.gitlab.io/nuxt-clean-architecture.html

[34] H. Pretish(2020). Vue.js and TypeScript: A complete tutorial with examples[En línea], Log Rocket. Disponible en: https://blog.logrocket.com/vue-typescript-tutorial-examples/

[35] C. Dy (2021). Dependency Injection with Vue 3 [En línea], DevTo. Disponible en: https://dev.to/carlomigueldy/dependency-injection-with-vue-3-5il

[36] F. Alvarez (2019). Dependency Injection Made Easy for VueJS and Vuex with TypeScript [En línea]. Medium. Disponible en: https://medium.com/@fernalvarez/dependency-injection-made-easy-for-vuejs-and-vuex-with-typescript-3bc738c17e05

[37] V. Khorikov(2016). What is domain logic?[En línea], Enterprise Craftsmanship. Disponible en: https://enterprisecraftsmanship.com/posts/what-is-domain-logic/

