import React, { useMemo, useState } from "react";
import { IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, isPlatform, useIonRouter } from "@ionic/react";
import { arrowBack, cashOutline, checkmarkCircleOutline, lockClosedOutline, megaphoneOutline, notificationsOutline } from "ionicons/icons";
import { ROUTES } from "../../constants/routes";

type NotificationCategory = "All" | "Loans" | "Deposits" | "Announcements";

interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  category: Exclude<NotificationCategory, "All">;
  highlighted?: boolean;
  icon: string;
}

const notificationTabs: NotificationCategory[] = ["All", "Loans", "Deposits", "Announcements"];

const notificationFeed: NotificationItem[] = [
  {
    id: "loan-approved",
    title: "Loan Approved!",
    message: "Your Salary Loan application (#L-2023-8842) has been approved. Tap to view details",
    time: "2m ago",
    category: "Loans",
    highlighted: true,
    icon: checkmarkCircleOutline,
  },
  {
    id: "dividend-credited",
    title: "Dividend Credited",
    message: "PHP 2,450.00 has been credited to your Regular Savings Account.",
    time: "1h ago",
    category: "Deposits",
    icon: cashOutline,
  },
  {
    id: "agm-message",
    title: "New Message from MEMPCO",
    message: "Check out the latest updates from our Annual General Assembly",
    time: "1d ago",
    category: "Announcements",
    icon: megaphoneOutline,
  },
  {
    id: "security-alert",
    title: "Security Alert",
    message: "Your password was successfully changed.",
    time: "1d ago",
    category: "Announcements",
    icon: lockClosedOutline,
  },
];

const Notifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NotificationCategory>("All");
  const router = useIonRouter();
  const isPlatformIos = isPlatform("ios") || isPlatform("ipad") || isPlatform("iphone");

  const visibleNotifications = useMemo(() => {
    if (activeTab === "All") {
      return notificationFeed;
    }

    return notificationFeed.filter((item) => item.category === activeTab);
  }, [activeTab]);

  return (
    <IonPage>
      <IonContent fullscreen className="[--background:transparent] bg-[#f3f3f3]">
        {isPlatformIos && (
          <IonHeader>
            {" "}
            <IonRow className="items-center border-b border-[#e5e5e5] pb-5">
              <IonCol size="2" className="pl-4">
                <button type="button" onClick={() => router.push(ROUTES.DASHBOARD)} className="flex h-9 w-9 items-center justify-center rounded-full text-[#9d0d07]">
                  <IonIcon icon={arrowBack} className="text-2xl" />
                </button>
              </IonCol>
              <IonCol size="10" className="ion-no-padding">
                <h1 className="text-xl font-bold text-[#9d0d07]">Notifications</h1>
              </IonCol>
            </IonRow>
          </IonHeader>
        )}

        <div className="min-h-full ion-padding">
          <IonGrid fixed className="ion-no-padding mx-auto w-full max-w-md px-1 pt-8 pb-20">
            <IonRow className="mt-4 flex-nowrap overflow-x-auto pb-1 scrollbar-none [&::-webkit-scrollbar]:hidden">
              {notificationTabs.map((tab) => {
                const selected = tab === activeTab;

                return (
                  <IonCol key={tab} size="auto" className="ion-no-padding mr-2">
                    <div
                      onClick={() => setActiveTab(tab)}
                      className={`rounded-full px-4 py-3 text-sm font-semibold transition-colors ${selected ? "bg-[#9d0d07] text-white border-[#9d0d07]" : "bg-[#ececec] text-[#2b2b2b] border-transparent   hover:bg-[#d9d9d9]"}`}
                    >
                      {tab}
                    </div>
                  </IonCol>
                );
              })}
            </IonRow>

            {visibleNotifications.length === 0 ? (
              <IonRow className="min-h-[60vh] items-center justify-center">
                <IonCol size="12" className="text-center">
                  <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-[#ffd8d2] text-[#b5170d] shadow-[0_10px_26px_rgba(157,13,7,0.18)]">
                    <IonIcon icon={notificationsOutline} className="text-6xl" />
                  </div>
                  <h2 className="text-3xl font-black tracking-tight text-[#222222]">Your inbox is clear</h2>
                  <p className="mx-auto mt-3 max-w-76 text-sm leading-6 text-[#7a7a7a]">We'll notify you here about loan approvals, dividend credits, and important cooperative news.</p>
                </IonCol>
              </IonRow>
            ) : (
              <IonRow className="mt-5">
                <IonCol size="12" className="ion-no-padding space-y-3">
                  {visibleNotifications.map((item) => (
                    <article
                      key={item.id}
                      className={`rounded-2xl  px-3 py-3 shadow-[0_2px_10px_rgba(0,0,0,0.04)] ${item.highlighted ? " border-[#b30f08] border-l-4!  bg-[#f7eceb]" : "bg-[#fafafa]"}`}
                    >
                      <IonRow className="items-start gap-3">
                        <IonCol size="auto" className="ion-no-padding">
                          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f0f0f0] text-[#9d0d07]">
                            <IonIcon icon={item.icon} className="text-xl" />
                          </div>
                        </IonCol>

                        <IonCol className="ion-no-padding">
                          <IonRow className="items-start justify-between gap-2">
                            <IonCol size="auto" className="ion-no-padding">
                              <h3 className="text-[15px] font-bold leading-tight text-[#202020]">{item.title}</h3>
                            </IonCol>
                            <IonCol size="auto" className="ion-no-padding">
                              <div className="flex items-center gap-1 text-xs text-[#8e8e8e]">
                                <span>{item.time}</span>
                                {item.highlighted && <span className="h-1.5 w-1.5 rounded-full bg-[#b30f08]" />}
                              </div>
                            </IonCol>
                          </IonRow>

                          <p className="mt-1 text-xs leading-5 text-[#6e6e6e]">{item.message}</p>
                        </IonCol>
                      </IonRow>
                    </article>
                  ))}
                </IonCol>
              </IonRow>
            )}
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Notifications;
