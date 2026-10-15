import React, { useState } from "react";
import { IonButton, IonCol, IonGrid, IonIcon, IonRow, IonCheckbox, isPlatform } from "@ionic/react";
import { arrowForwardOutline, walletOutline, cardOutline, giftOutline, cameraOutline, idCardOutline, documentTextOutline, leafOutline } from "ionicons/icons";

interface VerificationProps {
  onNext: () => void;
}

const Verification: React.FC<VerificationProps> = ({ onNext }) => {
  const isPlatformIos = isPlatform("ios") || isPlatform("ipad") || isPlatform("iphone");
  const [disbursementMethod, setDisbursementMethod] = useState("savings");
  const [agreed, setAgreed] = useState(false);

  const disbursementMethods = [
    { id: "savings", title: "SAVINGS", icon: walletOutline },
    { id: "atm", title: "ATM ACCOUNT", icon: cardOutline },
    { id: "rice", title: "RICE", icon: leafOutline },
    { id: "gift", title: "GIFT CERTIFICATE", icon: giftOutline },
  ];

  return (
    <IonGrid fixed className=" mx-auto w-full  px-6 pb-12 pt-4 mb-20">
      {/* Step info */}
      <div className="mb-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">Step 02 / 04</p>
        <h2 className="mt-1 text-2xl font-black tracking-tight text-[#930d07]">Verification</h2>
        <p className="mt-2 text-xs leading-relaxed text-neutral-500">Confirm your details to finalize your application</p>
      </div>

      {/* Disbursement Method */}
      <section className="mb-8">
        <h3 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">Disbursement Method</h3>
        <div className="space-y-3">
          {disbursementMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => setDisbursementMethod(method.id)}
              className={`flex w-full items-center justify-between rounded-2xl bg-white p-4 shadow-sm ring-1 transition-all ${
                disbursementMethod === method.id ? "ring-[#930d07]" : "ring-neutral-100"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-400`}>
                  <IonIcon icon={method.icon} />
                </div>
                <p className="text-xs font-bold text-neutral-800">{method.title}</p>
              </div>
              <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${disbursementMethod === method.id ? "border-[#930d07]" : "border-neutral-200"}`}>
                {disbursementMethod === method.id && <div className="h-2.5 w-2.5 rounded-full bg-[#930d07]" />}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Documentary Requirements */}
      <section className="mb-8">
        <h3 className="mb-4 text-sm! uppercase  text-neutral-500">Documentary Requirements</h3>

        <div className="space-y-4">
          {/* Gov ID */}
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-neutral-100">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-[#930d07]">
                <IonIcon icon={idCardOutline} className="text-xl" />
              </div>
              <span className="rounded bg-red-50 px-2 py-1 text-[10px] font-bold text-[#930d07]">Required</span>
            </div>
            <h4 className="text-xs font-bold text-neutral-800">Government ID</h4>
            <p className="mt-1 text-[10px] text-neutral-400">Valid Passport, Driver's License...</p>
            <IonButton fill="clear" expand="block" className="mt-4 h-11 bg-neutral-50 text-xs font-semibold text-neutral-500 [--border-radius:12px]">
              Browse File
            </IonButton>
          </div>

          {/* Proof of Income */}
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-neutral-100">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-[#930d07]">
                <IonIcon icon={documentTextOutline} className="text-xl" />
              </div>
              <span className="rounded bg-red-50 px-2 py-1 text-[10px] font-bold text-[#930d07]">Required</span>
            </div>
            <h4 className="text-xs font-bold text-neutral-800">Proof of Income</h4>
            <p className="mt-1 text-[10px] text-neutral-400">Proof_of_income_2023.pdf</p>
            <IonButton fill="clear" expand="block" className="mt-4 h-11 bg-neutral-50 text-xs font-semibold text-neutral-500 [--border-radius:12px]">
              Browse File
            </IonButton>
          </div>
        </div>
      </section>

      {/* Selfie with Valid ID */}
      <section className="mb-8">
        <h3 className="mb-4 text-sm! uppercase text-neutral-500">Selfie with Valid ID</h3>
        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-neutral-100">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-[#930d07]">
              <IonIcon icon={cameraOutline} className="text-xl" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-neutral-800">Live Bio - Capture</h4>
              <p className="mt-1 text-[10px] leading-tight text-neutral-400">Hold your ID beside your face and ensure both are visible.</p>
            </div>
          </div>
          <IonButton fill="outline" expand="block" className="mt-5 h-12 text-xs font-bold text-neutral-800 [--border-radius:12px] [--border-color:#e5e5e5]">
            <IonIcon icon={cameraOutline} slot="start" /> Open Camera for Selfie
          </IonButton>
        </div>
      </section>

      {/* Digital Signature */}
      <section className="mb-8 text-right">
        <h3 className="mb-4 text-left text-sm! font-semibold uppercase  text-neutral-500">Digital Authorization Signature</h3>
        <div className="h-40 rounded-2xl bg-white shadow-sm ring-1 ring-neutral-100 relative">
          {/* Signature pad area */}
          <button className="absolute bottom-4 right-6 text-sm! font-bold text-neutral-400">Clear Signature</button>
        </div>
      </section>

      {/* Terms and Privacy */}
      <div className="mb-8 flex items-start gap-3">
        <IonCheckbox
          checked={agreed}
          onIonChange={(e) => setAgreed(e.detail.checked as boolean)}
          className="mt-1 [--size:18px] [--border-radius:4px] [--checkbox-background-checked:#930d07] [--border-color:#d1d1d1]"
        />
        <p className="text-[11px] leading-relaxed text-neutral-500">
          I agree to the <span className="font-bold text-[#930d07]">Terms & Condition</span> and <span className="font-bold text-[#930d07]">Privacy Policy</span> regarding my loan application.
        </p>
      </div>

      {/* Footer Buttons */}
      <div className="space-y-4">
        <IonButton expand="block" onClick={onNext} className="h-14 font-bold [--background:#930d07] [--border-radius:1rem] [--box-shadow:0_10px_20px_rgba(147,13,7,0.3)]">
          Continue <IonIcon icon={arrowForwardOutline} slot="end" className="text-lg" />
        </IonButton>
      </div>
    </IonGrid>
  );
};

export default Verification;
