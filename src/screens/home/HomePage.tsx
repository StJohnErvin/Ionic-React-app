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
import SampleCard from "../../components/cards/Cards";
 

const Home: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='ion-text-center'>Home Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
      
         
            <IonItem >
              <SampleCard/>
              
            </IonItem>
     
        </IonList>{" "}
 
      </IonContent>
    </IonApp>
  );
};


export default Home;
