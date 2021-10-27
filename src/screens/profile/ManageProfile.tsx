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
              label="First name"
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
              label="Last name"
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
              label="Date of birth"
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
              label="Gender"
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
          label="Email"
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
          label="Mobile"
          
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
          label="Address"
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
          label="Emergency contact"
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
          label="Emergency contact number"
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
            Save{" "}
          </IonButton>
      </IonContent>
    </IonApp>
  );
};

export default ProfilePage;
