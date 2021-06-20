# asincronismo-JS
apuntes del curso de asincronismo con js 

# Callbacks Vs Promesas Vs Async/Await

# Callbacks <br>
Son simples! una función que recibe otra función que es facil de realizar. Son universales. Corren en todos los navegadores!
La composición puede ser muy tosca, anidar elementos se vuelve muy complejo (callback hell), es posible perderse al leer el codigo. Flujo poco intuitivo. Manejo de errores complejo.

# Promesas <br>
Son facilmente enlazables.Facil e intuitivo de leer. Permiten tener una gran capacidad de trabajar con asincronismo.
No maneja excepciones, solo tiene un catch al final. Es necesario usar babel para que pueda correr en todos los navegadores

# Async/await <br>
Son faciles de leer. Esperar a que algo este sucediendo! El entendimiento es mas facil!
es necesario esperar por los llamados. Ademas es necesario usar babel para que corra en todos los navegadores
