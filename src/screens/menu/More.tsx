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
import { Link } from "react-router-dom";

import React from "react";
import ToolBarNews from "../../components/bars/ToolBarNews";

import Profile from "../../assets/General icons/profile.svg";
import Register from "../../assets/General icons/plus-circle.svg";
import Team from "../../assets/General icons/team.svg";
import Referee from "../../assets/Role icons/referee.svg";
import SignOut from "../../assets/General icons/signout.svg";


const MenuPage: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <ToolBarNews />
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
     
              <Link to="/profile" style={{ textDecoration: "none" }}>

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
                  color:"primary"
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
                Profiles
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
        </IonCard>{" "}
        </Link>
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
                src={Register}
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
                Register
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
        </IonCard>{" "}
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
                src={Team}
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
                Team admin
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
        </IonCard>{" "}
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
                src={Referee}
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
                Referee
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
        </IonCard>{" "}
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
                src={SignOut}
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
                Sign out
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

export default MenuPage;
