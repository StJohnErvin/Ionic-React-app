/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import {
  IonPopover,
  IonCard,
  IonCol,
  IonGrid,
  IonRow,
  IonIcon,
  IonItem,
} from "@ionic/react";
import Menu from "./OpenMixed";
import Settings from "../../assets/General icons/settings.svg";
import Logo from "../../assets/General icons/logo.svg";
import dropdown from "../../assets/General icons/dropdown.svg";

import { Link } from "react-router-dom";

const PopoverExample: React.FC = () => {
  const [showPopover, setShowPopover] = useState(false);

  return (
    <>
      <IonPopover
        mode="md"
        isOpen={showPopover}
        onDidDismiss={(e) => setShowPopover(false)}
      >
        <Menu />
        <Menu />
        <IonCol>
          {" "}
          <p
            style={{
              fontWeight: "normal",
              fontSize: "14px",
              color: "#3C3835",
              fontFamily: "Montserrat !important",
            }}
          >
            {" "}
            <Link to="/managecompetitions" style={{ textDecoration: "none" }}>
              <IonIcon color="primary" icon={Settings} /> Manage Competitions
            </Link>{" "}
          </p>
        </IonCol>
      </IonPopover>
      <IonCard onClick={() => setShowPopover(true)}>
        <IonGrid fixed={true}>
          <IonRow>
            <IonItem lines="none">
              <div slot='start'>
                <img  style={{width:'100% !important', height :" 100% !important", maxWidth:" 50px !important", maxHeight:'100px !important', marginTop:'0.5rem' }}  src={Logo} />


              </div>

              <div>
                <h6
                  style={{
                    fontWeight: "bold",
                    fontSize: "15px !important",
                    color: "#008174",
                    fontFamily: "MontserratBold !important",
                   marginBottom:'-1rem ',
                   width:'1000rem'

                  }}
                >
                  Open Mixed Monday{" "}
                </h6>

                <p
                  style={{
                    fontWeight: "normal",
                    fontSize: "14px",
                    color: "#3C3835",
                    fontFamily: "Montserrat !important",
                
                  }}
                >
                  Sydney Rugby Union{" "}
                </p>
              </div>
              <div slot='end' style={{marginLeft:'5rem'}} >
                <IonIcon icon={dropdown} />
              </div>
            </IonItem>
          </IonRow>
        </IonGrid>
      </IonCard>
    </>
  );
};

export default PopoverExample;
