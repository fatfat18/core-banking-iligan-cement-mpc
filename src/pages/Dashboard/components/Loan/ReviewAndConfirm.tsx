import React from "react";
import { IonButton, IonCol, IonGrid, IonIcon, IonRow, isPlatform } from "@ionic/react";

interface ReviewAndConfirmProps {
  onNext: () => void;
}

const ReviewAndConfirm: React.FC<ReviewAndConfirmProps> = ({ onNext }) => {
  const isPlatformIos = isPlatform("ios") || isPlatform("ipad") || isPlatform("iphone");

  const SummaryItem: React.FC<{ label: string; value: string; isP?: boolean }> = ({ label, value, isP }) => (
    <IonRow className="mb-2 items-center justify-between">
      <IonCol size="auto">
        <p className="text-[10px] font-medium text-neutral-400">{label}</p>
      </IonCol>
      <IonCol size="auto" className="text-right">
        <p className={`text-xs font-bold text-neutral-700 ${isP ? "font-bold" : ""}`}>{isP ? `₱ ${value}` : value}</p>
      </IonCol>
    </IonRow>
  );

  return (
    <IonGrid fixed className=" mx-auto w-full max-w-md px-6 pb-12 pt-4 mb-20 ">
      {/* Step info */}
      <div className="mb-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">Step 03 / 04</p>
        <h2 className="mt-1 text-2xl font-black tracking-tight text-[#930d07]">Review & Confirm</h2>
        <p className="mt-2 text-xs leading-relaxed text-neutral-500">Please verify your application details below before submitting.</p>
      </div>

      {/* Loan Summary */}
      <section className="mb-5 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-100">
        <h3 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-800">Loan Summary</h3>
        <SummaryItem label="Loan Type" value="Personal Loan (Diminishing)" />
        <SummaryItem label="Loan Amount" value="50,000" isP />
        <SummaryItem label="Loan Term" value="12 months" />
        <SummaryItem label="Interest Rate" value="9% per annum" />
      </section>

      {/* Deductions */}
      <section className="mb-5 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-100">
        <h3 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-800">Deductions</h3>
        <SummaryItem label="Processing Fees" value="250.00" isP />
      </section>

      {/* Amount You Receive */}
      <section className="mb-5 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-100">
        <h3 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-800">Amount You Receive</h3>
        <SummaryItem label="Net Proceeds" value="49,750.00" isP />
      </section>

      {/* Monthly Payment Details */}
      <section className="mb-8 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-100">
        <h3 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-800">Monthly Payment Details</h3>
        <SummaryItem label="Principal" value="4,166.67" isP />
        <SummaryItem label="Interest" value="375.00" isP />
        <SummaryItem label="Monthly Amortization" value="4,541.67" isP />
      </section>

      {/* Footer Buttons */}
      <div className="space-y-4">
        <IonButton expand="block" onClick={onNext} className="h-14 font-bold [--background:#930d07] [--border-radius:1rem] [--box-shadow:0_10px_20px_rgba(147,13,7,0.3)]">
          Submit
        </IonButton>
      </div>
    </IonGrid>
  );
};

export default ReviewAndConfirm;
