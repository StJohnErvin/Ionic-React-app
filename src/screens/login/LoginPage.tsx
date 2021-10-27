// eslint-disable-next-line 
import {
    IonApp,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
  import React from "react";
  import LoginCard from "../../components/cards/LoginCard";
   
  
  const Login: React.FC = () => {
    return (
      <IonApp>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Login Page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
        
           
              <IonItem >
                <LoginCard/>
                
              </IonItem>
       
          </IonList>{" "}
        </IonContent>
      </IonApp>
    );
  };
  
  
  export default Login;
  