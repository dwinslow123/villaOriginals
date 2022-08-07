import React from "react";
import ReactGA from "react-ga";
import styles from "./Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
    /**
     * mapSelector checks the current browser before deciding to open in Apple Maps or Google Maps.
     */
    const mapSelector = () => {
        if (
            navigator.userAgent.platform.indexOf("iPhone") !== -1 ||
            navigator.userAgent.platform.indexOf("iPad") !== -1 ||
            navigator.userAgent.platform.indexOf("iPod") !== -1
        ) {
            window.open(
                "maps://www.google.com/maps/place/26+S+Villa+Ave,+Villa+Park,+IL+60181/@41.8891481,-87.9720645,17z/data=!3m1!4b1!4m5!3m4!1s0x880e4cd90ba946fd:0xaca2ef0eb8bb9c27!8m2!3d41.8891441!4d-87.9698705"
            );
        }
    };

    return (
        <div className={styles.App}>
            <div className={styles.welcomeMessage}>
                <h4 className={styles.name}>Villa Originals</h4>
                <p className={styles.top}>
                    Villa Originals is an independently owned and operated hair salon that
                    has been making the people of the western suburbs beautiful since the
                    early 1960&#39;s. We are a fun loving group of experienced hairstylists
                    that really love what we do and can create the look that you want.
                </p>
                <p className={styles.bottom}>
                    Our customers are like family to us, and we enjoy listening to them
                    and giving them quality service and style. It&#39;s the type of salon and
                    friendly atmosphere{" "}
                    <span className="cheers">&#34;Where everybody knows your name&#34;</span> and
                    we look forward to meeting you!
                </p>
            </div>
            <div className={styles.contactBox}>
                <div className={styles.contactCard}>
                    <div className={styles.addressBlock}>
                        <div className={styles.cardTitle}>
                            <h4>Stop By</h4>
                        </div>
                        <div>
                            <p className="lead text-center">We are located at:</p>
                            <address>
                                <a href="https://goo.gl/maps/9iYz4N7VCus" onClick={mapSelector}>
                                    26 S. Villa Ave
                                    <br/>
                                    Villa Park, IL 60181
                                </a>
                            </address>
                        </div>
                    </div>
                    <div className={styles.phoneBlock}>
                        <div className={styles.cardTitle}>
                            <h4>Give us a call</h4>
                        </div>
                        <p className="lead text-center">
                            You can call us here:
                            <br/> <a href="tel:630-833-6777">(630) 833-6777</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default App;
