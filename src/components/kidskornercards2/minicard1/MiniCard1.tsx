import React from "react";
import { IonCard, IonCardContent, IonCol, IonGrid, IonRow } from "@ionic/react";
import Logo from "../../../assets/kids korner/Food/pre_game_meal.png"
import { Link } from "react-router-dom";
import "./style/minicard.css";

function SampleCard() {
  return (
    <Link to="/pregamemealidea" style={{ textDecoration: "none" }}>
      <IonCard
        className=" ion-no-padding ion-no-shadow ion-no-border  "
        style={{
          border: "none !important",
          marginTop: "1rem",
          marginBottom: "1rem",
          color: "dark",
        }}
      >
        <IonCardContent className="ion-no-shadow ion-no-border card-purple">
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
                    paddingRight: "1rem",
                  }}
                >
                  {" "}
                </p>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol size="5">
                <div className="bilog">
                  {" "}
                  <img src={Logo} width="80%" height="100%" alt="" />
                </div>
              </IonCol>
              <IonCol size="7">
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "21px",
                    color: "white",
                    fontFamily: "Montserrat !important",
                    marginTop: "-.5rem",
                    lineHeight: "1.5rem",
                    textAlign: "left",
                  }}
                >
                  PRE-GAME MEAL IDEAS{" "}
                </p>{" "}
                <p
                  style={{
                    fontWeight: "normal",
                    fontSize: "15px",
                    color: "white",
                    fontFamily: "Montserrat !important",
                    textAlign: "left",
                    lineHeight: "1rem",
                  }}
                >
                  What should you be eating to fuel up before kick-off?{" "}
                </p>
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
