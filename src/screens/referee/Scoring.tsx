/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line
import {
  IonApp,
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonList,
  IonRow,
  IonToolbar,
} from "@ionic/react";

import React from "react";
import ToolBarNews from "../../components/bars/ToolBarArticle";

import Card from "../../components/competitions/DynamicCard";

const MenuPage: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <ToolBarNews />
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <Card />

        <h6
          style={{
            fontWeight: "bold",
            fontSize: "15px !important",
            color: "#008174",
            fontFamily: "MontserratBold !important",
            width: "100rem",
          }}
        >
          Add score{" "}
        </h6>


        <IonGrid>
          <IonRow>
            <IonCol>
           
                  <h6
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      color: "#008174",
                      fontFamily: "MontserratBold !important",
                    }}
                  >
                    Home{" "}
                  </h6>

                
              
            </IonCol>

            <IonCol>
            
                  <h6
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      color: "#008174",
                      fontFamily: "MontserratBold !important",
                    }}
                  >
                    Away{" "}
                  </h6>

             
               
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardContent>
                  <h6
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      color: "#008174",
                      fontFamily: "MontserratBold !important",
                    }}
                  >
                    Home{" "}
                  </h6>

                  <p>The A-Team</p>
                  <IonList>name 1</IonList>
                  <IonList>name 2</IonList>

                  <IonList>name 3</IonList>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol>
              <IonCard>
                <IonCardContent>
                  <h6
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      color: "#008174",
                      fontFamily: "MontserratBold !important",
                    }}
                  >
                    Away{" "}
                  </h6>

                  <p>Dream Team</p>
                  <IonList>name 1</IonList>
                  <IonList>name 2</IonList>

                  <IonList>name 3</IonList>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>


        <IonButton
            className="ion-padding"
            expand="block"
            size='default'
            mode="md"
            style={{
              width: "100%",
              // height: "100%",
            }}
          >
Submit          </IonButton>
      </IonContent>
    </IonApp>
  );
};

export default MenuPage;
