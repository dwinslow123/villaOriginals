import React from "react";
import styles from "./Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
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
        </div>
    );
};
export default App;
