const mqtt = require('mqtt')

// Conectarse al broker MQTT (localhost)
const client = mqtt.connect('mqtt://localhost:1883')

// Tópico que vamos a usar
const TOPICO = 'test/mensaje'

// Cuando se conecta exitosamente
client.on('connect', () => {
    console.log('Conectado a Mosquitto MQTT')

    // Suscribirse al tópico
    client.subscribe(TOPICO, (err) => {
        if (!err) {
            console.log(`📡 Suscrito al tópico: ${TOPICO}`)

            // Publicar un mensaje
            client.publish(TOPICO, 'Hola, este es un mensaje de prueba')
        }
    })
})

// Cuando se recibe un mensaje
client.on('message', (topic, message) => {
    console.log(`Mensaje recibido en [${topic}]: ${message.toString()}`)
})

// Manejo de errores
client.on('error', (err) => {
    console.error('Error:', err)
})