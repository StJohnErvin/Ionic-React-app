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
   
  
  const PaymentDetailsPage: React.FC = () => {
    return (
      <IonApp>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Payment Details</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
        
           
              <IonItem >
                
              </IonItem>
       
          </IonList>{" "}
        </IonContent>
      </IonApp>
    );
  };
  
  
  export default PaymentDetailsPage;
  