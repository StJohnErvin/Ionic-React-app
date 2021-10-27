import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonItem,
} from "@ionic/react";
import Logo from "../../assets/article.jpeg";
import { Link } from "react-router-dom";

function SampleCard() {
  return (
    <Link to="/article" style={{ textDecoration: "none" }}>
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
          <img src={Logo} width="100%" height="100%" alt="" />
        </IonCardHeader>

        <IonCardContent
          className="ion-no-shadow ion-no-border"
          style={{ border: "none !important", color: "none !important" }}
        >
          <IonItem lines="none">
            <h6
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                color: "#3C3835",
                fontFamily: "MontserratBold !important",
              }}
            >
              Lorem ipsum dolor sit amet consectetur
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt …{" "}
            </p>
          </IonItem>{" "}
          <IonItem lines="none">
            <p
              style={{
                color: "#3C3835",
                fontWeight: "normal",
                fontSize: "14px",
              }}
            >
              13 mins ago
            </p>
          </IonItem>
        </IonCardContent>
      </IonCard>
    </Link>
  );
}

export default SampleCard;
