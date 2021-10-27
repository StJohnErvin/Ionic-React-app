// eslint-disable-next-line
import {
  IonApp,
  IonCard,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonNote,
  // IonItem,
  // IonList,
} from "@ionic/react";
import React from "react";
import ManageToolBar from "../../components/bars/ManageToolBar";

import SelectOpen from "../../components/competitions/ProfMenu";
import Segment from "../../components/competitions/CompeDraw";

const Ladder: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <ManageToolBar />
      </IonHeader>
      <IonContent className="ion-padding">
        <SelectOpen />
        <Segment />
        <h6
          style={{
            fontWeight: "bold",
            fontSize: "22px",
            color: "#008174",
            fontFamily: "MontserratBold !important",
          }}
        >
          Ladder{" "}
        </h6>{" "}
        <IonCard>
          <IonItem>
            <IonLabel>Pos</IonLabel>
            <IonNote slot="end" style={{ color: "#3C3835 !important" }}>
              P
            </IonNote>
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              W
            </IonNote>
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              L
            </IonNote>
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              D
            </IonNote>
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              B{" "}
            </IonNote>
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              +/-
            </IonNote>{" "}
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              Pts
            </IonNote>{" "}
          </IonItem>
          <IonItem>
            <IonLabel>DreamTeam</IonLabel>
            <IonNote slot="end" style={{ color: "#3C3835 !important" }}>
              1
            </IonNote>
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              1
            </IonNote>
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              0
            </IonNote>
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              0
            </IonNote>
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              0
            </IonNote>
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              0
            </IonNote>{" "}
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              8
            </IonNote>{" "}
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              2
            </IonNote>
          </IonItem>
          <IonItem>
            <IonLabel>DreamTeam</IonLabel>
            <IonNote slot="end" style={{ color: "#3C3835 !important" }}>
              1
            </IonNote>
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              1
            </IonNote>
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              0
            </IonNote>
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              0
            </IonNote>
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              0
            </IonNote>
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              0
            </IonNote>{" "}
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              8
            </IonNote>{" "}
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              2
            </IonNote>
          </IonItem>{" "}
          <IonItem>
            <IonLabel>DreamTeam</IonLabel>
            <IonNote slot="end" style={{ color: "#3C3835 !important" }}>
              1
            </IonNote>
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              1
            </IonNote>
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              0
            </IonNote>
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              0
            </IonNote>
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              0
            </IonNote>
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              0
            </IonNote>{" "}
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              8
            </IonNote>{" "}
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              2
            </IonNote>
          </IonItem>{" "}
          <IonItem>
            <IonLabel>DreamTeam</IonLabel>
            <IonNote slot="end" style={{ color: "#3C3835 !important" }}>
              1
            </IonNote>
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              1
            </IonNote>
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              0
            </IonNote>
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              0
            </IonNote>
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              0
            </IonNote>
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              0
            </IonNote>{" "}
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              8
            </IonNote>{" "}
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              2
            </IonNote>
          </IonItem>{" "}
          <IonItem lines="none">
            <IonLabel>DreamTeam</IonLabel>
            <IonNote slot="end" style={{ color: "#3C3835 !important" }}>
              1
            </IonNote>
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              1
            </IonNote>
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              0
            </IonNote>
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              0
            </IonNote>
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              0
            </IonNote>
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              0
            </IonNote>{" "}
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              8
            </IonNote>{" "}
            <IonNote slot="end" style={{ color: "#3C3835" }}>
              2
            </IonNote>
          </IonItem>
        </IonCard>
        <h6
          style={{
            fontWeight: "bold",
            fontSize: "22px",
            color: "#008174",
            fontFamily: "MontserratBold !important",
          }}
        >
          Top try scorers{" "}
        </h6>
        <IonCard>
          <IonItem lines="none">
            <IonLabel>Mark Gasnier</IonLabel>
            <IonNote slot="end" style={{ color: "#3C3835 !important" }}>
              4 tries
            </IonNote>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonItem lines="none">
            <IonLabel>Mark Gasnier</IonLabel>
            <IonNote slot="end" style={{ color: "#3C3835 !important" }}>
              4 tries
            </IonNote>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonItem lines="none">
            <IonLabel>Mark Gasnier</IonLabel>
            <IonNote slot="end" style={{ color: "#3C3835 !important" }}>
              4 tries
            </IonNote>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonItem lines="none">
            <IonLabel>Mark Gasnier</IonLabel>
            <IonNote slot="end" style={{ color: "#3C3835 !important" }}>
              4 tries
            </IonNote>
          </IonItem>
        </IonCard>
      </IonContent>
    </IonApp>
  );
};

export default Ladder;
