/**
 * Ejemplos de código JavaScript para practicar con GitHub Copilot Chat
 * Usa estos ejemplos para hacer preguntas al chat y mejorar tu código
 */

// Ejemplo 1: Función que necesita modernización
function sumarArray(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
// Pregunta al chat: "Moderniza esta función usando ES6+"


// Ejemplo 2: Callback hell que necesita promesas
function obtenerDatos(userId, callback) {
    obtenerUsuario(userId, function(usuario) {
        obtenerPosts(usuario.id, function(posts) {
            obtenerComentarios(posts[0].id, function(comentarios) {
                callback({ usuario, posts, comentarios });
            });
        });
    });
}
// Pregunta al chat: "Convierte esto a async/await"


// Ejemplo 3: Función sin validación
function crearUsuario(nombre, email, edad) {
    return {
        nombre: nombre,
        email: email,
        edad: edad,
        createdAt: new Date()
    };
}
// Pregunta al chat: "Agrega validación de parámetros y manejo de errores"


// Ejemplo 4: Código repetitivo
function calcularDescuentoBasico(precio) {
    return precio * 0.9;
}

function calcularDescuentoPremium(precio) {
    return precio * 0.8;
}

function calcularDescuentoVIP(precio) {
    return precio * 0.7;
}
// Pregunta al chat: "Refactoriza usando un objeto de configuración"


// Ejemplo 5: Función sin documentación JSDoc
function filtrarProductos(productos, categoría, precioMin, precioMax) {
    return productos.filter(p => 
        p.categoria === categoría && 
        p.precio >= precioMin && 
        p.precio <= precioMax
    );
}
// Pregunta al chat: "Agrega documentación JSDoc completa"


// Ejemplo 6: Clase que necesita mejoras
class CarritoCompras {
    constructor() {
        this.items = [];
    }
    
    agregar(item) {
        this.items.push(item);
    }
    
    calcularTotal() {
        let total = 0;
        for (let item of this.items) {
            total += item.precio;
        }
        return total;
    }
}
// Pregunta al chat: "Agrega métodos para remover items, aplicar descuentos y gestionar cantidad"


// Ejemplo 7: Función que necesita optimización
function buscarEnArray(arr, valor) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === valor) {
            return i;
        }
    }
    return -1;
}
// Pregunta al chat: "¿Hay una forma más eficiente de hacer esto con métodos nativos?"


// Ejemplo 8: Manejo de estado sin validación
let appState = {
    user: null,
    isAuthenticated: false
};

function updateState(newState) {
    appState = { ...appState, ...newState };
}
// Pregunta al chat: "Convierte esto en un gestor de estado más robusto con validación"


// Ejemplo 9: Función asíncrona sin manejo de errores
async function fetchUserData(userId) {
    const response = await fetch(`/api/users/${userId}`);
    const data = await response.json();
    return data;
}
// Pregunta al chat: "Agrega manejo de errores completo y reintentos"


// Ejemplo 10: Código imperativo que podría ser funcional
function procesarPedidos(pedidos) {
    let resultado = [];
    for (let pedido of pedidos) {
        if (pedido.estado === 'pendiente') {
            let pedidoActualizado = {
                ...pedido,
                estado: 'procesando',
                fechaProceso: new Date()
            };
            resultado.push(pedidoActualizado);
        }
    }
    return resultado;
}
// Pregunta al chat: "Refactoriza usando programación funcional (map, filter, reduce)"


// Ejemplo 11: Component React básico
function UserProfile({ user }) {
    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.bio}</p>
        </div>
    );
}
// Pregunta al chat: "Agrega PropTypes, manejo de loading y error states"


// Ejemplo 12: Validación de formulario básica
function validarFormulario(datos) {
    if (!datos.email) return false;
    if (!datos.password) return false;
    if (datos.password.length < 6) return false;
    return true;
}
// Pregunta al chat: "Mejora esta validación con mensajes de error específicos y regex para email"


// Ejemplo 13: Utilidad que necesita tests
function formatearFecha(fecha, formato) {
    const opciones = {
        'corta': { day: '2-digit', month: '2-digit', year: 'numeric' },
        'larga': { day: 'numeric', month: 'long', year: 'numeric' },
        'completa': { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }
    };
    
    return new Date(fecha).toLocaleDateString('es-ES', opciones[formato]);
}
// Pregunta al chat: "Genera una suite de tests unitarios con Jest"


// Ejemplo 14: API client sin estructura
function llamarAPI(endpoint, metodo, datos) {
    return fetch(endpoint, {
        method: metodo,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
    }).then(res => res.json());
}
// Pregunta al chat: "Crea una clase API client completa con interceptors y manejo de errores"


// Ejemplo 15: Lógica de negocio sin separación de responsabilidades
function procesarCompra(usuario, producto, cantidad) {
    // Validar stock
    if (producto.stock < cantidad) {
        alert('Stock insuficiente');
        return false;
    }
    
    // Calcular precio
    let precio = producto.precio * cantidad;
    
    // Aplicar descuento
    if (usuario.tipo === 'premium') {
        precio = precio * 0.9;
    }
    
    // Actualizar stock
    producto.stock -= cantidad;
    
    // Guardar en BD
    fetch('/api/compras', {
        method: 'POST',
        body: JSON.stringify({ usuario, producto, cantidad, precio })
    });
    
    alert('Compra exitosa');
    return true;
}
// Pregunta al chat: "Refactoriza separando responsabilidades y usando arquitectura limpia"
