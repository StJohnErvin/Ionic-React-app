import React from "react";
import { IonCard, IonCardContent, IonCol, IonGrid, IonRow } from "@ionic/react";

import Apple from "../../../assets/kids korner/Food/apple.png";
import Yoghurt from "../../../assets/kids korner/Food/yoghurt.png";
import Milk from "../../../assets/kids korner/Food/milk.png";

function TimeCard() {
  return (
    <IonCard
      className=" ion-no-padding ion-no-shadow ion-no-border  "
      style={{
        border: "none !important",
        marginTop: "1rem",
        marginBottom: "1rem",
        width: "360px",
        paddingRight: "",
       
        
      }}
    >
      <IonCardContent className="ion-no-shadow ion-no-border color-text">
        <p
          style={{
            fontWeight: "bold",

            fontSize: "16px",
            color: "#008174 !important",
            fontFamily: "Montserrat !important",
            textAlign: "left",
            lineHeight: "1.3rem",
          }}
        >
On the side        </p>
<IonGrid style={{width:'100%'}}> 
  <IonRow>
<IonCol ><img src={Apple} width="100%" height="100%" alt="" />
</IonCol>
<IonCol ><img src={Yoghurt} width="100%" height="100%" alt="" />

</IonCol>
<IonCol ><img src={Milk} width="100%" height="100%" alt="" />

</IonCol>
</IonRow>




</IonGrid>



        <p
          style={{
            fontWeight: "bold",

            fontSize: "16px",
            color: "#008174 !important",
            fontFamily: "Montserrat !important",
            textAlign: "left",
            lineHeight: "1.3rem",
          }}
        >
Piece of fruit, yoghurt or glass of milk  </p>
      </IonCardContent>
    </IonCard>
  );
}

export default TimeCard;
