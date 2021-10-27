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
import ProfileTool from "../../components/bars/ProfileTool";

import Pin from "../../assets/General icons/map-pin.svg";

const ProfilePage: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <ProfileTool />
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
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
            Your Teams{" "}
          </h6>
        </div>

        <IonCard>
          <IonItem lines="none">
            <div slot="start">
              {/* <img
                style={{
                  width: "100% !important",
                  height: " 100% !important",
                  maxWidth: " 50px !important",
                  maxHeight: "100px !important",
                  marginTop: "0.5rem",
                  color: "primary",
                }}
                src={Profile}
              /> */}
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
                The A-Team{" "}
              </h6>
              <div slot="end"></div>

              <p
                style={{
                  fontWeight: "normal",
                  fontSize: "14px",
                  color: "#3C3835",
                  fontFamily: "Montserrat !important",
                }}
              >
                Open Mixed Monday
              </p>
            </div>
          </IonItem>
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
                src={Pin}
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
                Sydney Rugby Union{" "}
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
        </IonCard>
      </IonContent>
    </IonApp>
  );
};

export default ProfilePage;
