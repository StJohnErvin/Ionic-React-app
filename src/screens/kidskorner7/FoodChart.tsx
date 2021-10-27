// eslint-disable-next-line
import {
  IonApp,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonRow,
} from "@ionic/react";
import React from "react";
import hero from "../../assets/kids korner/Hero images/food-chart-hero.png";
import hka from "../../assets/kids korner/hka-logo.png";
import red from "../../assets/kids korner/Hero images/red.svg";

import "../../theme/grid.css";
import "./style/style.css";

import ToolBarKidsKorner from "../../components/bars/ToolBarKidsKorner2";

const FoodChart: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <ToolBarKidsKorner />
      </IonHeader>

      <IonContent>
        <div style={{ marginBottom: "-4.3rem" }}>
          <img src={hero} width="100%" height="100%" alt="" />{" "}
        </div>

        <div>
          <img src={red} width="100%" height="100%" alt="" />
        </div>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonGrid fixed={true}>
                <IonRow>
                  <IonCol size="7" style={{ marginBottom: "0 !important" }}>
                    {" "}
                    <div></div>
                    <h6
                      style={{
                        fontWeight: "bold",
                        fontSize: "36px",
                        color: "white",
                        fontFamily: "Montserrat-Bold",
                        marginBottom: "100rem !important",
                        marginTop: "-27rem",
                        textAlign: "left",
                      }}
                    >
FOOD                    </h6>
                  </IonCol>
                  <IonCol style={{ marginBottom: "0 !important" }}></IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="8">
                    <h6
                      style={{
                        fontWeight: "bold",
                        fontSize: "36px",
                        color: "white",
                        fontFamily: "Montserrat-Bold",
                        marginBottom: "100rem !important",
                        marginTop: "-24.5rem",
                        textAlign: "left",
                      }}
                    >
CHART                    </h6>
                  </IonCol>
                  <IonCol style={{ marginBottom: "0 !important" }}>
                    <p
                      style={{
                        fontWeight: "normal",
                        fontSize: "14px",
                        color: "#3C3835",
                        fontFamily: "Montserrat !important",
                        marginTop: "-1rem",
                      }}
                    >
                      <div className="hk" style={{ marginTop: "-26.5rem" }}>
                        {" "}
                        <img src={hka} width="80%" height="80%" alt="" />
                      </div>
                    </p>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="10" style={{ marginBottom: "0 !important" }}>
                    {" "}
                    <p
                      style={{
                        fontWeight: "normal",
                        fontSize: "12px",
                        color: "white",
                        fontFamily: "Montserrat-Bold",
                        marginTop: "-22rem",
                        textAlign: "left",
                      }}
                    >
                      Brought to you by the Healthy Kids Association{" "}
                    </p>
                  </IonCol>
                  <IonCol style={{ marginBottom: "0 !important" }}></IonCol>
                </IonRow>
                <br></br>

                <IonRow>
                  <IonCol size="10" style={{ marginBottom: "0 !important" }}>
                    {" "}
                    <p
                      style={{
                        fontWeight: "normal",
                        fontSize: "16px",
                        color: "white",
                        fontFamily: "Montserrat",
                        marginTop: "-15rem",
                        textAlign: "left",
                        lineHeight: "2rem",
                      }}
                    >
               A balanced and nutritious diet is essential for your child’s health and wellbeing. Use this simple guide to help make better decisions on what and how regularly your child should be eating each type of food.
                    </p>
                  </IonCol>
                </IonRow>
              </IonGrid>
             
            
            
             
             
       
            </IonCol>
          </IonRow>
        </IonGrid>

       
    
             
      </IonContent>
    </IonApp>
  );
};

export default FoodChart;
