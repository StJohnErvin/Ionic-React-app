/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonIcon,
  IonRow,
} from "@ionic/react";
import Calendar from "../../assets/General icons/calendar.svg";
import Clock from "../../assets/General icons/clock.svg";
import Pins from "../../assets/General icons/map-pin.svg";

// const cardInfo = [
//   { Date: "", IonButton2: "VS" },
//   { IonButton: "", IonButton2: "Final" },
//   { IonButton: "" },
//   { IonButton: "" },
// ];

function DynamicCard(index) {
  return (
    <IonCard key={index}>
      <IonCardContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonIcon icon={Calendar} />7/10/2021
            </IonCol>
            <IonCol></IonCol>
            <IonCol>
              <IonIcon icon={Clock} /> 6:00 pm
            </IonCol>
          </IonRow>
          <br></br>

          <IonRow>
            <IonCol>Team name</IonCol>
            <IonCol>
              <IonButton style={{ height: "25px" }}>VS</IonButton>
            </IonCol>
            <IonCol>Long team name</IonCol>
          </IonRow>

          <br></br>
          <IonRow>
            <IonCol></IonCol>
            <IonCol size="10">
              <IonIcon icon={Pins} /> Redfern Oval, Field 3{" "}
            </IonCol>
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
}

export default DynamicCard;
