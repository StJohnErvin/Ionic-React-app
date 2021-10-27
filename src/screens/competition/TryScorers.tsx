/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line
import {
  IonApp,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonList,
  IonRow,
  // IonItem,
  // IonList,
} from "@ionic/react";
import React from "react";
import ManageToolBar from "../../components/bars/ManageToolBar";
import Card from "../../components/competitions/DynamicCard";

import Logo from "../../assets/Role icons/referee.svg";

const TryScorers: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <ManageToolBar />
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
        <Card/>
          <IonItem lines="none">
            <IonRow>
              <IonCol offset-4></IonCol>
              <IonRow></IonRow>
              <IonCol size="md"></IonCol>
            </IonRow>
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
                    }}
                    src={Logo}
                  />
                </div>

                <div>
                  <h6
                    style={{
                      fontWeight: "bold",
                      fontSize: "15px !important",
                      color: "#3C3835",
                      fontFamily: "MontserratBold !important",
                      marginBottom: "-1rem ",
                      width: "100rem",
                    }}
                  >
                    Referee
                  </h6>

                  <p
                    style={{
                      fontWeight: "normal",
                      fontSize: "14px",
                      color: "#3C3835",
                      fontFamily: "Montserrat !important",
                    }}
                  >
                    Mark Gasnier{" "}
                  </p>
                </div>
              </IonItem>
            </IonCard>
          </IonItem>
        </IonList>
        <h6
          style={{
            fontWeight: "bold",
            fontSize: "22px",
            color: "#008174",
            fontFamily: "MontserratBold !important",
          }}
        >
          Try Scorers
        </h6>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardContent>
                  <h6
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      color: "#008174",
                      fontFamily: "MontserratBold !important",
                    }}
                  >
                    Home{" "}
                  </h6>

                  <p>The A-Team</p>
                  <IonList>name 1</IonList>
                  <IonList>name 2</IonList>

                  <IonList>name 3</IonList>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol>
              <IonCard>
                <IonCardContent>
                  <h6
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      color: "#008174",
                      fontFamily: "MontserratBold !important",
                    }}
                  >
Away                  </h6>

                  <p>Dream Team</p>
                  <IonList>name 1</IonList>
                  <IonList>name 2</IonList>

                  <IonList>name 3</IonList>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default TryScorers;
