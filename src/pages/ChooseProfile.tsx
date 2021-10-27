// eslint-disable-next-line
import {
  IonApp,
  IonButton,
  IonCheckbox,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import {

} from "ionicons/icons";
import Logo from "../assets/Logo/logo.png";


import Arrow from "../assets/General icons/arrow-right.svg";
import Profile from "../assets/General icons/profile.svg";
import NewMember from "../assets/General icons/plus-circle.svg";

const ChooseProfile: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary" className="ion-align-items-stretch">
          <IonRow>
            <IonCol size="5">
              <div>
                <IonButton color="clear" size="small" slot="end" href="#">
                  <IonLabel style={{ size: "1px" }}>
                    <p style={{ color: "white" }}>test</p>
                  </IonLabel>
                </IonButton>
              </div>
            </IonCol>
            <IonCol size="4">
              <div>
                <img
                  style={{ marginLeft: "1rem" }}
                  color="light !important"
                  src={Logo}
                  width="50"
                  height="30"
                  alt=""
                />
              </div>
            </IonCol>
            <IonCol size="1">
              {" "}
              <div></div>
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem lines="none">
          <h6
            id=""
            style={{
              fontWeight: "bold",
              fontSize: "22px",
              color: "#008174",
              fontFamily: "MontserratBold !important",
            }}
          >
            Choose your role{" "}
          </h6>
        </IonItem>
        <IonItem lines="none">
          {" "}
          <p
            style={{
              fontSize: "16px",
              color: "#3C3835",
              fontFamily: "Montserrat !important",
            }}
          >
            I want to register as a…{" "}
          </p>
        </IonItem>
        <IonList>
          <IonItem lines="none">
            <IonCheckbox mode="md" slot="end" color="primary" />
            <p
              style={{
                fontSize: "16px",
                color: "#3C3835",
                fontFamily: "Montserrat !important",
              }}
            >
              {" "}
              <IonIcon color="primary" icon={Profile} /> Ben Trevisiol
            </p>
          </IonItem>

          <IonItem lines="none">
            <IonCheckbox mode="md" slot="end" color="primary" />
            <p
              style={{
                fontSize: "16px",
                color: "#3C3835",
                fontFamily: "Montserrat !important",
              }}
            >
              {" "}
              <IonIcon color="primary" icon={NewMember} /> New Member
            </p>
          </IonItem>
        </IonList>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem lines="none">
                <IonButton
                  expand="block"
                  type="submit"
                  mode="md"
                  style={{ marginTop: "1rem", width: "100%", height: "50%" }}
                  color="primary"
                  size="large"
                  slot="start"
                  href="/chose_profile"
                >
                  <p style={{ color: "white", fontSize: "13px" }}>
                    Next <IonIcon icon={Arrow} />
                  </p>
                </IonButton>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>{" "}
      </IonContent>
    </IonApp>
  );
};

export default ChooseProfile;
