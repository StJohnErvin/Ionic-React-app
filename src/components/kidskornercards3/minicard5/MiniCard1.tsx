import React from "react";
import { IonCard, IonCardContent} from "@ionic/react";

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
      <IonCardContent className="ion-no-shadow ion-no-border card-pink">
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
Tip!       </p>{" "}
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
Freeze your water bottle overnight and pop it in your lunch box to keep your lunch cool until you’re ready to eat, or make sure you pack an ice brick.        </p>    <p
          style={{
            fontWeight: "normal",
            fontSize: "16px",
            color: "white",
            fontFamily: "Montserrat !important",
            textAlign: "left",
            lineHeight: "1.3rem",
          }}
        >
     </p>
      
      </IonCardContent>
    </IonCard>
  );
}

export default SampleCard;
