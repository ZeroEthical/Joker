# 💣 Joker: Desata el Caos (y la Seguridad) con este Poderoso DDoS Tool 😈🛡️

[![GitHub Issues](https://img.shields.io/github/issues/ZeroEthical/Joker?style=flat-square)](https://github.com/ZeroEthical/Joker/issues)
[![GitHub Stars](https://img.shields.io/github/stars/ZeroEthical/Joker?style=flat-square)](https://github.com/ZeroEthical/Joker/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/ZeroEthical/Joker?style=flat-square)](https://github.com/ZeroEthical/Joker/network/members)
[![GitHub License](https://img.shields.io/github/license/TU_USUARIO/Joker?style=flat-square)](LICENSE)
[![Node.js CI](https://github.com/ZeroEthical/Joker/actions/workflows/node.js.yml/badge.svg)](https://github.com/ZeroEthical/Joker/actions/workflows/node.js.yml)

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
