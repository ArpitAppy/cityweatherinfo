const express = require("express");
const fetch = require("node-fetch");
const debug = require("debug")("app:server:dev");
const app = express();

app.get("/", (req, res) => {
})

app.get("/weatherinfo", async(req, res) => {
    const {location} = req.query;
    const weatherAPI = require('./apis/index');
    try{
       res.send(await fetch(`${weatherAPI.WEATHER_API}?location=${location}`, {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            "X-Yahoo-App-Id": "C674XF30",
            "Authorization": "d08f502256ea8bb6dbf81315cd4808729bee28b7",
            "oauth_consumer_key": "dj0yJmk9blpLYkNVM0JNU0Y3JmQ9WVdrOVF6WTNORmhHTXpBbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTg0",
            "oauth_signature_method": "HMAC-SHA1",
            "cache-control": "no-cache",
        }
    }).then(r => r.json()));
    } catch(err){
          res.send({ error: err });
    }
});

app.listen("8080", "0.0.0.0", () => {
    debug(`Server running on http://0.0.0.0:8080`);
});