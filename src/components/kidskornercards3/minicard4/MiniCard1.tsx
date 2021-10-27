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
Don’t forget to hydrate!        </p>{" "}
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
        Water is essential for our bodies. When playing sport, we sweat more than usual, which is one of the ways our body loses water.
        </p>    <p
          style={{
            fontWeight: "normal",
            fontSize: "16px",
            color: "white",
            fontFamily: "Montserrat !important",
            textAlign: "left",
            lineHeight: "1.3rem",
          }}
        >
Make sure you drink water throughout the day leading up to the game to prevent dehydration and help keep your body cool.        </p>
      
      </IonCardContent>
    </IonCard>
  );
}

export default SampleCard;
