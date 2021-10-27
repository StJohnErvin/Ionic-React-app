// eslint-disable-next-line 
import {
    IonApp,
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonRow,
    IonToolbar,
  } from "@ionic/react";
  import React from "react";
  import SampleCard from "../../components/cards/RegistrationCard";
  import Logo from "../../assets/Logo/logo.png";

   
  
  const RegistrationPage: React.FC = () => {
    return (
      <IonApp>
        <IonHeader>
        <IonToolbar color="primary" className="ion-align-items-stretch">
          <IonGrid
            fixed={true}
            className="ion-no-padding"
            style={{ marginTop: "1rem" }}
          >
            <IonRow className="ion-no-padding ion-align-items-stretch">
              <IonCol>
                <IonButton href="/news" fill="clear">
                  {" "}
                  <IonLabel style={{ size: "1px", color: "white" }}></IonLabel>
                </IonButton>
              </IonCol>
              <IonCol>
                <img src={Logo} width="50" height="30" alt="" />
              </IonCol>
              <IonCol>
            
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
        </IonHeader>
        <IonContent >
          <IonList>
        
           
              <IonItem lines='none' >
                <SampleCard/>
                
              </IonItem>
       
          </IonList>{" "}
        </IonContent>
      </IonApp>
    );
  };
  
  
  export default RegistrationPage;
  