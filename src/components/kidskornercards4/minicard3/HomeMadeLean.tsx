import React from "react";
import { IonCard, IonCardContent } from "@ionic/react";

import "./style/minicard.css";
import Burger from "../../../assets/kids korner/Food/burger.png";

function TimeCard() {
  return (
    <IonCard
      className=" ion-no-padding ion-no-shadow ion-no-border  "
      style={{
        border: "none !important",
        marginTop: "1rem",
        marginBottom: "1rem",
        width: "100%",
        paddingRight: "",
        
      }}
    >
      <IonCardContent className="ion-no-shadow ion-no-border color-text">
        <p
          style={{
            fontWeight: "bold",

            fontSize: "16px",
            color: "#008174 !important",
            fontFamily: "Montserrat !important",
            textAlign: "left",
            lineHeight: "1.3rem",
          }}
        >
Homemade lean
burgers        </p>

        <img src={Burger} width="98%" height="100%" alt="" />
      </IonCardContent>
    </IonCard>
  );
}

export default TimeCard;
