import React from "react";
import {   IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";


function Segment() {
  return (

  <IonSegment mode='ios' onIonChange={e => console.log('Segment selected', e.detail.value)} value="profile">
          <IonSegmentButton value="profile">
            <IonLabel>Personal details</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="registration">
            <IonLabel>Registration history</IonLabel>
          </IonSegmentButton>
        </IonSegment>


        
    
  );
}

export default Segment;
