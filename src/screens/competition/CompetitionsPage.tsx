// eslint-disable-next-line
import {
  IonApp,
  IonContent,
  IonHeader,
  // IonItem,
  // IonList,
} from "@ionic/react";
import React from "react";
import CompetitionToolBar from "../../components/bars/CompetitionsToolBar";
import Segment from "../../components/competitions/CompeDraw";
import Rounds from "../../components/competitions/RoundsSegment";
import SelectOpen from "../../components/competitions/ProfMenu";
import Card from '../../components/competitions/DynamicCard' ;

const CompetitionsPage: React.FC = () => {

  return (
    <IonApp>
      <IonHeader>
        <CompetitionToolBar />
      </IonHeader>
      <IonContent className="ion-padding">
        <SelectOpen />
        {/* <Open/> */}
        <Segment />
        <Rounds />
        <Card/>
      </IonContent>
    </IonApp>
  );
};

export default CompetitionsPage;
