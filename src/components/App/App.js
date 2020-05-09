import React, { useState } from 'react';
import { Container, Row, Col } from "styled-bootstrap-grid";

const getWeather = (location) => {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${process.env.REACT_APP_WEATHER_APP_KEY}`).then(res => {
    return res.json();
  }).then(function(res) {
    console.log(res);
  }).catch((err) => console.log(err));
};

const App = () => {
  const [ location, setLocation ] = useState(null);

  const onChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <Container>
      <Row>
        <Col col={12}>
          <h1>Weather App</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            getWeather(location);}
          }>
            Enter your location!
              <input type="text" name="location" onChange={(e) => onChange(e)}/>
            <button type="submit">submit</button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
