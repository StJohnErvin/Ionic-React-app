/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line
import {
  IonApp,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import ProfileTool from "../../components/bars/ProfileTool";
import TeamSegments from "../../components/more/TeamSeg";


const ProfilePage: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <ProfileTool />
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <TeamSegments />
        <div>
          {" "}
          <h6
            style={{
              fontWeight: "bold",
              fontSize: "15px !important",
              color: "#008174",
              fontFamily: "MontserratBold !important",
              width: "100rem",
            }}
          >
            Team members{" "}
          </h6>
        </div>

        <IonList>
          <IonItem>
            <IonLabel>Pokémon Yellow</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Mega Man X</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>The Legend of Zelda</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Pac-Man</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Super Mario World</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonApp>
  );
};

export default ProfilePage;
