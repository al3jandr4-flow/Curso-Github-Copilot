"""
Ejemplos de código para practicar con GitHub Copilot Chat
Usa estos ejemplos para hacer preguntas al chat y mejorar tu código
"""

# Ejemplo 1: Función básica que necesita mejoras
def procesar_datos(datos):
    resultado = []
    for d in datos:
        if d > 0:
            resultado.append(d * 2)
    return resultado

# Pregunta al chat: "¿Cómo puedo mejorar esta función usando comprensión de listas?"


# Ejemplo 2: Función con posibles errores
def dividir_numeros(a, b):
    return a / b

# Pregunta al chat: "¿Qué errores podría tener esta función?"


# Ejemplo 3: Código que necesita documentación
def calcular_estadisticas(numeros):
    total = sum(numeros)
    promedio = total / len(numeros)
    maximo = max(numeros)
    minimo = min(numeros)
    return {
        'total': total,
        'promedio': promedio,
        'maximo': maximo,
        'minimo': minimo
    }

# Pregunta al chat: "Agrega documentación completa a esta función"


# Ejemplo 4: Algoritmo ineficiente
def buscar_duplicados(lista):
    duplicados = []
    for i in range(len(lista)):
        for j in range(i + 1, len(lista)):
            if lista[i] == lista[j] and lista[i] not in duplicados:
                duplicados.append(lista[i])
    return duplicados

# Pregunta al chat: "Optimiza esta función para O(n) usando un set"


# Ejemplo 5: Función que necesita manejo de errores
def leer_archivo_json(ruta):
    import json
    with open(ruta, 'r') as archivo:
        datos = json.load(archivo)
    return datos

# Pregunta al chat: "Agrega manejo de errores completo a esta función"


# Ejemplo 6: Clase que necesita métodos adicionales
class Usuario:
    def __init__(self, nombre, email):
        self.nombre = nombre
        self.email = email

# Pregunta al chat: "Agrega métodos para validar email y representación en string"


# Ejemplo 7: Código que necesita tests
def validar_password(password):
    if len(password) < 8:
        return False
    tiene_numero = any(c.isdigit() for c in password)
    tiene_mayuscula = any(c.isupper() for c in password)
    tiene_minuscula = any(c.islower() for c in password)
    return tiene_numero and tiene_mayuscula and tiene_minuscula

# Pregunta al chat: "Genera tests unitarios completos para esta función"


# Ejemplo 8: Función que puede usar tipado
def combinar_listas(lista1, lista2):
    resultado = []
    for item1 in lista1:
        for item2 in lista2:
            resultado.append((item1, item2))
    return resultado

# Pregunta al chat: "Agrega type hints a esta función"


# Ejemplo 9: Código repetitivo que necesita refactorización
def procesar_usuario_admin(usuario):
    if usuario['rol'] == 'admin':
        print(f"Procesando admin: {usuario['nombre']}")
        usuario['permisos'] = ['leer', 'escribir', 'eliminar']
        usuario['nivel'] = 10
        return usuario

def procesar_usuario_editor(usuario):
    if usuario['rol'] == 'editor':
        print(f"Procesando editor: {usuario['nombre']}")
        usuario['permisos'] = ['leer', 'escribir']
        usuario['nivel'] = 5
        return usuario

def procesar_usuario_lector(usuario):
    if usuario['rol'] == 'lector':
        print(f"Procesando lector: {usuario['nombre']}")
        usuario['permisos'] = ['leer']
        usuario['nivel'] = 1
        return usuario

# Pregunta al chat: "Refactoriza estas funciones usando un patrón más eficiente"


# Ejemplo 10: Código que necesita ser asíncrono
def obtener_datos_api(urls):
    import requests
    resultados = []
    for url in urls:
        respuesta = requests.get(url)
        resultados.append(respuesta.json())
    return resultados

# Pregunta al chat: "Convierte esta función a async/await para mejor rendimiento"
