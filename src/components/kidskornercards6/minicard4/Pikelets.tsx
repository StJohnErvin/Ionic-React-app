import React from "react";
import { IonCard, IonCardHeader, IonCardContent, IonItem } from "@ionic/react";
import Pikilets from "../../../assets/kids korner/Recipe images/pikelets.png";
function PikiletsCard() {
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
        <img src={Pikilets} width="100%" height="100%" alt="" />
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
Pikelets          </h6>
        </IonItem>
        <IonItem lines="none">
          <p
            style={{
              color: "#3C3835",
              fontWeight: "normal",
              fontSize: "16px",
            }}
          >
Pair with different sides, such as yoghurt, banana, strawberries, blueberries… The options are endless!          </p>
        </IonItem>{" "}
        <IonItem lines="none">
         
        </IonItem>{" "}
      </IonCardContent>
    </IonCard>
  );
}

export default PikiletsCard;
