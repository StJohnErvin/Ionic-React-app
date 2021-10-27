import { IonToolbar, IonGrid, IonRow, IonCol, IonButton, IonLabel } from '@ionic/react';
import React from 'react';
import Logo from '../../assets/Logo/logo.png';




function ToolBarArticle(){
  

return(
    <IonToolbar color="primary">
    <IonGrid
      fixed={true}
      className="ion-no-padding"
      style={{ marginTop: "1rem" }}
    >
      <IonRow className="ion-no-padding ion-align-items-stretch">
        <IonCol>
          <IonButton href="/news" fill="clear">
            {" "}
            <IonLabel style={{ size: "1px", color: "white" }}>
              Back
            </IonLabel>
          </IonButton>
        </IonCol>
        <IonCol>
          <img src={Logo} width="50" height="30" alt="" />
        </IonCol>
        <IonCol>
          {/* <IonButton
            // mode='md'
            style={{ width: "80px" }}
            color="warning"
            size="small"
            href="/register"
          >
            <IonLabel mode="ios" style={{ size: "1px", color: "white" }}>
              Register
            </IonLabel>
          </IonButton> */}
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonToolbar>
)

}

export default ToolBarArticle