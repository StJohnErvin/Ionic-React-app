/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line
import {
  IonApp,
  IonButton,

  IonContent,

  IonHeader,
  IonIcon,
  IonItem,
  IonList,

  // IonItem,
  // IonList,
} from "@ionic/react";
import React from "react";
import ManageToolBar from "../../components/bars/ManageToolBar";
import Add from "../../assets/General icons/add.svg";
import Remove from "../../assets/General icons/remove.svg";

import Logo from "../../assets/General icons/logo.svg";
import { Link } from "react-router-dom";

const ManageCompetitions: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <ManageToolBar />
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem lines="none">
            <h6
              style={{
                fontWeight: "bold",
                fontSize: "22px !important",
                color: "#008174",
                fontFamily: "MontserratBold !important",

                width: "1000rem",
              }}
            >
              Manage competitions{" "}
            </h6>
          </IonItem>

          <IonItem>
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
                    color: "#008174",
                    fontFamily: "MontserratBold !important",
                    marginBottom: "-1rem ",
                    width: "1000rem",
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
              <div slot="end" style={{ marginLeft: "5rem" }}>
                <IonIcon icon={Remove} />
              </div>
            </IonItem>
          </IonItem>

          <IonItem>
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
                    width: "1000rem",
                  }}
                >
                  Junior Girls Wednesday
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
              <div slot="end" style={{ marginLeft: "5rem" }}>
                <IonIcon icon={Remove} />
              </div>
            </IonItem>
          </IonItem>
          <IonItem lines="none">
            {" "}
            <Link to="/addcompetitions" style={{ textDecoration: "none" }}>
              <p>
                <IonIcon color="primary" icon={Add} /> Add another competition
              </p>{" "}
            </Link>
          </IonItem>
        </IonList>

        <div>
          <IonButton
            className="ion-padding"
            expand="block"
            size="small"
            mode="md"
            style={{
              width: "100%",
              // height: "100%",
            }}
          >
            Save{" "}
          </IonButton>
          <IonButton
            className="ion-padding"
            expand="block"
            size="small"
            mode="md"
            fill="outline"
            style={{
              width: "100%",
              color: "black",
            }}
          >
            Cancel{" "}
          </IonButton>

          <IonButton
            className="ion-padding"
            expand="block"
            size="small"
            mode="md"
            fill="clear"
            style={{
              width: "100%",
            }}
          ></IonButton>
        </div>
      </IonContent>
    </IonApp>
  );
};

export default ManageCompetitions;
