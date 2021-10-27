import React from "react";
import { IonCard, IonCardContent } from "@ionic/react";

import "./style/minicard.css";
import FruitYoghurt from "../../../assets/kids korner/Food/fruit-yoghurt.png";
function TimeCard() {
  return (
    <IonCard
      className=" ion-no-padding ion-no-shadow ion-no-border  "
      style={{
        border: "none !important",
        marginTop: "1rem",
        // marginBottom: "1rem",
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
            lineHeight: "1.4rem",
            textAlign:'left'
          }}
        >
Fruit & yoghurt       </p>
  

        <img src={FruitYoghurt} width="98%" height="90%" alt="" />
      </IonCardContent>
    </IonCard>
  );
}

export default TimeCard;
