// eslint-disable-next-line
import {
  
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import React from "react";

import {
  book as bookIcon,
  americanFootball as americanIcon,
  people as peoplesIcon,
  menu as menusIcon,
} from "ionicons/icons";







function ToolBar(){
  

return(
  <IonTabs>
   <IonTabBar slot="bottom">
            <IonTabButton tab="news" href="/news">
              <IonIcon icon={bookIcon} />
              <IonLabel>News</IonLabel>
            </IonTabButton>

            <IonTabButton tab="competitions" href="/competitions">
              <IonIcon icon={americanIcon} />
              <IonLabel>Competitions</IonLabel>
            </IonTabButton>

            <IonTabButton tab="kidskorner" href="/kidskorner">
              <IonIcon icon={peoplesIcon} color="green" />
              <IonLabel>Kids Korner</IonLabel>
            </IonTabButton>

            <IonTabButton tab="menus" href="/menus">
              <IonIcon icon={menusIcon} />
              <IonLabel>Menu</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
)

}

export default ToolBar