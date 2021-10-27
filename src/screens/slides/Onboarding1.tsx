// eslint-disable-next-line
import {
  IonApp,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonLabel,
  IonRow,
  IonSlide,
  IonSlides,
} from "@ionic/react";
import React from "react";

import arrow from "../../assets/General icons/arrow-right.svg";
import onboard1 from "../../assets/onboarding1.png";

const OnBoardingPage: React.FC = () => {
  // const slideOpts = {
  //   initialSlide: 1,
  //   speed: 400,
  // };
  return (
    <IonApp>
      <IonHeader></IonHeader>

      <IonContent>
        <IonGrid fixed={true}>
        <IonRow className=" ion-align-items-stretch">
            <IonCol></IonCol>
            <IonCol></IonCol>
            <IonCol>
              <IonButton
                mode="md"
                style={{ width: "80px" }}
                color="warning"
                size="small"
                href="/register"
              >
                <IonLabel mode="md" style={{ size: "13px", color: "white" }}>
                  Skip <IonIcon icon={arrow} />
                </IonLabel>
              </IonButton>
            </IonCol>
          </IonRow><IonRow className=" ion-align-items-stretch">
            <IonCol></IonCol>
            <IonCol></IonCol>
            <IonCol>
            <IonSlides pager={true} style={{ height: "100%" }}>
          <IonSlide className="ion-padding">
            <IonCol style={{ alignItems: "center" }}>
              <img
                src={onboard1}
                alt=""
                style={{
                  width: "100%",
                }}
              />
              <h6
                className="ion-text-left ion-padding"
                id=""
                style={{
                  fontWeight: "bold",
                  fontSize: "22px",
                  color: "#008174",
                  fontFamily: "MontserratBold !important",
                  lineHeight: 0.1,
                }}
              >
                What is Tri Tag Rugby ?{" "}
              </h6>{" "}
              <p
                className="ion-text-justify ion-padding"
                style={{
                  fontSize: "16px",
                  color: "#3C3835",
                  fontFamily: "Montserrat !important",
                }}
              >
                Tri Tag Rugby is a minimal contact, low injury risk,
                attack-based rugby union game that incorporates the skill set
                and fabric of traditional rugby
              </p>
              <IonButton
                className="ion-padding"
                expand="block"
                size="small"
                mode="md"
                style={{
                  marginBottom: "2.2rem",
                  width: "100%",
                  height: "50% !important",
                }}
              >
                Next <IonIcon style={{ marginLeft: "10px" }} icon={arrow} />
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
              >
              </IonButton>
            </IonCol>
          </IonSlide>
          
          <IonSlide className="ion-padding">
            <IonCol size="12" style={{ alignItems: "center" }}>
            <img
                src={onboard1}
                alt=""
                style={{
                  width: "100%",
                }}
              />
              <h6
                className="ion-text-left ion-padding"
                id=""
                style={{
                  fontWeight: "bold",
                  fontSize: "22px",
                  color: "#008174",
                  fontFamily: "MontserratBold !important",
                  lineHeight: 0.1,
                }}
              >
                What is Tri Tag Rugby ?{" "}
              </h6>{" "}
              <p
                className="ion-text-justify ion-padding"
                style={{
                  fontSize: "16px",
                  color: "#3C3835",
                  fontFamily: "Montserrat !important",
                }}
              >
                Tri Tag Rugby is a minimal contact, low injury risk,
                attack-based rugby union game that incorporates the skill set
                and fabric of traditional rugby
              </p>
              <IonButton
                className="ion-padding"
                expand="block"
                size="small"
                mode="md"
                style={{
                  marginBottom: "2.2rem",
                  width: "100%",
                  height: "50% !important",
                }}
              >
                Next <IonIcon style={{ marginLeft: "10px" }} icon={arrow} />
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
              >
              </IonButton>
            </IonCol>
             {/* <IonGrid></IonGrid>  */}
             
          </IonSlide>{" "}
          <IonSlide className="ion-padding">
            <IonCol size="12" style={{ alignItems: "center" }}>
            <img
                src={onboard1}
                alt=""
                style={{
                  width: "100%",
                }}
              />
              <h6
                className="ion-text-left ion-padding"
                id=""
                style={{
                  fontWeight: "bold",
                  fontSize: "22px",
                  color: "#008174",
                  fontFamily: "MontserratBold !important",
                  lineHeight: 0.1,
                }}
              >
                What is Tri Tag Rugby ?{" "}
              </h6>{" "}
              <p
                className="ion-text-justify ion-padding"
                style={{
                  fontSize: "16px",
                  color: "#3C3835",
                  fontFamily: "Montserrat !important",
                }}
              >
                Tri Tag Rugby is a minimal contact, low injury risk,
                attack-based rugby union game that incorporates the skill set
                and fabric of traditional rugby
              </p>
           
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
                Find now{" "}
              </IonButton>
              <IonButton
                className="ion-padding"
                expand="block"
                size="small"
                mode="md"
                fill="outline"
                style={{
                  width: "100%",
                }}
              >
                Maybe later
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
              >
              </IonButton>








            </IonCol>

          
            <IonGrid  ></IonGrid>
          </IonSlide>{" "}
         
        </IonSlides>
            </IonCol>
          </IonRow>

        </IonGrid>

       
      </IonContent>
    </IonApp>
  );
};

export default OnBoardingPage;
