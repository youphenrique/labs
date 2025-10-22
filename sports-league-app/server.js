// /////////////////////////////////////////////////////////////////////////////
// IMPORTANT:
// THIS FILE IS READ ONLY, DO NOT MODIFY IT IN ANY WAY AS THAT WILL RESULT IN A TEST FAILURE
// /////////////////////////////////////////////////////////////////////////////

const http = require("http");
const fs = require("fs").promises;
const url = require("url");

const filePath = process.argv[2];
let config = null;

function requestsHandler(req, res) {
    const requestUrl = url.parse(req.url, true);
    const endpoint = config.api.find(
        (api) => api.path === requestUrl.pathname && (api.method === req.method || req.method === 'OPTIONS')
    );

    // endpoint not found
    if (!endpoint) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
        return;
    }

    // handle cors
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', `OPTIONS, ${endpoint.method}`);
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Max-Age', 3600);

    if(req.method === 'OPTIONS'){
        res.writeHead(200);
        res.end();
        return;
    }

    // endpoint requires authorization
    if (
        endpoint.authorization &&
        req.headers.authorization !== `Bearer ${endpoint.authorization.token}`
    ) {
        res.writeHead(endpoint.authorization.status, {
            "Content-Type": "application/json",
        });
        res.end(JSON.stringify(endpoint.authorization.unauthorized));
        return;
    }
    

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(endpoint.response));
}

async function main() {
    try {
        config = await fs.readFile(filePath, "utf8");
    } catch (err) {
        console.error("Error reading config file:", err);
        return;
    }

    try {
        config = JSON.parse(config);
    } catch (err) {
        console.error("Error parsing config file:", err);
        return;
    }

    const server = http.createServer(requestsHandler);

    server.listen(config.port, config.host, () =>
        console.log(`Server running at http://${config.host}:${config.port}/`)
    );
}

main();
