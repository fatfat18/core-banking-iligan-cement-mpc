import React from "react";
import { IonModal, IonContent, IonIcon } from "@ionic/react";
import { chevronForwardOutline } from "ionicons/icons";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../constants/routes";
import Deposit from "/assets/images/dashboard/3D_deposit_amount.png";

interface DepositModalProps {
  isOpen: boolean;
  onDidDismiss: () => void;
}

const DepositModal: React.FC<DepositModalProps> = ({ isOpen, onDidDismiss }) => {
  const navigate = useNavigate();
  const accounts = [
    {
      id: "040501-1303001-8",
      name: "Supplemental Dep. 1",
      amount: "P 5,942.49",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50/50 text-[#a10f08]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path d="M4.5 3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0V3.75ZM7.5 4.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 .75.75v15a.75.75 0 0 1-.75.75H8.25a.75.75 0 0 1-.75-.75v-15ZM9 5.25v13.5h7.5V5.25H9Zm2.25 2.25a.75.75 0 1 0 0 1.5h3a.75.75 0 1 0 0-1.5h-3Zm0 3a.75.75 0 1 0 0 1.5h3a.75.75 0 1 0 0-1.5h-3Zm0 3a.75.75 0 1 0 0 1.5h3a.75.75 0 1 0 0-1.5h-3Z" />
          </svg>
        </div>
      ),
    },
    {
      id: "040501-1303001-9",
      name: "Membership Assist. Program",
      amount: "P2,700.44",
      icon: (
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50/50 text-[#a10f08]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
            <path d="M12 2a1 1 0 0 1 1 1v6.258l5.42-3.13a1 1 0 1 1 1 1.732L14 11l5.42 3.13a1 1 0 1 1-1 1.732L13 12.742V19a1 1 0 1 1-2 0v-6.258l-5.42 3.13a1 1 0 1 1-1-1.732L10 11 4.58 7.87a1 1 0 1 1 1-1.732L11 9.258V3a1 1 0 0 1 1-1z" />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <IonModal isOpen={isOpen} onDidDismiss={onDidDismiss} initialBreakpoint={0.65} breakpoints={[0, 0.65, 0.9]} handleBehavior="cycle" className="deposit-modal">
      <IonContent className="ion-padding">
        <div className="flex flex-col items-center">
          {/* Header Illustration */}
          <div className="relative mb-6 mt-4">
            <img src={Deposit} alt="Deposit illustration" className="h-32 w-32 object-contain" />
          </div>

          {/* Title and Subtitle */}
          <p className="text-center text-2xl font-bold text-neutral-800">Select Deposit Account</p>
          <p className="text-center mt-2 text-neutral-500 text-lg">Choose which account you would like to fund.</p>
        </div>

        {/* Selection Area */}
        <div className="mt-8">
          <p className="mb-4 text-xl font-bold text-neutral-500">Selection</p>
          <div className="space-y-0 divide-y divide-neutral-100">
            {accounts.map((account) => (
              <div
                key={account.id}
                onClick={() => {
                  onDidDismiss();
                  navigate(ROUTES.MAKE_A_DEPOSIT);
                }}
                className="flex w-full items-center justify-between bg-white py-4 active:bg-neutral-50">
                <div className="flex items-center gap-4">
                  {account.icon}
                  <div className="text-left">
                    <p className="text-xl font-bold text-neutral-800 leading-tight">{account.name}</p>
                    <p className="text-sm text-neutral-400 mt-1">{account.id}</p>
                    <p className="mt-2 text-lg font-black text-neutral-900 tracking-tight">{account.amount}</p>
                  </div>
                </div>
                <IonIcon icon={chevronForwardOutline} className="text-2xl text-neutral-400" />
              </div>
            ))}
          </div>
        </div>
      </IonContent>
    </IonModal>
  );
};

export default DepositModal;
