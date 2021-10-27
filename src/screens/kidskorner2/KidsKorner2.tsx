// eslint-disable-next-line
import { IonApp, IonCol, IonContent, IonHeader, IonItem } from "@ionic/react";
import React from "react";
import ToolBarKidsKorner from "../../components/bars/ToolBarKidsKorner";

import MiniCard1 from "../../components/kidskornercards2/minicard1/MiniCard1";
import MainCard2 from "../../components/kidskornercards2/minicard2/MiniCard2";
import MiniCard3 from "../../components/kidskornercards2/minicard3/MiniCard3";
import MainCard4 from "../../components/kidskornercards2/minicard4/MiniCard4";
import MiniCard5 from "../../components/kidskornercards2/minicard5/MiniCard5";

// import {Link} from 'react-router-dom';

const KidsKornerPage: React.FC = () => {
  return (
    <IonApp className="ion-no-padding">
      <IonHeader>
        <ToolBarKidsKorner />
      </IonHeader>
      <IonContent>
        <IonItem lines="none">
          <IonCol>
            <MiniCard1 />
          </IonCol>
        </IonItem>{" "}
        <IonItem lines="none">
          <IonCol>
            <MainCard2 />
          </IonCol>
        </IonItem>{" "}
        <IonItem lines="none">
          <IonCol>
            <MiniCard3 />
          </IonCol>
        </IonItem>{" "}
        <IonItem lines="none">
          <IonCol>
            <MainCard4 />
          </IonCol>
        </IonItem>{" "}
        <IonItem lines="none">
          <IonCol>
            <MiniCard5 />
          </IonCol>
        </IonItem>
      </IonContent>
    </IonApp>
  );
};

export default KidsKornerPage;
