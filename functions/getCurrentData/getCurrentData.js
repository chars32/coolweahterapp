const fetch = require("node-fetch");

const handler = async function (event) {
  try {
    const lat = event.queryStringParameters.lat;
    const lon = event.queryStringParameters.lon;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEAHTER_ACCES_KEY}&units=metric`,
      {
        headers: { Accept: "application/json" },
      }
    );
    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText };
    }
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({ data }),
    };
  } catch (error) {
    // output to netlify function log
    console.log(error);
    return {
      statusCode: 500,
      // Could be a custom message or object i.e. JSON.stringify(err)
      body: JSON.stringify({ msg: "something is wrong" }),
    };
  }
};

module.exports = { handler };
