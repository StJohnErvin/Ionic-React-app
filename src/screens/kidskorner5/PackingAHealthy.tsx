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
import hero from "../../assets/kids korner/Hero images/packing-a-healthy-lunch-box-hero.png";
import hka from "../../assets/kids korner/hka-logo.png";
import pink from "../../assets/kids korner/Hero images/pink.svg";

import "../../theme/grid.css";
import "./style/style.css";

import ToolBarKidsKorner from "../../components/bars/ToolBarKidsKorner2";
import Tips from "../../components/kidskornercards5/minicard1/MiniCard1";
import TimeCard from "../../components/kidskornercards3/minicard2/TimeCard";

import Spag from "../../components/kidskornercards3/minicard3/Spaghetti";
import Baked from "../../components/kidskornercards3/minicard3/BakedBeans";
import JamT from "../../components/kidskornercards3/minicard3/JamToast";
import Porridge from "../../components/kidskornercards3/minicard3/Porridge";

const PackingAHealthy: React.FC = () => {
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
          <img src={pink} width="100%" height="100%" alt="" />
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
                      PACKING A HEALTHY{" "}
                    </h6>
                  </IonCol>
                  <IonCol style={{ marginBottom: "0 !important" }}></IonCol>
                </IonRow>
                <br></br>
                <br></br>
                <br></br>

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
                      LUNCH BOX{" "}
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
                      Packing your child’s lunch box with nutritious foods can
                      help give them the energy they need to get through a busy
                      day.
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
                  Packing a healthy lunch box{" "}
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
                  It can be quite frustrating when the lunchbox comes back with
                  the items untouched (particularly those veggie sticks), but
                  studies show that it takes at least 10 occasions for a child
                  to start to eat the foods presented to them.
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
                  What to include{" "}
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
                  Aim to include foods from each of the five food groups in your
                  lunch box:
                </p>
                <li>Fruit</li>
                <li>Vegetables</li>
                <li>
                  Dairy or alternatives, such as milk, cheese, yoghurt, soy milk
                </li>
                <li>Grain (cereal) foods such as bread, rice, pasta</li>
                <li>
                  Lean meats and alternatives, such as beef, chicken, eggs,
                  tofu, fish, chickpeas, beans
                </li>
                <Tips />
                <h6
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    color: "#008174",
                    fontFamily: "Montserrat",
                    marginTop: "1rem",
                  }}
                >
                  The Core 4{" "}
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
                  For a healthy, balanced lunch box, pack the Core 4:
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
                  Main lunch item: sandwich, roll, wrap, salad or other meal
                  based on grains such as pasta, rice or quinoa
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
                  Nutritious snack: choose a snack from the five food groups
                  such as crackers with cheese, veggie sticks and hommus or a
                  tub of yoghurt{" "}
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
                  Piece of fruit: try to avoid fruit canned in syrup or dried
                  fruit.
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
                  Drink: always include a water bottle. Add a small reduced fat
                  milk drink (300ml) or a 99% fruit juice (200ml) once or twice
                  a week.
                </p> <p
                  style={{
                    fontWeight: "normal",
                    fontSize: "16px",
                    color: "#3C3835",
                    fontFamily: "Montserrat",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                If your child is very active or going through a growth spurt, add an additional snack.
                </p>
               
             
              </div>
             
             
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
              <TimeCard />
              <IonRow>
                <IonCol size="6" style={{ marginBottom: "0 !important" }}>
                  {" "}
                  <JamT />
                </IonCol>
                <IonCol size="6" style={{ marginBottom: "0 !important" }}>
                  <Porridge />
                </IonCol>
                <TimeCard />
                <IonCol style={{ marginBottom: "0 !important" }}></IonCol>
              </IonRow>{" "}
              <IonRow>
                <IonCol size="6" style={{ marginBottom: "0 !important" }}>
                  {" "}
               
                </IonCol>
                <IonCol size="6" style={{ marginBottom: "0 !important" }}>
                
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
        <h6
          style={{
            fontWeight: "bold",
            fontSize: "16px",
            color: "#008174",
            fontFamily: "Montserrat",
            marginTop: "1rem",
          }}
        >
Try these ideas for a nutritious lunch        </h6>
       
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
          <IonCol style={{ marginBottom: "0 !important" }}>
            {" "}
            <Baked />
          </IonCol>
          <IonCol size="6" style={{ marginBottom: "0 !important" }}>
            {" "}
            <Spag />
          </IonCol>
          <IonCol size="6" style={{ marginBottom: "0 !important" }}></IonCol>
        </IonRow>{" "}
      </IonContent>
    </IonApp>
  );
};

export default PackingAHealthy;
