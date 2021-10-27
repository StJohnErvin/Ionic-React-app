/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line
import {
  IonApp,
  IonButton,
  IonCol,
  IonContent,
  IonHeader,
  IonItem,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import ProfileTool from "../../components/bars/ProfileTool";

import ManageProfile from "../../components/more/MoreSegments";
import { TextField } from "@material-ui/core";

const ProfilePage: React.FC = () => {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <ProfileTool />
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <ManageProfile />

        <IonCol>
          <IonItem lines="none">
            <TextField
              required
              size='small'
              id="filled-required"
              label="Injury"
              variant="filled"
              style={{ width: "100%" }}
            />
          </IonItem>
        </IonCol>

        <IonCol>
          <IonItem lines="none">
            <TextField
              required
              size='small'
              id="filled-required"
              label="Team"
              variant="filled"
              style={{ width: "100%" }}
            />
          </IonItem>{" "}
        </IonCol>
        <IonCol>
          <IonItem lines="none">
            <TextField
              required
              size='small'
              id="filled-required"
              label="Player"
              variant="filled"
              style={{ width: "100%" }}
            />
          </IonItem>{" "}
        </IonCol>
        <IonCol>
          <IonItem lines="none">
            <TextField
              required
              size='small'
              id="filled-required"
              label="Injury area"
              variant="filled"
              style={{ width: "100%" }}
            />{" "}
          </IonItem>{" "}
        </IonCol>
        <IonCol>
          <IonItem lines="none">
        <TextField
          required
          size='small'
          id="filled-required"
          label="Injury types"
          variant="filled"
          style={{ width: "100%" }}
        />
              </IonItem>{" "}
        </IonCol>
        <IonCol>
          <IonItem lines="none">
        <TextField
      
          required
          size='small'
          id="filled-required"
          label="On-field action taken  "
          
          variant="outlined"
          style={{ width: "100%" }}
        />       </IonItem>{" "}
        </IonCol>
        <IonCol>
          <IonItem lines="none">
        
        <TextField
          required
          size='small'
          id="filled-required"
          label="Comments"
          variant="filled"
          style={{ width: "100%" }}
        />
         </IonItem>{" "}
        </IonCol>
        <IonCol>
          <IonItem lines="none">
        <TextField
          required
          size='small'
          id="filled-required"
          label="Upload supporting file"
          variant="filled"
          style={{ width: "100%" }}
        />
                 </IonItem>{" "}
        </IonCol>
       
        <IonButton
            className="ion-padding"
            expand="block"
            size='default'
            mode="md"
            style={{
              width: "100%",
              // height: "100%",
            }}
          >
            Submit{" "}
          </IonButton>
      </IonContent>
    </IonApp>
  );
};

export default ProfilePage;
