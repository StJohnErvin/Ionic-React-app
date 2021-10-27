import React from 'react';
import {

    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    
  } from '@ionic/react';




function SampleCard(){
  

return(
    <IonCard className='ion-text-center'>
          <IonCardHeader>
            <IonCardTitle >Logo</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          <p>Welcome</p>
          <p>Forms</p>
          <p>Button</p>
        
          </IonCardContent>
        </IonCard>
)

}

export default SampleCard