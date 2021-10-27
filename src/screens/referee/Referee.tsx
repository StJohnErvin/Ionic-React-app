/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line
import {
    IonApp,

    IonContent,
    IonHeader,

    IonToolbar,
  } from "@ionic/react";
  
  import React from "react";
  import ToolBarNews from "../../components/bars/ToolBarArticle";
  import Seg from '../../components/more/RefereeSeg'


  import Card from '../../components/competitions/DynamicCard'

  
  
  const MenuPage: React.FC = () => {
    return (
      <IonApp>
        <IonHeader>
          <IonToolbar>
            <ToolBarNews />
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <Seg/>
          <Card/>
          <Card/>
          <Card/>
       
              
       
        </IonContent>
      </IonApp>
    );
  };
  
  export default MenuPage;
  