import React from "react";
import { IonCard, IonCardContent, IonGrid, IonRow } from "@ionic/react";

import "./style/minicard.css";


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
On the side        </p>
<IonGrid>
<IonRow>
         

</IonRow>
        </IonGrid>


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
Piece of fruit, yoghurt or glass of milk  </p>
      </IonCardContent>
    </IonCard>
  );
}

export default TimeCard;
