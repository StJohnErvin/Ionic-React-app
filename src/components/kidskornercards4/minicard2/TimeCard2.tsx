import React from "react";
import { IonCard, IonCardContent} from "@ionic/react";

import "./style/minicard.css";

function TimeCard() {
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
      <IonCardContent className="ion-no-shadow ion-no-border card-orange">
  
        <p
          style={{
            fontWeight: "bold",

            fontSize: "16px",
            color: "white",
            fontFamily: "Montserrat !important",
            textAlign: "center",
            lineHeight: "1.3rem",
          }}
        >
30 minutes post-game snack        </p>
      
      </IonCardContent>
    </IonCard>
  );
}

export default TimeCard;
