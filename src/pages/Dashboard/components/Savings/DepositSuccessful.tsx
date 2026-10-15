import React from "react";
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, isPlatform, useIonRouter } from "@ionic/react";
import { alertCircleOutline, arrowBackOutline } from "ionicons/icons";
import { VscVerifiedFilled } from "react-icons/vsc";
import { ROUTES } from "../../../../constants/routes";

const DepositSuccessful: React.FC = () => {
  const router = useIonRouter();
  const isPlatformIos = isPlatform("ios") || isPlatform("ipad") || isPlatform("iphone");

  const DetailRow = ({ label, value }: { label: string; value: string }) => (
    <div className="flex items-center justify-between border-b border-zinc-50 py-2.5 last:border-none">
      <p className="text-[11px] font-medium text-neutral-400">{label}</p>
      <p className="text-[11px] font-bold text-neutral-700">{value}</p>
    </div>
  );

  return (
    <IonPage>
      <IonContent fullscreen className="[--background:#f3f3f3]">
        {isPlatformIos && <IonHeader></IonHeader>}

        <div className="min-h-full ion-padding">
          <IonGrid fixed className="ion-no-padding mx-auto w-full max-w-md px-1 pt-8 pb-14">
            <IonRow className="items-center border-b border-[#e5e5e5] pb-5">
              <IonCol size="2" className="ion-no-padding">
                <button type="button" onClick={() => router.push(ROUTES.REVIEW_DEPOSIT, "back")} className="flex h-9 w-9 items-center justify-center rounded-full text-[#9d0d07]">
                  <IonIcon icon={arrowBackOutline} className="text-lg" />
                </button>
              </IonCol>

              <IonCol size="10" className="ion-no-padding">
                <h1 className="text-[18px] font-black text-[#9d0d07]">Deposit Confirmation</h1>
              </IonCol>
            </IonRow>

            <div className="mx-auto flex w-full flex-col items-center pt-3 pb-8">
              <div className="flex flex-col items-center text-center px-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#a10f08] shadow-[0_8px_20px_rgba(161,15,8,0.2)]">
                  <VscVerifiedFilled className="text-4xl text-white" />
                </div>

                <p className="mt-5 text-3xl font-black text-[#a10f08]">Deposit Successful!</p>
                <p className="mt-2 max-w-72 text-[11px] leading-relaxed font-medium text-neutral-400">Your deposit is now being processed. We will notify you once the verification is complete.</p>
              </div>

              <article className="mt-5 w-full overflow-hidden rounded-2xl border-l-[3px] border-[#a10f08] bg-white shadow-sm ring-1 ring-neutral-100">
                <div className="p-5">
                  <div className="mb-5 flex flex-col items-center">
                    <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400/80">Amount</p>
                    <h2 className="text-3xl font-black text-neutral-800">₱12,500.00</h2>
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <DetailRow label="Savings Account" value="SUPPLEMENTAL DEP. 1" />
                    <DetailRow label="Payment Method" value="G-Echange / GCash" />
                    <DetailRow label="Reference Number" value="REF-0102-0304" />
                    <DetailRow label="Transaction Date" value="October 23, 2026 • 4:00 pm" />
                  </div>
                </div>
              </article>

              <div className="mt-5 w-full flex gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-neutral-100">
                <IonIcon icon={alertCircleOutline} className="text-lg text-[#a10f08]" />
                <p className="text-[10px] leading-relaxed text-neutral-400">Standard verification typically takes 1-2 business days. Your savings growth starts the moment funds are credited.</p>
              </div>

              <div className="mt-7 w-full">
                <IonButton
                  onClick={() => router.push(ROUTES.DASHBOARD_HOME, "root", "replace")}
                  mode="ios"
                  expand="block"
                  className="h-12 text-sm font-bold [--background:#a10f08] [--border-radius:14px] shadow-lg"
                >
                  Back to Home
                </IonButton>
              </div>
            </div>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default DepositSuccessful;
