import React from "react";
import { IonModal, IonContent, IonIcon, IonItem, IonLabel, IonList, IonButton, useIonRouter } from "@ionic/react";
import { chevronForwardOutline } from "ionicons/icons";

import PayLoan from "/assets/images/dashboard/3D_pay_loan.png";
import { ROUTES } from "../../../../constants/routes";

interface PayLoanModalProps {
  isOpen: boolean;
  onDidDismiss: () => void;
}

const PayLoanModal: React.FC<PayLoanModalProps> = ({ isOpen, onDidDismiss }) => {
  const router = useIonRouter();
  const loans = [
    {
      id: "040501-1303001-8",
      name: "Salary Loan",
      amount: "P428,950.00",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-[#a10f08]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path d="M4.5 3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0V3.75ZM7.5 4.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75v15a.75.75 0 0 1-.75.75H8.25a.75.75 0 0 1-.75-.75v-15ZM9 5.25v13.5h7.5V5.25H9Zm2.25 2.25a.75.75 0 1 0 0 1.5h3a.75.75 0 1 0 0-1.5h-3Zm0 3a.75.75 0 1 0 0 1.5h3a.75.75 0 1 0 0-1.5h-3Zm0 3a.75.75 0 1 0 0 1.5h3a.75.75 0 1 0 0-1.5h-3Z" />
          </svg>
        </div>
      ),
    },
    {
      id: "040501-1303001-9",
      name: "Emergency Loan",
      amount: "P15,000.00",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-[#a10f08]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path d="M12 2a1 1 0 0 1 1 1v6.258l5.42-3.13a1 1 0 1 1 1 1.732L14 11l5.42 3.13a1 1 0 1 1-1 1.732L13 12.742V19a1 1 0 1 1-2 0v-6.258l-5.42 3.13a1 1 0 1 1-1-1.732L10 11 4.58 7.87a1 1 0 1 1 1-1.732L11 9.258V3a1 1 0 0 1 1-1z" />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <IonModal isOpen={isOpen} onDidDismiss={onDidDismiss} initialBreakpoint={0.65} breakpoints={[0, 0.65, 0.9]} handleBehavior="cycle" className="pay-loan-modal">
      <IonContent className="ion-padding">
        <div className="flex flex-col items-center">
          {/* Header Illustration */}
          <div className="relative mb-6 mt-4">
            <img src={PayLoan} alt="Money illustration" className="h-32 w-32 object-contain" />
          </div>

          {/* Title and Subtitle */}
          <p className="text-center text-2xl font-bold text-neutral-800">Select Loan to Pay</p>
          <p className=" text-center mt-2 text-neutral-500">Choose the loan account you would like to settle today.</p>
        </div>

        {/* Selection Area */}
        <div className="mt-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-neutral-400">Selection</p>
          <div className="space-y-0">
            {loans.map((loan) => (
              <div
                key={loan.id}
                onClick={() => {
                  onDidDismiss();
                  router.push(ROUTES.MAKE_A_PAYMENT, "forward", "replace");
                }}
                className="flex w-full items-center justify-between border-b border-red-50 bg-white p-4 active:bg-neutral-50"
              >
                <div className="flex items-center gap-4 py-4">
                  {loan.icon}
                  <div className="text-left">
                    <p className="text-sm font-bold text-neutral-800">{loan.name}</p>
                    <p className="text-xs text-neutral-400">{loan.id}</p>
                    <p className="mt-1 text-lg font-black text-neutral-900">{loan.amount}</p>
                  </div>
                </div>
                <IonIcon icon={chevronForwardOutline} className="text-xl text-neutral-300" />
              </div>
            ))}
          </div>
        </div>
      </IonContent>
    </IonModal>
  );
};

export default PayLoanModal;
