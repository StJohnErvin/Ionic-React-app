import React from "react";
import { IonCard, IonCardHeader, IonCardContent, IonItem } from "@ionic/react";
import Pita from "../../../assets/kids korner/Recipe images/pita.png";
function PitaCard() {
  return (
    <IonCard
      className=" ion-no-padding  "
      mode="md"
      style={{
        border: "none !important",
        marginTop: "1rem",
        marginBottom: "1rem",
        color: "none !important",
      }}
    >
      <IonCardHeader
        mode="md"
        className="ion-no-padding"
        style={{ border: "none !important" }}
      >
        <img src={Pita} width="100%" height="100%" alt="" />
      </IonCardHeader>

      <IonCardContent
        className="ion-no-shadow ion-no-border card-blue"
        style={{ border: "none !important", color: "none !important" }}
      >
        <IonItem lines="none">
          <h6
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              color: "white",
              fontFamily: "MontserratBold !important",
            }}
          >
Pita pockets          </h6>
        </IonItem>
        <IonItem lines="none">
          <p
            style={{
              color: "#3C3835",
              fontWeight: "normal",
              fontSize: "16px",
            }}
          >
          Spread some hommus inside a wholemeal pita pocket, then fill with lots of colourful veggies, such as carrot, cucumber, lettuce, capsicum and tomato.
          </p>
        </IonItem>{" "}
        <IonItem lines="none">
        
        </IonItem>{" "}
      </IonCardContent>
    </IonCard>
  );
}

export default PitaCard;
