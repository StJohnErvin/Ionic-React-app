import React from "react";
import { IonCard, IonCardContent } from "@ionic/react";

import "./style/minicard.css";

function SampleCard() {
  return (
    <IonCard
      className=" ion-no-padding ion-no-shadow ion-no-border  "
      style={{
        border: "none !important",
        marginTop: "1rem",
        marginBottom: "1rem",
        color: "dark",
        width:"100%",
        paddingRight:''
      }}
    >
      <IonCardContent className="ion-no-shadow ion-no-border card-purple">
        <p
          style={{
            fontWeight: "bold",
            fontSize: "16px",
            color: "white",
            fontFamily: "Montserrat !important",
            marginTop: "-.5rem",
            lineHeight: "1.5rem",
            textAlign: "left",
          }}
        >
          Did you know?{" "}
        </p>{" "}
        <p
          style={{
            fontWeight: "normal",
            fontSize: "16px",
            color: "white",
            fontFamily: "Montserrat !important",
            textAlign: "left",
            lineHeight: "1.3rem",
          }}
        >
          Our muscles store carbohydrates which can be used for energy to do
          exercise? This is called glycogen.{" "}
        </p>
      
      </IonCardContent>
    </IonCard>
  );
}

export default SampleCard;
