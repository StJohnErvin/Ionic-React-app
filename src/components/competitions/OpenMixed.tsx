/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {

  IonGrid,

  IonItem,

} from "@ionic/react";
import Settings from "../../assets/General icons/logo.svg";

function OpenMixed() {
  return (
    <IonGrid>
      <IonItem lines="none"></IonItem>
      <IonItem>
        <IonItem lines="none">
          <div slot="start">
            <img style={{}} src={Settings} />
          </div>

          <div style={{ width: "100rem" }}>
            <h6
              style={{
                fontWeight: "bold",
                fontSize: "15px !important",
                color: "#008174",
                fontFamily: "MontserratBold !important",
                marginBottom: "-1rem ",
                width: "100%",
              }}
            >
              Open Mixed Monday{" "}
            </h6>

            <p
              style={{
                fontWeight: "normal",
                fontSize: "14px",
                color: "#3C3835",
                fontFamily: "Montserrat !important",
              }}
            >
              Sydney Rugby Union{" "}
            </p>
          </div>
          <div slot="end" style={{ marginLeft: "5rem" }}></div>
        </IonItem>
      </IonItem>
    </IonGrid>
  );
}

export default OpenMixed;
