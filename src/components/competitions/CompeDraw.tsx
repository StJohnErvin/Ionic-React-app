import React from "react";
import {   IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";


function Segment() {
  return (

   
         <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
          <IonSegmentButton value="draw">
            <IonLabel>Draw</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="Statistics">
            <IonLabel>Statistics</IonLabel>
          </IonSegmentButton>
        </IonSegment>
    
  );
}

export default Segment;
