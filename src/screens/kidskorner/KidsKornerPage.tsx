// eslint-disable-next-line 
import {
    IonApp,
    IonCol,
    IonContent,
    IonHeader,
    IonItem,
    
  } from "@ionic/react";
  import React from "react";
import ToolBarNews from "../../components/bars/ToolBarNews";

import MainCard1 from "../../components/kidskornercards/MainCard1";
import MainCard2 from "../../components/kidskornercards/MainCard2";

   
  // import {Link} from 'react-router-dom';
  
  const KidsKornerPage: React.FC = () => {
    return (
      <IonApp    
      className="ion-no-padding">
        <IonHeader>
          <ToolBarNews />
        </IonHeader>
        <IonContent>
        <IonItem lines="none">
            <IonCol>

              <MainCard1 />
            </IonCol>
          </IonItem>  <IonItem lines="none">
            <IonCol>

              <MainCard2 />
            </IonCol>
          </IonItem>
         
        </IonContent>
      </IonApp>
    );
  };
  
  
  export default KidsKornerPage;
  