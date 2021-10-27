import React from "react";
import {   IonItem, IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";


function Segment() {
  return (

   <IonItem>
         <IonSegment mode="md" onIonChange={e => console.log('Segment selected', e.detail.value)}>
          <IonSegmentButton value="draw">
            <IonLabel>Round 1</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="round2">
            <IonLabel>Round 2</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="round3">
            <IonLabel>Round 3</IonLabel>
          </IonSegmentButton>      <IonSegmentButton value="round4">
            <IonLabel>Round 4</IonLabel>
          </IonSegmentButton>
       
        </IonSegment>
        </IonItem>
    
  );
}

export default Segment;
