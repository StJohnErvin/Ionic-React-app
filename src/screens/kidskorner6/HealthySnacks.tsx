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
import hero from "../../assets/kids korner/Hero images/healthy-snacks-hero.png";
import hka from "../../assets/kids korner/hka-logo.png";
import blue from "../../assets/kids korner/Hero images/blue.svg";

import "../../theme/grid.css";
import "./style/style.css";

import ToolBarKidsKorner from "../../components/bars/ToolBarKidsKorner2";


import Spag from "../../components/kidskornercards3/minicard3/Spaghetti";
import Baked from "../../components/kidskornercards3/minicard3/BakedBeans";
import JamT from "../../components/kidskornercards3/minicard3/JamToast";
import Porridge from "../../components/kidskornercards3/minicard3/Porridge";
import Wrap from "../../components/kidskornercards3/minicard3/Wrap";
import Pancake from "../../components/kidskornercards3/minicard3/Pancakes";
import MiniPiza from "../../components/kidskornercards6/minicard4/MiniPizza";
import Pikelets from "../../components/kidskornercards6/minicard4/Pikelets";
import Pita from "../../components/kidskornercards6/minicard4/PitaPockets";
import Banana from "../../components/kidskornercards6/minicard4/BananaPops";


const HealthySnacks: React.FC = () => {
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
          <img src={blue} width="100%" height="100%" alt="" />
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
HEALTHY                    </h6>
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
SNACKS                    </h6>
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
                      Snacks are an important part of the day and can help us get the nutrients we need to feel our best.
                    </p>
                  </IonCol>
                </IonRow>
              </IonGrid>
              <IonRow
                className="ion-justify-content-start"
                style={{ marginBottom: "0 !important" }}
              ></IonRow>
              <div
                className="ion-text-start"
                style={{
                  marginLeft: "1rem",
                  marginRight: "1rem",
                  marginTop: "1rem",
                }}
              >
                <h6
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    color: "#008174",
                    fontFamily: "Montserrat",
                    marginTop: "-1rem",
                  }}
                >
Sometimes foods                </h6>
                <p
                  style={{
                    fontWeight: "normal",
                    fontSize: "16px",
                    color: "#3C3835",
                    fontFamily: "Montserrat",
                    marginTop: "1rem",
                  }}
                >
             Foods such as biscuits, chips, cakes and chocolate bars don’t give us many nutrients. For this reason, they don’t fit into the five food groups. Instead, they are known as ‘extra’ or ‘occasional’ foods. 
                </p>
             
                <p
                  style={{
                    fontWeight: "normal",
                    fontSize: "16px",
                    color: "#3C3835",
                    fontFamily: "Montserrat",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                  }}
                >
               While you can still eat them sometimes as part of a healthy diet, they shouldn’t be eaten on a daily basis.
                </p>
                <h6
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    color: "#008174",
                    fontFamily: "Montserrat",
                    marginTop: "1rem",
                  }}
                >
What to choose                </h6>
                <p
                  style={{
                    fontWeight: "normal",
                    fontSize: "16px",
                    color: "#3C3835",
                    fontFamily: "Montserrat",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  When you’re feeling hungry between meals, reach for snacks from the five food groups to make sure you get the nutrients you need:
                </p>
                <li>Fruit</li>
                <li>Vegetables</li>
                <li>Dairy or alternatives, such as milk,  cheese, yoghurt, soy milk
</li>
                <li> Grain (cereal) foods such as bread, rice, pasta
</li>
                <li>Lean meats and alternatives, such as beef, chicken, eggs, tofu, fish, chickpeas, beans</li>
               
                <h6
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    color: "#008174",
                    fontFamily: "Montserrat",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                  }}
                >
Snack ideas                </h6>
              </div>
             
             <MiniPiza/>
             <Pikelets/> 
                 <Pita/>
                 <Banana/>
            
            
              <IonRow>
                <IonCol size="6" style={{ marginBottom: "0 !important" }}>
                  {" "}
                  <JamT />
                </IonCol>
                <IonCol size="6" style={{ marginBottom: "0 !important" }}>
                  <Porridge />
                </IonCol>
                <IonCol style={{ marginBottom: "0 !important" }}></IonCol>
              </IonRow>{" "}
              <IonRow>
                <IonCol size="6" style={{ marginBottom: "0 !important" }}>
                  {" "}
                  <Wrap />
                </IonCol>
                <IonCol size="6" style={{ marginBottom: "0 !important" }}>
                  <Pancake />
                </IonCol>
                <IonCol style={{ marginBottom: "0 !important" }}></IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="6" style={{ marginBottom: "0 !important" }}>
                  {" "}
                </IonCol>

                <IonCol style={{ marginBottom: "0 !important" }}></IonCol>
              </IonRow>
            </IonCol>
          </IonRow>
        </IonGrid>

       
              <IonRow>
                <IonCol size=""></IonCol>
                <IonCol style={{ marginBottom: "0 !important" }}></IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="6" style={{ marginBottom: "0 !important" }}>
                  {" "}
                  <Spag />
                </IonCol>
                <IonCol size="6" style={{ marginBottom: "0 !important" }}>
                  <Baked />
                </IonCol>
                <IonCol style={{ marginBottom: "0 !important" }}>   <Baked /></IonCol>
                <IonCol size="6" style={{ marginBottom: "0 !important" }}>
                  {" "}
                  <Spag />
                </IonCol>
                <IonCol size="6" style={{ marginBottom: "0 !important" }}>
               
                </IonCol>
              </IonRow>{" "}
      </IonContent>
    </IonApp>
  );
};

export default HealthySnacks;
