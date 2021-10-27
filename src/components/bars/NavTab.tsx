// eslint-disable-next-line
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import React from "react";

import {
  book as bookIcon,
  americanFootball as americanIcon,
  people as peoplesIcon,
} from "ionicons/icons";

import More from "../assets/Nav icons/More.svg"



const NavTab: React.FC = () => {
  return (
    <IonApp>
      <IonTabs>
      <IonRouterOutlet>
           
          </IonRouterOutlet>

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
            <IonIcon icon={More} />
            <IonLabel>Menu</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonApp>
  );
};

export default NavTab;
