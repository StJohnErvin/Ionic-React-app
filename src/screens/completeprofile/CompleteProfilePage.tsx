// eslint-disable-next-line
import {
  IonApp,
  IonButton,
  IonCheckbox,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,

  IonRow,

} from "@ionic/react";
import { TextField } from "@material-ui/core";
import React from "react";


const ArticlePage: React.FC = () => {
  return (
    <IonApp>
      <IonHeader></IonHeader>
      <IonContent>
        <IonItem lines="none"></IonItem>
        <IonGrid className="text-align: left">
          <IonRow>
            <IonCol>
              <IonItem lines="none">
                <h6
                  id=""
                  style={{
                    fontWeight: "bold",
                    fontSize: "22px",
                    color: "#008174",
                    fontFamily: "MontserratBold !important",
                  }}
                >
                  Complete profile{" "}
                </h6>
              </IonItem>

              <IonItem lines="none">
                {" "}
                <p
                  style={{
                    fontSize: "16px",
                    color: "#3C3835",
                    fontFamily: "Montserrat !important",
                  }}
                >
                  Create an account to make the most of your Tri Tag Rugby
                  experience
                </p>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem lines="none">
                <TextField
                  required
                  id="filled-required"
                  label="First name"
                  variant="filled"
                  style={{ width: "100%" }}
                />
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>{" "}
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem lines="none">
                <TextField
                  required
                  id="filled-required"
                  label="Last name"
                  variant="filled"
                  style={{ width: "100%" }}
                />
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>{" "}
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem lines="none">
                <TextField
                  required
                  id="filled-required"
                  label="Mobile"
                  variant="filled"
                  style={{ width: "100%" }}
                />
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>{" "}
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem lines="none">
                {" "}
                <p
                  style={{
                    fontSize: "16px",
                    color: "#3C3835",
                    fontFamily: "Montserrat !important",
                  }}
                >
                  {" "}
                  I agree to the Terms and Agreements and Privacy Policy
                </p>
                <IonCheckbox mode="md" slot="start" color="primary" />
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>{" "}
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem lines="none">
                <IonButton
                  expand="block"
                  type="submit"
                  mode="md"
                  style={{ marginTop: "1rem", width: "100%" }}
                  color="primary"
                  size="large"
                  slot="start"
                  href="/onboarding1"
                >
                  <p style={{ color: "white", fontSize: "13px" }}>
                    Complete profile
                  </p>
                </IonButton>
              </IonItem>
            </IonCol>
          </IonRow>
        </IonGrid>{" "}
      </IonContent>
    </IonApp>
  );
};

export default ArticlePage;
