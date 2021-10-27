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
  IonItemDivider,
  IonLabel,
  IonList,
  IonRow,
  
  IonToolbar,
} from "@ionic/react";
import React from "react";
import {
  americanFootball as americanIcon,

} from "ionicons/icons";
// import SampleCard from "../components/Cards";
import Logo from "../assets/Logo/logo.png";

// import {Link} from 'react-router-dom';
import Team from "../assets/Role icons/team.svg";
import Referee from "../assets/Role icons/referee.svg";
import Coach from "../assets/Role icons/coach.svg";
import Arrow from "../assets/General icons/arrow-right.svg";

const ChooseYourRole: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar color="primary" className="ion-align-items-stretch">
          <IonRow>
            <IonCol size="5">
              <div>
                <IonButton color="clear" size="small" slot="end" href="#">
                  <IonLabel style={{ size: "1px" }}>
                    <p style={{ color: "white" }}>Home</p>
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
Choose your role          </h6>
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
              I want to register as a…                </p>
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
              <IonIcon color="primary" icon={Team} /> Team
            </p>
          </IonItem>
          <IonItemDivider></IonItemDivider>
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
              <IonIcon color="primary" icon={americanIcon} /> Player
            </p>
          </IonItem>
          <IonItemDivider
            style={{ hieght: "-10% !important" }}
          ></IonItemDivider>{" "}
          <IonItem lines="none">
            <IonCheckbox
              mode="md"
              slot="end"
              color="primary"
              
              style={{ borderRadius: "0px !important" }}
            />
            <p
              style={{
                fontSize: "16px",
                color: "#3C3835",
                fontFamily: "Montserrat !important",
              }}
            >
              {" "}
              <IonIcon color="primary"  icon={Coach} /> Coach
            </p>
          </IonItem>
          <IonItemDivider style={{ hieght: "10%" }}></IonItemDivider>{" "}
          <IonItem lines="none">
            <IonCheckbox
              mode="md"
              slot="end"
              color="primary"
              style={{ borderRadius: "none" }}
            />
            <p
              style={{
                fontSize: "16px",
                color: "#3C3835",
                fontFamily: "Montserrat !important",
              }}
            >
              {" "}
              <IonIcon color="primary" icon={Referee} /> Referee
            </p>
          </IonItem>
          <IonList></IonList>
        </IonList>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem lines="none">
                <IonButton
                  expand="block"
                  
                  type="submit"
                  mode="md"
                  style={{ marginTop: "1rem", width: "100%", height:"50%" }}
                  color="primary"
                  size="large"
                  slot="start"
                  href="/choose_profile"
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

export default ChooseYourRole;
