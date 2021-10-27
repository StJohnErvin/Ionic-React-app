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
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

import HomePage from "./screens/home/HomePage";
import SettingsPage from "./pages/SettingsPage";
import {
  book as bookIcon,
  americanFootball as americanIcon,
  people as peoplesIcon,
} from "ionicons/icons";
import NewsPage from "./screens/news/NewsPage";
import CompetitionsPage from "./screens/competition/CompetitionsPage";
import ManageCompetitionsPage from "./screens/competition/ManageCompetitions";
import AddCompetitions from "./screens/competition/AddCompetitions";
import TryScorers from "./screens/competition/TryScorers";
import Ladder from "./screens/competition/Ladder";

import KidsKornerPage from "./screens/kidskorner/KidsKornerPage";
import KidsKornerPage2 from "./screens/kidskorner2/KidsKorner2";
import KidsKornerPage3 from "./screens/kidskorner3/PreGameMealIdea";
import KidsKornerPage4 from "./screens/kidskorner4/PostGameMealIdea";
import KidsKornerPage5 from "./screens/kidskorner5/PackingAHealthy";
import KidsKornerPage6 from "./screens/kidskorner6/HealthySnacks";
import KidsKornerPage7 from "./screens/kidskorner7/FoodChart";


import MorePage from "./screens/menu/More";
import Profile from './screens/profile/Profile';
import ManageProfile from './screens/profile/ManageProfile';
import RegistrationHistory from './screens/profile/RegistrationHistory';
import YourTeam from './screens/profile/YourTeam';
import TeamMembers from './screens/profile/TeamMembers';

import RefereeP from './screens/referee/Referee';
import RefereeP2 from './screens/referee/Referee2';
import Scoring from './screens/referee/Scoring';










import ArticlePage from "./screens/article/ArticlePage";
import CompleteProfilePage from "./screens/completeprofile/CompleteProfilePage";
import More from "./assets/Nav icons/More.svg";

import RegistrationPage from "./screens/register/RegistrationPage";
import Onboarding1 from "./screens/slides/Onboarding1";

import ChooseYourRole from "./pages/ChooseRolePage";
import ChooseProfile from "./pages/ChooseProfile";


const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/home">
              <HomePage />
            </Route>
            <Route exact path="/competitions">
              <CompetitionsPage />
            </Route> 
            <Route exact path="/managecompetitions">
              <ManageCompetitionsPage />
            </Route>
            <Route exact path="/addcompetitions">
              <AddCompetitions />
            </Route>

            <Route exact path="/tryscorers">
              <TryScorers />
            </Route>
            <Route exact path="/ladder">
              <Ladder />
            </Route>

            <Route exact path="/complete_profile">
              <CompleteProfilePage />
            </Route>
            <Route exact path="/onboarding1">
              <Onboarding1 />
            </Route>
       
            <Route exact path="/choose_your_role">
              <ChooseYourRole />
            </Route>
            <Route exact path="/choose_profile">
              <ChooseProfile />
            </Route>
   
            <Route exact path="/kidskorner">
              <KidsKornerPage />
            </Route> 
            
            <Route exact path="/kidskorner2">
              <KidsKornerPage2 />
            </Route>

            <Route exact path="/pregamemealidea">
              <KidsKornerPage3 />
            </Route>

            <Route exact path="/postgamemealidea">
              <KidsKornerPage4 />
            </Route>
            <Route exact path="/packingahealthylunchbox">
              <KidsKornerPage5 />
            </Route>
            <Route exact path="/healthysnacks">
              <KidsKornerPage6 />
            </Route>
            <Route exact path="/foodchart">
              <KidsKornerPage7 />
            </Route>
            
            <Route exact path="/register">
              <RegistrationPage />
            </Route>
            <Route exact path="/more">
              <MorePage />
            </Route> 
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/manageprofile">
              <ManageProfile />
            </Route>
            <Route exact path="/registrationhistory">
              <RegistrationHistory />
            </Route>
            <Route exact path="/yourteams">
              <YourTeam />
            </Route>

            <Route exact path="/teammembers">
              <TeamMembers />
            </Route>


            <Route exact path="/referee">
              <RefereeP />
            </Route>
            <Route exact path="/referee2">
              <RefereeP2 />
            </Route> 
              <Route exact path="/scoring">
              <Scoring />
            </Route>








            <Route exact path="/news">
              <NewsPage />
            </Route>
            <Route exact path="/article">
              <ArticlePage />
            </Route>
            <Route exact path="/entries/:id"></Route>
            <Route exact path="/settings">
              <SettingsPage />
            </Route>
            <Redirect exact path="/" to="/home" />
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

            <IonTabButton tab="more" href="/more">
              <IonIcon icon={More} />
              <IonLabel>More</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
