import React from "react";
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, isPlatform, useIonRouter } from "@ionic/react";
import { arrowBackOutline, trashOutline } from "ionicons/icons";
import { ROUTES } from "../../../../constants/routes";
import RECEIPT_PREVIEW from "/assets/images/dashboard/3D_deposit_amount.png";

const ReviewDeposit: React.FC = () => {
  const router = useIonRouter();
  const isPlatformIos = isPlatform("ios") || isPlatform("ipad") || isPlatform("iphone");

  return (
    <IonPage>
      <IonContent fullscreen className="[--background:#f3f3f3]">
        {isPlatformIos && <IonHeader></IonHeader>}

        <div className="min-h-full ion-padding">
          <IonGrid fixed className="ion-no-padding mx-auto w-full max-w-md px-1 pt-8 pb-14">
            <IonRow className="items-center border-b border-[#e5e5e5] pb-5">
              <IonCol size="2" className="ion-no-padding">
                <button type="button" onClick={() => router.push(ROUTES.MAKE_A_DEPOSIT, "back")} className="flex h-9 w-9 items-center justify-center rounded-full text-[#9d0d07]">
                  <IonIcon icon={arrowBackOutline} className="text-lg" />
                </button>
              </IonCol>

              <IonCol size="10" className="ion-no-padding">
                <h1 className="text-[18px] font-black text-[#9d0d07]">Review Deposit</h1>
              </IonCol>
            </IonRow>

            <section className="pt-5 text-center">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400">Total Deposit Amount</p>
              <p className="mt-2 text-5xl font-black tracking-tight text-neutral-800">₱ 12,500.00</p>
            </section>

            <section className="mt-5 rounded-2xl border-l-4 border-[#d73a32] bg-white p-4 shadow-sm">
              <h2 className="text-sm font-bold text-neutral-700">Transaction Details</h2>

              <div className="mt-3 space-y-10 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Savings Account</span>
                  <span className="font-semibold text-neutral-700">SUPPLEMENTAL DEP. 1</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Payment Method</span>
                  <span className="font-semibold text-neutral-700">G-Echange / GCash</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Reference Number</span>
                  <span className="font-semibold text-neutral-700">REF-0102-0304</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Transaction Date</span>
                  <span className="font-semibold text-neutral-700">October 23, 2026 · 4:00 pm</span>
                </div>
              </div>
            </section>

            <section className="mt-5">
              <p className="mb-2 text-xs font-semibold text-neutral-500">Proof of Payment</p>

              <article className="flex items-center justify-between rounded-xl bg-white p-3 shadow-sm ring-1 ring-neutral-100">
                <div className="flex items-center gap-3">
                  <img src={RECEIPT_PREVIEW} alt="receipt preview" className="h-10 w-10 rounded-md object-cover" />

                  <div>
                    <p className="text-xs font-bold text-neutral-700">receipt_01.jpg</p>
                    <p className="text-[10px] text-neutral-400">1.2 MB · 11:15 PM uploaded</p>
                  </div>
                </div>

                <button type="button" className="text-neutral-400">
                  <IonIcon icon={trashOutline} className="text-base" />
                </button>
              </article>
            </section>

            <IonButton
              onClick={() => router.push(ROUTES.DEPOSIT_SUCCESSFUL, "forward")}
              expand="block"
              className="mt-6 h-12 font-black [--background:#a50d05] [--border-radius:14px] [--box-shadow:0_10px_20px_rgba(165,13,5,0.25)]"
            >
              Confirm & Submit
            </IonButton>

            <p className="mt-3 text-[10px] leading-4 text-neutral-400">By confirming, you agree to our terms & service regarding fund transfer and capital management.</p>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ReviewDeposit;
