import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Carousel>
        <div>
          <img src="https://149990825.v2.pressablecdn.com/wp-content/uploads/2023/09/HongKong3.jpg" alt="Hong Kong" />
          <p className="legend">Hong Kong</p>
        </div>
        <div>
          <img src="https://www.telegraph.co.uk/content/dam/travel/2022/07/11/TELEMMGLPICT000302560749.jpeg" alt="Macao" />
          <p className="legend">Macao</p>
        </div>
        <div>
          <img src="https://assets.tripsmiths.com/images/listing/527440-shutterstock-1513825088.jpg" alt="Japan" />
          <p className="legend">Japan</p>
        </div>
        <div>
          <img src="https://media.tacdn.com/media/attractions-content--1x-1/12/85/9e/df.jpg" alt="Las Vegas" />
          <p className="legend">Las Vegas</p>
        </div>
      </Carousel>
    </div>
  );
}

export default App;