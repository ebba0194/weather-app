const fs = require('fs');

fs.writeFileSync('./.env', `REACT_APP_WEATHER_APP_KEY=${process.env.REACT_APP_WEATHER_APP_KEY}\n`);
