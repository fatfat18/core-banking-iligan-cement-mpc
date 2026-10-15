import React from "react";
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, isPlatform, useIonRouter } from "@ionic/react";
import { arrowBack } from "ionicons/icons";

import SCAN_VERIFY from "/assets/images/account-verification/scan_verify.svg";
import NO_CAP from "/assets/images/account-verification/no_cap.svg";
import NO_GLASSES from "/assets/images/account-verification/no_glasses.svg";
import NO_MASK from "/assets/images/account-verification/no_mask.svg";

interface InstructionItem {
  id: string;
  label: string;
  image: string;
}

const instructions: InstructionItem[] = [
  {
    id: "no-cap",
    label: "No wearing cap",
    image: NO_CAP,
  },
  {
    id: "no-glasses",
    label: "No wearing glasses",
    image: NO_GLASSES,
  },
  {
    id: "no-mask",
    label: "No wearing mask",
    image: NO_MASK,
  },
];

const SelfieVerification: React.FC = () => {
  const router = useIonRouter();
  const isPlatformIos = isPlatform("ios") || isPlatform("ipad") || isPlatform("iphone");

  return (
    <IonPage>
      <IonContent fullscreen className="[--background:transparent] bg-[#f3f3f3]">
        {isPlatformIos && <IonHeader></IonHeader>}

        <div className="min-h-full ion-padding">
          <IonGrid fixed className="ion-no-padding mx-auto w-full max-w-md px-1 pt-8 pb-14">
            <IonRow className="items-center border-b border-[#e5e5e5] pb-5">
              <IonCol size="2" className="ion-no-padding">
                <button type="button" onClick={() => router.goBack()} className="flex h-9 w-9 items-center justify-center rounded-full text-[#9d0d07]">
                  <IonIcon icon={arrowBack} className="text-lg" />
                </button>
              </IonCol>

              <IonCol size="10" className="ion-no-padding">
                <h1 className="text-[32px] leading-none font-black tracking-tight text-[#9d0d07]">Selfie</h1>
              </IonCol>
            </IonRow>

            <IonRow className="pt-9">
              <IonCol size="12" className="ion-no-padding">
                <div className="flex justify-center">
                  <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#fff3dc,#ffe5b2_58%,#ffd594)] shadow-[0_10px_30px_rgba(182,122,24,0.28)]">
                    <img src={SCAN_VERIFY} alt="scan instruction" className="h-20 w-20 object-contain" />
                  </div>
                </div>

                <p className="mx-auto mt-6 max-w-[20rem] text-center text-[10px] leading-10 font-black tracking-tight text-[#222222]">
                  Ensure good lighting condition, put your face in the middle of the frame
                </p>
              </IonCol>
            </IonRow>

            <IonRow className="mt-8 border-t border-dashed border-[#dddddd] pt-5">
              <IonCol size="12" className="ion-no-padding">
                <h2 className="text-[22px] leading-none font-black tracking-tight text-[#292929]">Scan Instructions</h2>

                <IonGrid className="ion-no-padding mt-4">
                  <IonRow className="-mx-1.5">
                    {instructions.map((item) => (
                      <IonCol key={item.id} size="4" className="px-1.5">
                        <article className="h-full rounded-2xl bg-[#f9f9f9] px-2 py-4 text-center shadow-[0_4px_14px_rgba(0,0,0,0.04)] ring-1 ring-[#efefef]">
                          <img src={item.image} alt={item.label} className="mx-auto h-10 w-10 object-contain" />
                          <p className="mt-3 text-[11px] leading-4 font-medium text-[#8a8a8a]">{item.label}</p>
                        </article>
                      </IonCol>
                    ))}
                  </IonRow>
                </IonGrid>
              </IonCol>
            </IonRow>

            <IonRow className="mt-12">
              <IonCol size="12" className="ion-no-padding">
                <IonButton expand="block" className="h-14 text-xl font-extrabold [--background:#a50d05] [--border-radius:1rem] [--box-shadow:0_10px_24px_rgba(165,13,5,0.35)]">
                  Take Selfie
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SelfieVerification;
