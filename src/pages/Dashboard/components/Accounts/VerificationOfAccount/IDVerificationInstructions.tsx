import React from "react";
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, isPlatform, useIonRouter } from "@ionic/react";
import { arrowBack } from "ionicons/icons";

import CLEAR_IMAGE from "/assets/images/account-verification/clear.png";
import NOT_CENTERED_IMAGE from "/assets/images/account-verification/not_centered.png";
import BLURRY_IMAGE from "/assets/images/account-verification/blurry.png";

interface ScanInstruction {
  id: string;
  image: string;
  label: string;
}

const scanInstructions: ScanInstruction[] = [
  {
    id: "centered",
    image: CLEAR_IMAGE,
    label: "Centered image",
  },
  {
    id: "missing-corner",
    image: NOT_CENTERED_IMAGE,
    label: "Missing corner is not allowed",
  },
  {
    id: "blurry-dark",
    image: BLURRY_IMAGE,
    label: "Avoid blurry & dark image",
  },
];

const IDVerificationInstructions: React.FC = () => {
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
                <h1 className="text-[32px] leading-none font-black tracking-tight text-[#9d0d07]">Instructions</h1>
              </IonCol>
            </IonRow>

            <IonRow className="pt-9">
              <IonCol size="12" className="ion-no-padding">
                <div className="flex justify-center">
                  <div className="rounded-2xl bg-white px-5 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.08)] ring-1 ring-[#efefef]">
                    <img src={CLEAR_IMAGE} alt="ID card sample" className="h-20 w-28 object-contain" />
                  </div>
                </div>

                <p className="mx-auto mt-6 max-w-76 text-center text-base leading-10 font-black tracking-tight text-[#222222]">The photos will be captured automatically when qualified.</p>
              </IonCol>
            </IonRow>

            <IonRow className="mt-8 border-t border-dashed border-[#dddddd] pt-5">
              <IonCol size="12" className="ion-no-padding">
                <h2 className="text-[22px] leading-none font-black tracking-tight text-[#292929]">Scan Instructions</h2>

                <IonGrid className="ion-no-padding mt-4">
                  <IonRow className="-mx-1.5">
                    {scanInstructions.map((instruction) => (
                      <IonCol key={instruction.id} size="4" className="px-1.5">
                        <article className="h-full rounded-2xl bg-[#f9f9f9] px-2 py-4 text-center shadow-[0_4px_14px_rgba(0,0,0,0.04)] ring-1 ring-[#efefef]">
                          <img src={instruction.image} alt={instruction.label} className="mx-auto h-10 w-14 object-contain" />
                          <p className="mt-3 text-[11px] leading-4 font-medium text-[#8a8a8a]">{instruction.label}</p>
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
                  Scan ID Card
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default IDVerificationInstructions;
