import React from "react";
import { IonCard, IonCardContent, IonCol, IonGrid, IonRow } from "@ionic/react";
import Logo from "../../../assets/kids korner/Food/Food_Chart.png";
import { Link } from "react-router-dom";
import "./style/minicard.css";

function SampleCard() {
  return (
    <Link to="/foodchart" style={{ textDecoration: "none" }}>
      <IonCard
        className=" ion-no-padding  "
        style={{
          border: "none !important",
          marginTop: "1rem",
          marginBottom: "1rem",
          color: "dark",
        }}
      >
        <IonCardContent className="ion-no-shadow ion-no-border card-red">
          <IonGrid fixed={true}>
            <IonRow>
              <IonCol style={{ marginBottom: "0 !important" }}>
                {" "}
                <p
                  style={{
                    fontWeight: "normal",
                    fontSize: "14px",
                    color: "#3C3835",
                    fontFamily: "Montserrat !important",
                    marginBottom: "100rem !important",
                    marginTop: "-.5rem",
                  }}
                ></p>
              </IonCol>
              <IonCol size="4">
                <p
                  style={{
                    fontWeight: "normal",
                    fontSize: "14px",
                    color: "#3C3835",
                    fontFamily: "Montserrat !important",
                    marginBottom: "100rem !important",
                    marginTop: "-.5rem",
                  }}
                >
                  {" "}
                </p>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="5" style={{ color: "white !important" }}>
                <div className="bilog">
                  {" "}
                  <img src={Logo} width="90%" height="100%" alt="" />
                </div>
              </IonCol>
              <IonCol size="7">
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "22px",
                    color: "white",
                    fontFamily: "Montserrat !important",
                    marginBottom: "100rem !important",
                    marginTop: "-.5rem",
                    lineHeight: "1.5rem",
                    textAlign:'left',
                  }}
                >
                  Food Chart
                </p>{" "}
                <p
                  style={{
                    fontWeight: "normal",
                    fontSize: "15px",
                    color: "white",
                    fontFamily: "Montserrat !important",
                    marginTop: "-.5rem",
                    lineHeight: "1.3rem",
                    textAlign:'left',
                  }}
                >
A simple guide of what and how much to eat                </p>
                <br></br>
              </IonCol>
           
            </IonRow>
          </IonGrid>
        </IonCardContent>
      </IonCard>
    </Link>
  );
}

export default SampleCard;
