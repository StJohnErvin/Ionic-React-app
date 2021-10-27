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
import hero from "../../assets/kids korner/Hero images/pre-game-hero.png";
import hka from "../../assets/kids korner/hka-logo.png";
import purple from "../../assets/kids korner/Hero images/purple.svg";

import "../../theme/grid.css";
import "./style/style.css";

import ToolBarKidsKorner from "../../components/bars/ToolBarKidsKorner2";
import DidYouKnow from "../../components/kidskornercards3/minicard1/MiniCard1";
import Hydrate from "../../components/kidskornercards3/minicard4/MiniCard1";
import TimeCard from "../../components/kidskornercards3/minicard2/TimeCard";

import Spag from "../../components/kidskornercards3/minicard3/Spaghetti";
import Baked from "../../components/kidskornercards3/minicard3/BakedBeans";
import JamT from "../../components/kidskornercards3/minicard3/JamToast";
import Porridge from "../../components/kidskornercards3/minicard3/Porridge";
import Wrap from "../../components/kidskornercards3/minicard3/Wrap";
import Pancake from "../../components/kidskornercards3/minicard3/Pancakes";
import OnTheSide from "../../components/kidskornercards3/minicard3/OnTheSide";
const PreGameMealIdea: React.FC = () => {
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
          <img src={purple} width="100%" height="100%" alt="" />
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
                      PRE-GAME{" "}
                    </h6>
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
                      MEAL IDEAS{" "}
                    </h6>
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
                      It’s important to eat before playing sport to make sure
                      your body has enough energy to be at the top of your game.
                      So, when and what should you be eating to fuel up before
                      kick-off?{" "}
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
                  Nutrients in food{" "}
                </h6>
                <p
                  style={{
                    fontWeight: "normal",
                    fontSize: "16px",
                    color: "#3C3835",
                    fontFamily: "Montserrat",
                    marginTop: "1rem",
                  }}
                >
                  Macronutrients or larger nutrients are the main nutrients that
                  make up the foods we eat. There are three types:
                  carbohydrates, protein and fat.
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
                  Carbohydrates for energy{" "}
                </h6>
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
                  To keep you energised and focused, your pre-game meal should
                  include carbohydrates, which are the main source of energy for
                  our body.
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
                  Lots of the foods we eat contain carbohydrates, including
                  bread, rice, pasta and quinoa, fruit, dairy foods such as milk
                  and yoghurt, and starchy vegetables such as potato and corn.
                </p>

                <DidYouKnow />

                <h6
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    color: "#008174",
                    fontFamily: "Montserrat",
                    marginTop: "1rem",
                  }}
                >
                  Protein for repair and muscle growth{" "}
                </h6>
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
                  Aim to include a small amount of protein in your pre-game meal
                  – this can help prevent you from feeling hungry during your
                  game.
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
                  Think foods like fish, eggs, beef, chicken, dairy products,
                  beans and tofu.
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
                  Low fat for easy digestion{" "}
                </h6>
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
                  Try to keep your pre-game meal low in fat. Fat takes longer
                  for our body to digest, which can lead to an upset stomach and
                  make you feel sluggish.
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
                  So, skip the greasy foods like hot chips and pizza before your
                  game so you feel your best on the field.
                </p>
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
                  Meal ideas{" "}
                </h6>
                <TimeCard />
              </div>
              <IonRow>
                <IonCol size="5" style={{ marginBottom: "0 !important" }}>
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
                    PRE-GAME{" "}
                  </h6>
                </IonCol>
                <IonCol style={{ marginBottom: "0 !important" }}></IonCol>
              </IonRow>
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
                <IonCol style={{ marginBottom: "0 !important" }}></IonCol>
              </IonRow>{" "}
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
                  <OnTheSide />
                </IonCol>

                <IonCol style={{ marginBottom: "0 !important" }}></IonCol>
              </IonRow>
            </IonCol>
          </IonRow>
        </IonGrid>

        <h6
          style={{
            fontWeight: "bold",
            fontSize: "16px",
            color: "#008174",
            fontFamily: "Montserrat",
            marginTop: "1rem",
          }}
        >
          Still feeling hungry?{" "}
        </h6>

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
          If you start to feel hungry again 1 or 2 hours before the game, have a
          small snack which contains carbohydrates for an energy boost, but is
          low in fat so it can be easily digested.
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
          Snack Ideas{" "}
        </h6>
    
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
                <IonCol size="" style={{ marginBottom: "0 !important" }}>
                  <Hydrate/>
               
                </IonCol>
              </IonRow>{" "}
      </IonContent>
    </IonApp>
  );
};

export default PreGameMealIdea;
