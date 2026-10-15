import React, { useState } from "react";
import { IonButton, IonCol, IonGrid, IonIcon, IonRow, IonRange, isPlatform } from "@ionic/react";
import { briefcaseOutline, homeOutline, personOutline, arrowForwardOutline, informationOutline } from "ionicons/icons";

interface LoanDetailsProps {
  onNext: () => void;
}

const LoanDetails: React.FC<LoanDetailsProps> = ({ onNext }) => {
  const isPlatformIos = isPlatform("ios") || isPlatform("ipad") || isPlatform("iphone");
  const [selectedCategory, setSelectedCategory] = useState("personal");
  const [loanType, setLoanType] = useState("diminishing");
  const [amount, setAmount] = useState(5000);
  const [term, setTerm] = useState("12");

  const categories = [
    {
      id: "personal",
      title: "PERSONAL LOAN",
      description: "Support your everyday needs.",
      icon: personOutline,
    },
    {
      id: "home",
      title: "HOME LOAN",
      description: "Finance your dream home.",
      icon: homeOutline,
    },
    {
      id: "business",
      title: "BUSINESS LOAN",
      description: "Grow your business fast.",
      icon: briefcaseOutline,
    },
  ];

  const terms = ["12 Months", "24 Months", "36 Months", "48 Months"];

  return (
    <IonGrid fixed className=" mx-auto w-full max-w-md pb-12 pt-4 px-6">
      {/* Step info */}
      <div className="mb-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">Step 01 / 04</p>
        <h2 className="mt-1 text-2xl font-black tracking-tight text-[#930d07]">Loan Details</h2>
        <p className="mt-2 text-xs leading-relaxed text-neutral-500">Adjust your loan amount and term to find a payment plan that works for you</p>
      </div>

      {/* Loan Category */}
      <section className="mb-8">
        <h3 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">Loan Category</h3>
        <div className="space-y-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex w-full items-center justify-between rounded-2xl bg-white p-4 shadow-sm ring-1 transition-all ${selectedCategory === cat.id ? "ring-[#930d07]" : "ring-neutral-100"}`}
            >
              <div className="flex items-center gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${selectedCategory === cat.id ? "bg-[#930d07] text-white" : "bg-neutral-100 text-neutral-400"}`}>
                  <IonIcon size="large" icon={cat.icon} />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-neutral-800">{cat.title}</p>
                  <p className="text-[10px] text-neutral-400">{cat.description}</p>
                </div>
              </div>
              <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${selectedCategory === cat.id ? "border-[#930d07]" : "border-neutral-200"}`}>
                {selectedCategory === cat.id && <div className="h-2.5 w-2.5 rounded-full bg-[#930d07]" />}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Loan Type */}
      <section className="mb-8">
        <h3 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">Loan Type</h3>
        <IonRow className="gap-3">
          <IonCol className="ion-no-padding">
            <button
              onClick={() => setLoanType("diminishing")}
              className={`h-11 w-full rounded-xl text-xs font-bold transition-all ${loanType === "diminishing" ? "bg-white text-[#930d07] shadow-sm ring-1 ring-neutral-200" : "text-neutral-400"}`}
            >
              Diminishing
            </button>
          </IonCol>
          <IonCol className="ion-no-padding">
            <button
              onClick={() => setLoanType("prepaid")}
              className={`relative h-11 w-full rounded-xl text-xs font-bold transition-all ${
                loanType === "prepaid" ? "bg-white text-[#930d07] shadow-sm ring-1 ring-neutral-200" : "text-neutral-400"
              }`}
            >
              Prepaid
              <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-amber-400 text-white shadow-md">
                <IonIcon icon={informationOutline} className="text-sm font-bold" />
              </div>
            </button>
          </IonCol>
        </IonRow>
      </section>

      {/* Loan Amount */}
      <section className="mb-8">
        <IonRow className="mb-2 items-center justify-between">
          <IonCol size="auto">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">Loan Amount</h3>
          </IonCol>
          <IonCol size="auto">
            <p className="text-xl font-black text-[#930d07]">₱{amount.toLocaleString()}</p>
          </IonCol>
        </IonRow>
        <IonRange
          min={5000}
          max={100000}
          step={1000}
          value={amount}
          onIonInput={(e) => setAmount(e.detail.value as number)}
          className="[--bar-background:#e5e5e5] [--bar-background-active:#930d07] [--knob-background:#930d07] [--knob-size:20px]"
        />
        <IonRow className="justify-between">
          <p className="text-[10px] font-bold text-neutral-400">₱5,000.00</p>
          <p className="text-[10px] font-bold text-neutral-400">₱100,000.00</p>
        </IonRow>
      </section>

      {/* Loan Term */}
      <section className="mb-10">
        <h3 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">Loan Term</h3>
        <IonGrid className="ion-no-padding">
          <IonRow className="gap-y-3">
            {terms.map((t) => (
              <IonCol key={t} size="6" className={t.includes("12") || t.includes("36") ? "pr-1.5" : "pl-1.5"}>
                <button
                  onClick={() => setTerm(t.split(" ")[0])}
                  className={`h-12 w-full rounded-xl text-xs font-bold transition-all ${
                    term === t.split(" ")[0] ? "bg-white text-[#930d07] shadow-sm ring-1 ring-[#930d07]" : "bg-white text-neutral-800 shadow-sm ring-1 ring-neutral-100"
                  }`}
                >
                  {t}
                </button>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </section>

      {/* Footer Button */}
      <IonButton expand="block" onClick={onNext} className="h-14 font-bold [--background:#930d07] [--border-radius:1rem] [--box-shadow:0_10px_20px_rgba(147,13,7,0.3)]">
        Continue <IonIcon icon={arrowForwardOutline} slot="end" className="text-lg" />
      </IonButton>
    </IonGrid>
  );
};

export default LoanDetails;
