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
import { Link } from "react-router-dom";

import ProfileTool from "../../components/bars/ProfileTool";

import Profile from "../../assets/General icons/profile.svg";

const ProfilePage: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <ProfileTool />
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <Link to="/manageprofile" style={{ textDecoration: "none" }}>

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
                src={Profile}
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
                Ben Trevisiol{" "}
              </h6>

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
        </IonCard>{" "}</Link>


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
                src={Profile}
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
Mark Gasnier              </h6>

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
      </IonContent>
    </IonApp>
  );
};

export default ProfilePage;
