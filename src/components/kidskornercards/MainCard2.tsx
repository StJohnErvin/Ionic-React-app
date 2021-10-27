import React from "react";
import { IonCard, IonCardHeader, IonCardContent, IonItem } from "@ionic/react";
import Logo from "../../assets/kids korner/Hero images/nutritionv1.jpeg";
import { Link } from "react-router-dom";

function MainCard2() {
  return (
    <Link to="/kidskorner2" style={{ textDecoration: "none" }}>
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
          className="ion-no-padding "
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
              Timmy & Tammys health tips{" "}
            </h6>
          </IonItem>
        </IonCardContent>
      </IonCard>
    </Link>
  );
}

export default MainCard2;
