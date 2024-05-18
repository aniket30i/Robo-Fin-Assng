import React from "react";
import styles from "./Events.module.css";
import pin from "../assets/pictures/pin.png";
import clock from "../assets/pictures/clock.png";
import art1 from "../assets/pictures/artist3.jpeg";
import art2 from "../assets/pictures/artist2.jpg";
import art3 from "../assets/pictures/artist1.jpeg";
import qr from "../assets/pictures/qr_code.png";

function Events() {
  return (
    <div className={styles.overTransLayerEv}>
      <div className={styles.eventImgRun}>Running images</div>
      <div className={styles.venueStrip}>Running venue strip</div>

      <div className={styles.semSidePanel}>
        <div className={styles.tagLine}>
          <h2>Explore Your First</h2>
          <h2>Event</h2>
        </div>
        <div className={styles.focusBox}>
          <div className={styles.focusName}>
            <h1>Event Name</h1>
          </div>
          <div className={styles.subFocus}>
            <span className={styles.pin}>
              <img src={pin}></img>
              <h3>Venue</h3>
            </span>
            <span className={styles.dateTime}>
              <img src={clock}></img>
              <h3>04/3/2024 @19:00</h3>
            </span>
          </div>
          <div className={styles.focusDetails}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
              assumenda harum aut consequuntur, vel atque voluptas. Voluptatum
              ducimus nostrum.
            </p>
          </div>
        </div>
        <div className={styles.tagSubFocus}>
          <h2>Artist Lineup</h2>
          <div className={styles.imgFocus}>
            <span>
              <img src={art1} alt="xyz" />
            </span>

            <span>
              <img src={art2} alt="xyz" />
            </span>

            <span>
              <img src={art3} alt="xyz" />
            </span>
          </div>
        </div>
        <div className={styles.userInteraction}>
          <div className={styles.qrcontainer}>
            <img className={styles.qrcode} src={qr} alt="" />
          </div>
          <div className={styles.joinBtn}>
            <p>Join Waitlist</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;