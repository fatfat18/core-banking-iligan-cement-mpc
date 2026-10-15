import React from "react";
import { IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, isPlatform, useIonRouter } from "@ionic/react";
import { arrowBack, chevronForward, roseOutline } from "ionicons/icons";
import { ROUTES } from "../../../../../constants/routes";

const idTypes = ["UMID", "Philsys ID", "Driver's License", "Postal ID", "Voter's ID", "PRC"];

const IDVerification: React.FC = () => {
  const router = useIonRouter();
  const isPlatformIos = isPlatform("ios") || isPlatform("ipad") || isPlatform("iphone");

  return (
    <IonPage>
      <IonContent fullscreen className="[--background:transparent] bg-[#f3f3f3]">
        {isPlatformIos && <IonHeader></IonHeader>}

        <div className="min-h-full ion-padding">
          <IonGrid fixed className="ion-no-padding mx-auto w-full max-w-md px-1 pt-8 pb-16">
            <IonRow className="items-center border-b border-[#e5e5e5] pb-5">
              <IonCol size="2" className="ion-no-padding">
                <button type="button" onClick={() => router.goBack()} className="flex h-9 w-9 items-center justify-center rounded-full text-[#9d0d07]">
                  <IonIcon icon={arrowBack} className="text-lg" />
                </button>
              </IonCol>

              <IonCol size="10" className="ion-no-padding">
                <h1 className="text-[32px] leading-none font-black tracking-tight text-[#9d0d07]">ID document</h1>
              </IonCol>
            </IonRow>

            <IonRow className="mt-6">
              <IonCol size="12" className="ion-no-padding">
                <h2 className="text-[39px] leading-10 font-black tracking-tight text-[#222222]">Select an ID type</h2>
                <p className="mt-2 text-sm leading-5 text-[#878787]">Front side of the original document is required.</p>
              </IonCol>
            </IonRow>

            <IonRow className="mt-5">
              <IonCol size="12" className="ion-no-padding space-y-3">
                {idTypes.map((type) => (
                  <div
                    key={type}
                    onClick={() => router.push(ROUTES.INSTRUCTIONS)}
                    className="flex p-4 w-full items-center justify-between rounded-2xl bg-[#f8f8f8] px-4 py-4 text-left shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-colors hover:bg-[#f5f5f5]"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#b30f08] ring-1 ring-[#ededed]">
                        <IonIcon icon={roseOutline} className="text-base" />
                      </div>
                      <span className="text-sm leading-none font-semibold text-[#626262]">{type}</span>
                    </div>

                    <IonIcon icon={chevronForward} className="text-lg text-[#b4b4b4]" />
                  </div>
                ))}
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default IDVerification;
