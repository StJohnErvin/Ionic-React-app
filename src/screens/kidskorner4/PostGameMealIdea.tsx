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
import hero from "../../assets/kids korner/Hero images/post-game-hero.png";
import hka from "../../assets/kids korner/hka-logo.png";
import orange from "../../assets/kids korner/Hero images/orange.svg";

import "../../theme/grid.css";
import "./style/style.css";

import ToolBarKidsKorner from "../../components/bars/ToolBarKidsKorner2";
import DrinkUp from "../../components/kidskornercards4/minicard1/MiniCard1";
import TimeCard from "../../components/kidskornercards4/minicard2/TimeCard";
import TimeCard2 from "../../components/kidskornercards4/minicard2/TimeCard2";

import Yoghurt from "../../components/kidskornercards4/minicard3/Yoghurt";
import Roll from "../../components/kidskornercards4/minicard3/Roll";
import Porridge from "../../components/kidskornercards4/minicard3/Porridge";
import CheeseAndCrackers from "../../components/kidskornercards4/minicard3/CheeseAndCrackers";
import CerealMilk from "../../components/kidskornercards4/minicard3/Cereal&Milk";
// import OnTheSide from "../../components/kidskornercards4/minicard3/OnTheSide";
const PostGameMealIdea: React.FC = () => {
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
          <img src={orange} width="100%" height="100%" alt="" />
        </div>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonGrid fixed={true}>
                <IonRow>
                  <IonCol size="8" style={{ marginBottom: "0 !important" }}>
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
                      POST-GAME{" "}
                    </h6>
                  </IonCol>
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
                      After we exercise, our body is tired and has used up a lot
                      of energy. We need to refuel our bodies with more energy
                      so that we can recover and replace what has been used.
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
                  30 minutes post-game snack{" "}
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
                  To allow your body to start refuelling those hardworking
                  muscles, aim to eat a snack within the first 30 minutes after
                  full-time.
                </p>{" "}
                <p
                  style={{
                    fontWeight: "normal",
                    fontSize: "16px",
                    color: "#3C3835",
                    fontFamily: "Montserrat",
                    marginTop: "1rem",
                  }}
                >
                  Ideally, this snack should be rich in carbohydrates to
                  replenish muscle fuel stores - glycogen, and also contain
                  protein for muscle repair.
                </p>{" "}
              
                <h6
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    color: "#008174",
                    fontFamily: "Montserrat",
                    marginTop: "1rem",
                  }}
                >
Snack ideas                </h6>
<TimeCard/>
<IonRow>
                  <IonCol size=""></IonCol>
                  <IonCol style={{ marginBottom: "0 !important" }}></IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6" style={{ marginBottom: "0 !important" }}>
                    {" "}
                    <Yoghurt />
                  </IonCol>
                  <IonCol size="6" style={{ marginBottom: "0 !important" }}>
                    <Roll />
                  </IonCol>
                  <IonCol style={{ marginBottom: "0 !important" }}></IonCol>
                </IonRow>{" "}
                <IonRow>
                  <IonCol size="6" style={{ marginBottom: "0 !important" }}>
                    {" "}
                    <CerealMilk />
                  </IonCol>
                  <IonCol size="6" style={{ marginBottom: "0 !important" }}>
                    <CheeseAndCrackers />
                  </IonCol>
                  <IonCol style={{ marginBottom: "0 !important" }}></IonCol>
                </IonRow>{" "}
                <IonRow>
                  <IonCol size="6" style={{ marginBottom: "0 !important" }}>
                    {" "}
                  </IonCol>
                  {/* <IonCol size="6" style={{ marginBottom: "0 !important" }}>
                  <Pancake />
                </IonCol> */}
                  <IonCol style={{ marginBottom: "0 !important" }}></IonCol>
                </IonRow>
                <IonCol size="6" style={{ marginBottom: "0 !important" }}>
                  {" "}
                </IonCol>


                <h6
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    color: "#008174",
                    fontFamily: "Montserrat",
                    marginTop: "1rem",
                  }}
                >
Don’t feel like eating straight away?                </h6>
                <p
                  style={{
                    fontWeight: "normal",
                    fontSize: "16px",
                    color: "#3C3835",
                    fontFamily: "Montserrat",
                    marginTop: "1rem",
                  }}
                >
                  You may prefer to kick-start your recovery process with a
                  liquid. Chocolate milk is a great recovery drink because it
                  contains both carbohydrates and protein. It’s also a great
                  source of calcium, which is important for healthy, strong
                  bones. Not to mention, it’s also delicious!
                </p>{" "}
                <p
                  style={{
                    fontWeight: "normal",
                    fontSize: "16px",
                    color: "#3C3835",
                    fontFamily: "Montserrat",
                    marginTop: "1rem",
                  }}
                >
                  Fruit smoothies with some Greek yoghurt are another good
                  option if you’re just not feeling like eating right after
                  running around on the field.{" "}
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
                  1-2 hours post-game meal{" "}
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
                  This is a great time for a full post-game meal. Everyone is
                  different in what their appetite is like and what they like to
                  eat post-game, but in general, this meal should:
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
                  Contain lots of carbohydrates to replace muscle fuel stores.
                  Think bread, rice, pasta, fruit, milk, yoghurt, potatoes,
                  pumpkin and corn.
                </p>{" "}
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
                  Contain some lean protein to repair and grow your tired
                  muscles. Think eggs, beef, chicken, tofu, dairy and beans.
                </p>
                {/* <DidYouKnow /> */}
                <h6
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    color: "#008174",
                    fontFamily: "Montserrat",
                    marginTop: "1rem",
                  }}
                >
                  Meal ideas{" "}
                </h6>
                <TimeCard2/>
                
              </div>
              <IonRow>
                <IonCol size="" style={{ marginBottom: "0 !important" }}>
                  {" "}
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
                  <Yoghurt/>
                </IonCol>
                <IonCol
                  size="6"
                  style={{ marginBottom: "0 !important" }}
                > <Roll/></IonCol>
                <IonCol style={{ marginBottom: "0 !important" }}></IonCol>
              </IonRow>{" "}
              <IonRow>
                <IonCol size="6" style={{ marginBottom: "0 !important" }}>
                  {" "}
                </IonCol>
                <IonCol size="6" style={{ marginBottom: "0 !important" }}>
                  <Porridge />
                </IonCol>
                <IonCol style={{ marginBottom: "0 !important" }}></IonCol>
              </IonRow>{" "}
              <IonRow>
                <IonCol size="6" style={{ marginBottom: "0 !important" }}>
                  {" "}
                </IonCol>
                <IonCol
                  size="6"
                  style={{ marginBottom: "0 !important" }}
                ></IonCol>
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
        <DrinkUp/>
        
       
      </IonContent>
    </IonApp>
  );
};

export default PostGameMealIdea;
