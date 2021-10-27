import React  from "react";
import { TextField } from "@material-ui/core";

import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonItem,
  IonButton,
  IonCol,
} from "@ionic/react";

function RegistrationCard() {

  return (
    <IonCard className="ion-text-center">
      <IonCardHeader></IonCardHeader>

      <IonCardContent className="ion-text-center">
        <h5 style={{ fontWeight: "bold" }}>TTR</h5>

        <h2 style={{ fontWeight: "bold" }}>Welcome </h2>
        <p>Log in to dev-tritag to continue to All Applications. </p>

        <p style={{ marginBottom: "1.5rem" }}> </p>
        <IonItem lines="none" className=" ion-no-padding  ">
          <IonCol size='10' className=" ion-no-padding  "><TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            style={{ width: "120.%" }}
          /></IonCol> 
          </IonItem>
          <IonItem lines="none" className=" ion-no-padding  ">
          <IonCol size='10' className=" ion-no-padding  "><TextField
            id="outlined-basic"
            type='password'
            label="Password"
            variant="outlined"
            style={{ width: "120.%", marginTop:'1rem' }}
          /></IonCol> 
          </IonItem>

          
        
        <p></p>
        <p className="ion-text-left">Forgot Password? </p>
        <p></p>

        <IonButton
          expand="block"
          type="submit"
          mode="md"
          style={{ marginTop: "1rem" }}
          color="primary"
          size="large"
          slot="start"
          href="/complete_profile"
        >
          <p style={{ color: "white", fontSize: "13px" }}>Continue</p>
        </IonButton>
      </IonCardContent>
    </IonCard>
  ); 
}

export default RegistrationCard;
