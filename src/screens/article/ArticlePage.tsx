// eslint-disable-next-line
import {
  IonApp,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonRow,
} from "@ionic/react";
import React from "react";
import news from "../../assets/article.jpeg";

import "../../theme/grid.css";
import ToolBarArticle from "../../components/bars/ToolBarArticle";

const ArticlePage: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <ToolBarArticle />
      </IonHeader>
      <IonContent>
        <IonGrid fixed={true} className="ion-no-padding">
          <img src={news} width="100%" height="100%" alt="" />
        </IonGrid>
        <IonGrid className="text-align: left">
          <IonRow>
            <IonCol>
              <IonItem lines="none">
                <h6
                  id=""
                  style={{
                    fontWeight: "bold",
                    fontSize: "22px",
                    color: "#3C3835",
                    fontFamily: "MontserratBold !important",
                    marginTop: "0.5rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur
                </h6>
              </IonItem>
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
                    >
                      Author{" "}
                    </p>
                  </IonCol>
                  <IonCol style={{ marginBottom: "0 !important" }}>
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
                      13th May 2021{" "}
                    </p>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol>
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
                      Avatar{" "}
                    </p>
                  </IonCol>
                  <IonCol style={{ marginBottom: "0 !important" }}>
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
                      Tri Tag{" "}
                    </p>
                  </IonCol>
                  <IonCol></IonCol>
                  <IonCol></IonCol>
                  <IonCol></IonCol>
                  <IonCol></IonCol>
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
                  marginTop: "-0.8rem",
                }}
              >
                <p
                  style={{
                    fontSize: "16px",
                    color: "#3C3835",
                    fontFamily: "Montserrat !important",
                    lineHeight: 1.5,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>{" "}
                <p
                  style={{
                    fontSize: "16px",
                    color: "#3C3835",
                    fontFamily: "Montserrat !important",
                    lineHeight: 1.5,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>{" "}
                <p
                  style={{
                    fontSize: "16px",
                    color: "#3C3835",
                    fontFamily: "Montserrat !important",
                    lineHeight: 1.5,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default ArticlePage;
