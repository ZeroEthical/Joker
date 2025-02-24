# 💣 Joker: Desata el Caos (y la Seguridad) con este Poderoso DDoS Tool 😈🛡️

<h2 align="center">
    ──「 JOKER 」──
</h2>



<div align="center">
  <img src="https://github.com/ZeroEthical/Joker/blob/main/image.jpg" alt="ZeroEthical" width="450">
</div>

<div align="center">
    <a href="https://github.com/ZeroEthical/Joker/issues"><img align="center" src="https://img.shields.io/github/issues/ZeroEthical/Joker?style=flat-square" alt="GitHub Issues"></a>
    <a href="https://github.com/ZeroEthical/Joker/stargazers"><img align="center" src="https://img.shields.io/github/stars/ZeroEthical/Joker?style=flat-square" alt="GitHub Stars"></a>
    <a href="https://github.com/ZeroEthical/Joker/network/members"><img align="center" src="https://img.shields.io/github/forks/ZeroEthical/Joker?style=flat-square" alt="GitHub Forks"></a>
    <a href="LICENSE"><img align="center" src="https://img.shields.io/github/license/ZeroEthical/Joker?style=flat-square" alt="GitHub License"></a>
</div>

## 💀 ¡Advertencia! 💀

**Esta herramienta está diseñada EXCLUSIVAMENTE para pruebas de estrés y evaluación de seguridad. No asumo NINGUNA responsabilidad por el uso malintencionado de este código. ¡Úsalo bajo tu propio riesgo y responsabilidad!**

## 🎯 Descripción General

**Joker** es un sofisticado script de pruebas de estrés HTTP/2 escrito en Node.js, creado para simular ataques de denegación de servicio distribuido (DDoS). Está diseñado para proporcionar a los equipos de seguridad, investigadores y profesionales de la ciberseguridad una herramienta robusta para evaluar la resiliencia de sus sistemas y redes. Joker es ideal para comprender las vulnerabilidades de un sistema ante ataques de alto volumen y para refinar las estrategias de mitigación.

**Características Clave:**

*   **Protocolo HTTP/2:** Aprovecha las capacidades de HTTP/2 para generar un tráfico más eficiente e intenso. 📶
*   **Proxy Anonymization:** Capaz de utilizar listas de proxies para ofuscar el origen del tráfico malicioso, haciendo que la atribución sea más difícil. 🛡️
*   **Multi-Threading:** Utiliza múltiples hilos para amplificar el poder del ataque, generando un volumen masivo de solicitudes. 🧵
*   **Header Spoofing:** Personalización completa de los encabezados HTTP para simular tráfico diverso y evadir defensas. 😈
*   **User-Agent Rotation:** Cambia los User-Agents en cada solicitud para evitar la detección basada en la firma del cliente. 🤖
*   **Cluster Mode:** Ejecuta múltiples procesos para aumentar significativamente el volumen total de tráfico generado. 👯
*   **Monitorización en tiempo real:** Permite monitorear las conexiones. 📈

## 🛠️ Instalación

1.  **Clonar el Repositorio:**

    ```bash
    git clone https://github.com/ZeroEthical/Joker.git
    cd Joker
    ```

2.  **Instalar Dependencias (¡prepárate, esto es importante!):**

    ```bash
    npm install axios net http2 tls cluster url path crypto user-agents fs https zlib
    ```

    ⚠️ **¡Asegúrate de instalar TODAS las dependencias!** ⚠️

## 🔪 Uso (¡Manos a la obra!)

La sintaxis es simple, pero el potencial es ENORME:

