import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../css/deal.css";
import deals from "../data/dealProducts";

export default function Deal() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set your deal expiration date here
    const dealEndTime = new Date("2025-08-14T00:00:00");

    const updateTimer = () => {
      const now = new Date();
      const difference = dealEndTime - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer(); // Run initially
    const intervalId = setInterval(updateTimer, 1000); // Then every second

    return () => clearInterval(intervalId); // Cleanup
  }, []);

  return (
    <div id="dealNoffers">
      <div id="dealTime">
        <h2>Deals and Offers</h2>
        <p>Hygiene Equipment</p>
        <div id="time">
          <div className="time-box">
            <h4>{String(timeLeft.days).padStart(2, '0')}</h4>
            <p>Days</p>
          </div>
          <div className="time-box">
            <h4>{String(timeLeft.hours).padStart(2, '0')}</h4>
            <p>Hours</p>
          </div>
          <div className="time-box">
            <h4>{String(timeLeft.minutes).padStart(2, '0')}</h4>
            <p>Mins</p>
          </div>
          <div className="time-box">
            <h4>{String(timeLeft.seconds).padStart(2, '0')}</h4>
            <p>Secs</p>
          </div>
        </div>
      </div>

      <div id="dealProducts">
        {deals.map((dealProduct) => (
          <Link
            key={dealProduct.id}
            to={`/products/${dealProduct.id}`}
            className="product-link"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img src={dealProduct.image} alt={dealProduct.name} />
            <p>{dealProduct.name}</p>
            <p className="discount">-{dealProduct.discount}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
