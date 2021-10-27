// eslint-disable-next-line
import {
  IonApp,
  IonCol,
  IonContent,
  IonHeader,
  IonItem,
 
} from "@ionic/react";
import React from "react";
import SampleCard from "../../components/cards/Cards";
import ToolBarNews from "../../components/bars/ToolBarNews";

const NewsPage: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <ToolBarNews />
      </IonHeader>
      <IonContent>
        <IonItem lines="none">
          <IonCol>
            {" "}
            <SampleCard />
          </IonCol>
        </IonItem>{" "}
        <IonItem lines="none">
          <IonCol>
            {" "}
            <SampleCard />
          </IonCol>
        </IonItem>{" "}
        <IonItem lines="none">
          <IonCol>
            {" "}
            <SampleCard />
          </IonCol>
        </IonItem>
        <IonItem lines="none">
          <IonCol>
            {" "}
            <SampleCard />
          </IonCol>
        </IonItem>
      </IonContent>
    </IonApp>
  );
};

export default NewsPage;