```bash
node joker.js <URL_OBJETIVO> <TIEMPO> <TASA_PAQUETES> <HILOS> <ARCHIVO_PROXIES>
```
**<URL_OBJETIVO>:** La URL del sitio web que quieres poner a prueba (ej., https://objetivo.com). 🎯

**<TIEMPO>:** La duración del ataque en segundos (¡sé preciso!). ⏳

**<TASA_PAQUETES>:** El número de paquetes HTTP/2 que cada hilo enviará por segundo. 🚀

**<HILOS>:** El número de hilos (procesos) que se ejecutarán en paralelo. 🧵

**<ARCHIVO_PROXIES>:** La ruta al archivo de texto que contiene la lista de proxies que usarás para anonimizar tu ataque. 🛡️


***Ejemplo:***

```
node joker.js https://ejemplo.com 60 5000 100 proxies.txt
```

*Este comando lanzará un ataque HTTP/2 DDoS sobre https://objetivo.com, usando 100 hilos, enviando 5000 peticiones por segundo cada uno, durante un tiempo de 60 segundos, a través de los proxies en proxies.txt.
  Esto iniciará un ataque DDoS al sitio web https://ejemplo.com durante 60 segundos, utilizando 100 hilos y enviando 5000 paquetes por segundo, a través de los proxies listados en proxies.txt.*
  

## 💀 ¡Aviso Importante Sobre Los Proxies! 💀
¡La calidad importa! Utiliza proxies Elite, Anonimos

Formato estricto: Cada línea en el archivo proxies.txt debe seguir el formato ip:puerto (ej., 127.0.0.1:8080).

Responsabilidad: El uso de proxies no te hace inmune. La trazabilidad es un juego del gato y el ratón.
Importante:

Asegúrese que las "url" en los "proxies.txt" sean las correctas para una mayor efectividad.
  El uso de este software es **bajo su propio riesgo**. El autor no se hace responsable de:

*  Cualquier daño causado a sistemas o redes atacadas.

*  Cualquier consecuencia legal derivada del uso indebido del software.

*  La efectividad del ataque, que puede variar según la infraestructura del objetivo y las defensas implementadas.

##  ⚠️ Exención de Responsabilidad
Este software se proporciona "tal cual" sin ninguna garantía expresa o implícita. Al utilizar este software, asumes TODA la responsabilidad por cualquier consecuencia que pueda surgir, incluyendo, pero no limitándose a:

Daños a sistemas, redes o datos.

Responsabilidad legal por violar las leyes locales, nacionales o internacionales.

Interrupciones del servicio, pérdida de ingresos o cualquier otro daño financiero.

***¡El autor no asume responsabilidad alguna por el uso que le des a esta herramienta!***

## 🔧 Próximas Características (y Cómo Ayudar a Destruir Cosas Mejores 😉)
*  ***Métodos de ataque ampliados:*** SYN Flood, UDP Flood, HTTP Raw Data, Slowloris.

*  ***Soporte para más protocolos de proxy:*** SOCKS4, SOCKS5.

*  ***Integración con herramientas de resolución de Cloudflare:*** [FILTRADO]

*  ***Intensificación de hilos e IP rotatorio.***

*  ***Interfaz Gráfica de Usuario para gestionar los ataques de forma más directa***

## Contribuciones
Si tienes ideas para mejor este código, con gusto puedes contribuir. 😈


# 🔥Owner And Credit
<details>
<summary><b>ᴄʀᴇᴅɪᴛ</b></summary>
<br>

<h3 align="center">
   ᴄʀᴇᴅɪᴛs 
## sᴘᴇᴄɪᴀʟ ᴄʀᴇᴅɪᴛ

- [ZeroEthical](https://t.me/ZeroEthical)
</details>


## 📝 Licencia
*  ***Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más detalles.***

## ¿Te gustó? ☕ ¡Invítame un café!
***Si este repositorio te ha sido útil, ¡considera invitarme a un café!***

**🪙 BTC:** 1P9vFv4oWvz3Lp75QiBXWNtSudZ1FnBZNG 


</h3>

<p align="center">
<a href="https://github.com/ZeroEthical"> <img src="https://img.shields.io/badge/ZeroEthical-black?style=for-the-badge&logo=github" alt="ZeroEthical" /> </a>
</p>

<h3 align="center">──「 ʀᴇᴘᴏ sᴛᴀᴛs 」──</h3>

<h2 align="center">
    <a href="https://github.com/ZeroEthical/Joker"><img src="https://github-readme-stats.vercel.app/api/pin/?username=ZeroEthical&repo=Joker&theme=chartreuse-dark"></a>
    </h2>



