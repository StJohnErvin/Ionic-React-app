/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line
import {
  IonApp,
  IonCard,
  IonContent,
  IonHeader,
  IonItem,
  IonToolbar,
} from "@ionic/react";

import React from "react";
import ToolBarNews from "../../components/bars/ToolBarArticle";

import Card from "../../components/competitions/DynamicCard";
import Ball from "../../assets/General icons/ball.svg";
import Note from "../../assets/General icons/notes.svg";


const MenuPage: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <ToolBarNews />
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <Card />
        <IonItem lines="none">
        <IonCard style={{ width: "100%" }}>
          <IonItem lines="none">
            <div slot="start">
              <img
                style={{
                  width: "100% !important",
                  height: " 100% !important",
                  maxWidth: " 50px !important",
                  maxHeight: "100px !important",
                  marginTop: "0.5rem",
                  color: "primary",
                }}
                src={Ball}
              />
            </div>

            <div>
              <h6
                style={{
                  fontWeight: "bold",
                  fontSize: "15px !important",
                  color: "#3C3835",
                  fontFamily: "MontserratBold !important",
                  width: "100rem",
                }}
              >
Match scoring              </h6>

              <p
                style={{
                  fontWeight: "normal",
                  fontSize: "14px",
                  color: "#3C3835",
                  fontFamily: "Montserrat !important",
                }}
              ></p>
            </div>
          </IonItem>
        </IonCard>{" "}</IonItem>



        <IonItem lines="none">

        <IonCard style={{ width: "100%" }}>
          <IonItem lines="none">
            <div slot="start">
              <img
                style={{
                  width: "100% !important",
                  height: " 100% !important",
                  maxWidth: " 50px !important",
                  maxHeight: "100px !important",
                  marginTop: "0.5rem",
                  color: "primary",
                }}
                src={Note}
              />
            </div>

            <div>
              <h6
                style={{
                  fontWeight: "bold",
                  fontSize: "15px !important",
                  color: "#3C3835",
                  fontFamily: "MontserratBold !important",
                  width: "100rem",
                }}
              >
Incident form              </h6>

              <p
                style={{
                  fontWeight: "normal",
                  fontSize: "14px",
                  color: "#3C3835",
                  fontFamily: "Montserrat !important",
                }}
              ></p>
            </div>
          </IonItem>
        </IonCard>{" "}
        </IonItem>



      </IonContent>
    </IonApp>
  );
};

export default MenuPage;
