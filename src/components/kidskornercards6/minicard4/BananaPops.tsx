import React from "react";
import { IonCard, IonCardHeader, IonCardContent, IonItem } from "@ionic/react";
import Banana from "../../../assets/kids korner/Recipe images/banana-pops.png";
function BananaCard() {
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
        <img src={Banana} width="100%" height="100%" alt="" />
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
            Banana pops{" "}
          </h6>
        </IonItem>
        <IonItem lines="none">
          <p
            style={{
              color: "#3C3835",
              fontWeight: "normal",
              fontSize: "16px",
            }}
          >
            Looking for an icy cold snack? Peel bananas and cut them in half. Insert paddle pop sticks into the end of each banana and dip in yoghurt. Roll in coconut then freeze for 1 - 2 hours.
          </p>
        </IonItem>{" "}
        <IonItem lines="none"></IonItem>{" "}
      </IonCardContent>
    </IonCard>
  );
}

export default BananaCard;
