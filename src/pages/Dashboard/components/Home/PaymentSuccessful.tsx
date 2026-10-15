import React from "react";
import { IonPage, IonContent, IonIcon, IonButton } from "@ionic/react";
import { alertCircleOutline } from "ionicons/icons";
import { useIonRouter } from "@ionic/react";
import { VscVerifiedFilled } from "react-icons/vsc";

const PaymentSuccessful: React.FC = () => {
  const router = useIonRouter();

  const DetailRow = ({ label, value }: { label: string; value: string }) => (
    <div className="flex items-center justify-between py-2.5 border-b border-zinc-50 last:border-none">
      <p className="text-[11px] font-medium text-neutral-400">{label}</p>
      <p className="text-[11px] font-bold text-neutral-800">{value}</p>
    </div>
  );

  return (
    <IonPage className="bg-[#f8f8f8] font-inter">
      <IonContent className="[--background:#f8f8f8] ion-padding">
        <div className="mx-auto flex max-w-md flex-col items-center pt-12 pb-10">
          {/* Success Icon & Message */}
          <div className="flex flex-col items-center text-center px-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#a10f08] shadow-[0_8px_20px_rgba(161,15,8,0.2)]">
              <VscVerifiedFilled className="text-5xl text-white" />
            </div>
            <p className="mt-6 text-2xl font-black text-[#a10f08]">
              Payment
              <br />
              Successful!
            </p>
            <p className="mt-4 px-4 text-[11px] leading-loose font-medium text-neutral-400">Your payment is now being processed. We will notify you once the verification is complete.</p>
          </div>

          {/* Transaction Summary Card */}
          <div className="mt-10 w-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-neutral-100 border-l-[3px] border-[#a10f08]">
            <div className="p-6">
              <div className="flex flex-col items-center mb-6">
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400/80">Payment Amount</p>
                <h2 className="text-2xl font-black text-neutral-800">₱6,450.00</h2>
              </div>

              <div className="flex flex-col gap-0.5">
                <DetailRow label="Loan Type" value="Salary Loan" />
                <DetailRow label="Payment Method" value="G-Exchange / GCash" />
                <DetailRow label="Reference Number" value="REF-0102-0304" />
                <DetailRow label="Transaction Date" value="October 23, 2026 • 4:00 pm" />
              </div>
            </div>
          </div>

          {/* Verification Policy Message */}
          <div className="mt-6 w-full flex gap-3 rounded-xl bg-white p-5 shadow-sm ring-1 ring-neutral-100">
            <IonIcon icon={alertCircleOutline} className="text-xl text-[#a10f08]" />
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-500">VERIFICATION POLICY</p>
              <p className="mt-1 text-[10px] leading-relaxed text-neutral-400">Standard verification typically takes 1-2 business days. Your savings growth starts the moment funds are cleared.</p>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-10 w-full">
            <IonButton
              onClick={() => router.push("/dashboard/home", "root", "replace")}
              mode="ios"
              expand="block"
              className="h-14 text-sm font-bold [--background:#a10f08] [--border-radius:14px] uppercase tracking-wide shadow-lg"
            >
              Back to Home
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PaymentSuccessful;
