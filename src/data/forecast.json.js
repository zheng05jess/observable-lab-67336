const longitude = -79.95;
const latitude = 40.44;

async function json(url) {
    // The response Object will fulfill the Promise
    const response = await fetch(url);
  
    // If the response is not the expected json, it will throw an error that tells us the error code (404, 504, etc.)
    if (!response.ok) throw new Error(`fetch failed: ${response.status}`);
  
    // Returns the JSON if the response was the expected response.
    return await response.json();
  }

// gets all the information for the station closest to the given "Point" (latitude,longitude)
const station = await json(`https://api.weather.gov/points/${latitude},${longitude}`);

// gets the specific forecast information (ignoring the excess information about the station we don't need)
const forecast = await json(station.properties.forecastHourly);

// converts the output into a JSON string (using JSON.stringify()) and prints it to the console (process.stdout.write())
process.stdout.write(JSON.stringify(forecast));