import React from "react";

function Main(props) {
  return (
    <>
      <main>
        <section>
          <div className="images">
            <img src={props.item.imageUrl} alt="travel-pic" />
          </div>

          <div>
            <div className="location">
              <i className="fa-solid fa-location-dot"></i>
              <span>{props.item.location}</span>

              <a
                href={props.item.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
              >
                view on Google Maps
              </a>
            </div>
            <h1>{props.item.title}</h1>
            <p className="date">
              {props.item.startDate} - {props.item.endDate}
            </p>
            <p className="details">{props.item.description}</p>
          </div>
        </section>
        <div className="line"></div>
      </main>
    </>
  );
}

export default Main;
