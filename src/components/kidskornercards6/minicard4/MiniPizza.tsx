import React from "react";
import { IonCard, IonCardHeader, IonCardContent, IonItem } from "@ionic/react";
import MiniPizza from "../../../assets/kids korner/Recipe images/mini-pizza.png";
import './style/minicard.css';

function MiniPizaCard() {
  return (
    <IonCard
      className=" ion-no-padding "
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
        <img src={MiniPizza} width="100%" height="100%" alt="" />
      </IonCardHeader>

      <IonCardContent
        className="card-blue"
        style={{ border: "none !important"}}
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
            Mini pizza muffins{" "}
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
            Spread English muffins with tomato paste, then add toppings of your
            choice, such as diced capsicum, sliced mushrooms and diced lean ham.{" "}
          </p>
        </IonItem>{" "}
        <IonItem lines="none">
          <p
            style={{
              color: "#3C3835",
              fontWeight: "normal",
              fontSize: "16px",
            }}
          >
            Sprinkle with grated cheese and pop in the oven for about 10 minutes
            until golden brown.{" "}
          </p>
        </IonItem>{" "}
      </IonCardContent>
    </IonCard>
  );
}

export default MiniPizaCard;
