import React from "react";
import { IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, isPlatform, useIonRouter } from "@ionic/react";
import { arrowBack, cameraOutline, cardOutline } from "ionicons/icons";
import { ROUTES } from "../../../../../constants/routes";

interface RequirementItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
}

const requirements: RequirementItem[] = [
  {
    id: "selfie",
    title: "Selfie",
    description: "Take a clear selfie for identity verification.",
    icon: cameraOutline,
    path: ROUTES.SELFIE_VERIFICATION,
  },
  {
    id: "id-document",
    title: "ID Document",
    description: "Provide your ID Card for address verification",
    icon: cardOutline,
    path: ROUTES.ID_DOCUMENT_VERIFICATION,
  },
];

const AccountVerification: React.FC = () => {
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
                <h1 className="text-base font-bold text-[#9d0d07]">Account Verification</h1>
              </IonCol>
            </IonRow>

            <IonRow className="mt-5">
              <IonCol size="12" className="ion-no-padding">
                <h2 className="text-[30px] leading-8 font-black tracking-tight text-[#222222]">Complete the required details to proceed.</h2>
                <p className="mt-2 text-xs leading-5 text-[#8b8b8b]">Please ensure all information provided is correct, as this may affect to approval.</p>
              </IonCol>
            </IonRow>

            <IonRow className="mt-6">
              <IonCol size="12" className="ion-no-padding space-y-3">
                {requirements.map((item) => (
                  <article key={item.id} className="rounded-2xl bg-[#f8f8f8] px-4 py-4 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
                    <IonRow className="items-start gap-3">
                      <IonCol size="auto" className="ion-no-padding">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#f1f1f1] text-[#b30f08]">
                          <IonIcon icon={item.icon} className="text-sm" />
                        </div>
                      </IonCol>

                      <IonCol className="ion-no-padding">
                        <h3 className="text-[15px] font-bold leading-tight text-[#202020]">{item.title}</h3>
                        <p className="mt-1 text-[11px] leading-4 text-[#8f8f8f]">{item.description}</p>
                        <button type="button" onClick={() => router.push(item.path)} className="mt-2 text-xs font-bold text-[#b30f08]">
                          Add details
                        </button>
                      </IonCol>
                    </IonRow>
                  </article>
                ))}
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AccountVerification;
