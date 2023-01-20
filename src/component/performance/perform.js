import React from "react";
import Bar from "./bar";
import "./perform.css";

export default function perform() {
  return (
    <React.Fragment>
      <div className="perform">
        <div className="left-side">
          <h1>Trydo Performnce</h1>
          <p>
            Trydo Page speed is so faster and takes byte times for load each
            page. It's is very easy to use, loads faster and provides better
            performance for your wedsite.
          </p>
        </div>
        <div className="right-side">
          <h3>Gtmetrix Scores</h3>
          <Bar perc="100%" title="Page Speed" />
          <Bar perc="100%" title="YSlow" />
          <Bar perc="100%" title="Fully Loaded" />
        </div>
      </div>
    </React.Fragment>
  );
}
