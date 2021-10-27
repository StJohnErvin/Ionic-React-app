// eslint-disable-next-line 
import {
    IonApp,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonTitle,
    IonToolbar,
    IonButton
  } from "@ionic/react";
  import React from "react";
   
  
  const Intro: React.FC = () => {
    return (
      <IonApp>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Intro Page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
        
           
              <IonItem >
              What is Tri Tag Rugby?         
              <p>Tri Tag Rugby is a minimal contact, low injury risk, attack-based rugby union game that incorporates the skill set and fabric of traditional rugby</p>       
              </IonItem>

       
          </IonList>{" "}
          <IonButton color="primary">Next</IonButton>

        </IonContent>
      </IonApp>
    );
  };
  
  
  export default Intro;
  