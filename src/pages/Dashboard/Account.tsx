import React from "react";
import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonPage, IonRow } from "@ionic/react";
import { addCircle, business, calendarClearOutline, notificationsOutline, swapHorizontal, wallet } from "ionicons/icons";
import NavBar from "../../components/NavBar";

interface QuickAction {
  label: string;
  icon: string;
}

const Account: React.FC = () => {
  const quickActions: QuickAction[] = [
    { label: "Pay Loan", icon: wallet },
    { label: "Apply Loan", icon: business },
    { label: "Deposit", icon: addCircle },
    { label: "Transfer", icon: swapHorizontal },
  ];

  return (
    <IonPage>
      <IonContent fullscreen className="[--background:transparent]">
        <div className="min-h-full bg-[radial-gradient(circle_at_top,#f8e5de,#f2f2f2_35%,#f7f7f7_70%)] pb-28">ACCOUNTS PAGE</div>
      </IonContent>
    </IonPage>
  );
};

export default Account;
