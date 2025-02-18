# 💣 Joker: Desata el Caos (y la Seguridad) con este Poderoso DDoS Tool 😈🛡️

<div align="center">
  <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Logo de Google" width="200">
</div>

<div align="center">
    <a href="https://github.com/ZeroEthical/Joker/issues"><img align="center" src="https://img.shields.io/github/issues/ZeroEthical/Joker?style=flat-square" alt="GitHub Issues"></a>
    <a href="https://github.com/ZeroEthical/Joker/stargazers"><img align="center" src="https://img.shields.io/github/stars/ZeroEthical/Joker?style=flat-square" alt="GitHub Stars"></a>
    <a href="https://github.com/ZeroEthical/Joker/network/members"><img align="center" src="https://img.shields.io/github/forks/ZeroEthical/Joker?style=flat-square" alt="GitHub Forks"></a>
    <a href="LICENSE"><img align="center" src="https://img.shields.io/github/license/ZeroEthical/Joker?style=flat-square" alt="GitHub License"></a>
</div>

## 💥 ¡Advertencia! 💥

**Este código se proporciona SÓLO con fines educativos y de pruebas de seguridad. El uso de este código para atacar sistemas sin autorización es ILEGAL y ÉTICAMENTE INACEPTABLE. El autor no se hace responsable de ningún uso indebido.**

## 🎭 Descripción General

**Joker** es una herramienta de pruebas de estrés (DDoS) avanzada, diseñada para evaluar la resiliencia de sistemas y redes ante ataques de denegación de servicio. Está escrita en **Node.js** y es una herramienta poderosa, ideal para equipos de seguridad, investigadores y desarrolladores que buscan comprender y mitigar los riesgos asociados con los ataques DDoS.

**Características Clave:**

*   **Multi-Threading:** Emplea múltiples hilos para generar un alto volumen de tráfico. 🧵
*   **Proxy Support:** Utiliza una lista de proxies para anonimizar el origen de los ataques (¡con precaución!). 🛡️
*   **Header Spoofing:** Permite personalizar los encabezados HTTP para simular tráfico real y evadir defensas. 😈
*   **HTTP/2 Support:** Se integra con el protocolo HTTP/2 para maximizar la efectividad del ataque. 📶
*   **Cluster Mode:** Usa múltiples procesos para amplificar el poder del ataque. 👯
*   **User-Agent Randomization:** Rota entre diferentes User-Agents para evitar la identificación del cliente atacante. 🤖
*   **Título de la página de destino:** Muestra el título de la página web de destino y código de estado para validar el ataque. 📰
*   **Diversidad de Métodos:** Incluye varios métodos de ataque, como GET, POST, HEAD, y más. 🧰
*   **Estado del ataque:** Obtenga el título del sitio atacado en tiempo real

## ⚙️ Instalación

1.  **Clonar el repositorio:**

    ```bash
    git clone https://github.com/TU_USUARIO/Joker.git
    cd Joker
    ```
2.  **Instalar las dependencias:**

    ```bash
    npm install axios
    npm install net
    npm install http2
    npm install tls
    npm install cluster
    npm install url
    npm install path
    npm install crypto
    npm install user-agents
    npm install fs
    npm install https
    ```
3.  **Asegúrate de tener Node.js instalado (versión 16 o superior).**

## 📝 Uso

```bash
node joker.js [ip] [tiempo] [velocidad] [threads] [archivo_proxies]
```

**Parámetros:**

*  [ip]: La dirección URL del sitio web de destino (ej., https://ejemplo.com). 🎯

*  [tiempo]: La duración del ataque en segundos. ⏳

*  [velocidad]: Cantidad de paquetes por segundo (Rate). 🚀

*  [threads]: El número de hilos a utilizar. 🧵

*  [archivo_proxies]: La ruta al archivo de texto que contiene una lista de proxies. 🛡️

***Ejemplo:***

```
node joker.js https://ejemplo.com 60 5000 100 proxies.txt
```
  Esto iniciará un ataque DDoS al sitio web https://ejemplo.com durante 60 segundos, utilizando 100 hilos y enviando 5000 paquetes por segundo, a través de los proxies listados en proxies.txt.

## ⚠️ Importante sobre el archivo de proxies ⚠️

*  El archivo proxies.txt debe contener una lista de proxies, uno por línea, en el formato ip:puerto.

*  Utiliza proxies anónimos y de alta calidad para evitar revelar tu dirección IP real y maximizar la efectividad del ataque.

*  Advertencia: El uso de proxies puede implicar riesgos legales y de privacidad. Utiliza esta función con precaución.

## 🛡️ Limitaciones de responsabilidad
  El uso de este software es **bajo su propio riesgo**. El autor no se hace responsable de:

*  Cualquier daño causado a sistemas o redes atacadas.

*  Cualquier consecuencia legal derivada del uso indebido del software.

*  La efectividad del ataque, que puede variar según la infraestructura del objetivo y las defensas implementadas.

## ✨ Próximas Mejoras (¡Contribuciones Bienvenidas!) ✨
*  **Integración de más métodos de ataque:** Ampliar el arsenal con SYN Flood, UDP Flood, etc. 💣

*  **Soporte para protocolos SOCKS4 y SOCKS5:** Más opciones para el anonimato. 🧅

*  **Interfaz de usuario:** Para una experiencia más amigable. 💻

*  **Configuración avanzada:** Permitir una mayor personalización de los parámetros del ataque. ⚙️

*  **Interfaz GUI:** Interfaz Gráfica intuitiva para gestionar los ataques más facilmente


## 🤝 Contribuciones
***¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar Joker, siéntete libre de crear un "pull request".***

## 📝 Licencia
*  ***Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más detalles.***

## ¿Te gustó? ☕ ¡Invítame un café!
***Si este repositorio te ha sido útil, ¡considera invitarme a un café!***

**🪙 BTC:** 1P9vFv4oWvz3Lp75QiBXWNtSudZ1FnBZNG 

**TELEGRAM: @ZeroEthical**
