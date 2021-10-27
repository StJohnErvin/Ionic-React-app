/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line
import {
  IonApp,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonSearchbar,
  // IonItem,
  // IonList,
} from "@ionic/react";
import React, { useState } from "react";
import ManageToolBar from "../../components/bars/ManageToolBar";
import Logo from "../../assets/General icons/logo.svg";
import Add from "../../assets/General icons/add.svg";

const AddCompetitions: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <IonApp>
      <IonHeader>
        <ManageToolBar />
      </IonHeader>
      <IonContent className="ion-padding">
        <IonSearchbar
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
        ></IonSearchbar>

        <IonList>
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
                    width: "100rem",
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
                <IonIcon icon={Add} />
              </div>
            </IonItem>
          </IonItem>
          <IonItem>
            {" "}
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
                    width: "100rem",
                  }}
                >
                  Junior Girls Wednesday{" "}
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
                <IonIcon icon={Add} />
              </div>
            </IonItem>
          </IonItem>
        </IonList>
      </IonContent>
    </IonApp>
  );
};

export default AddCompetitions;
