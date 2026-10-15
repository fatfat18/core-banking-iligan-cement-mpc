import React from "react";
import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonPage, IonRow, isPlatform, useIonRouter } from "@ionic/react";
import { arrowBackOutline, copyOutline, eyeOutline, addCircleOutline, swapHorizontalOutline, arrowForwardOutline, arrowDownOutline, businessOutline, trendingUpOutline } from "ionicons/icons";
import OVERVIEW_SAVINGS from "/assets/icons/overview_savings.svg";
import { ROUTES } from "../../../../constants/routes";

interface ActivityItem {
  title: string;
  meta: string;
  amount: string;
  status: string;
  type: "credit" | "neutral";
}

const activities: ActivityItem[] = [
  {
    title: "Dividends Credit",
    meta: "SEP 28, 2023 • REGULAR SAVINGS",
    amount: "+ ₱1,450.00",
    status: "COMPLETED",
    type: "credit",
  },
  {
    title: "Branch Deposit",
    meta: "SEP 28, 2023 • SPECIAL SAVINGS",
    amount: "+ ₱12,500.00",
    status: "VERIFIED",
    type: "neutral",
  },
  {
    title: "Dividends Credit",
    meta: "SEP 28, 2023 • REGULAR SAVINGS",
    amount: "+ ₱2,450.00",
    status: "COMPLETED",
    type: "credit",
  },
  {
    title: "Branch Deposit",
    meta: "SEP 28, 2023 • SPECIAL SAVINGS",
    amount: "+ ₱12,500.00",
    status: "VERIFIED",
    type: "neutral",
  },
];

const ViewSavings: React.FC = () => {
  const router = useIonRouter();
  const isPlatformIos = isPlatform("ios") || isPlatform("ipad") || isPlatform("iphone");

  return (
    <IonPage>
      <IonContent fullscreen className="[--background:#f3f3f3]">
        <div className="relative overflow-hidden rounded-b-[28px] bg-gradient-to-br from-[#ad0b03] via-[#7a0000] to-[#3a0000] px-6 pt-10 pb-20 text-white">
          {isPlatformIos && <div className="h-8" />}

          <IonIcon icon={OVERVIEW_SAVINGS} className="absolute -right-8 top-16 text-[160px] opacity-35" />

          <IonRow className="mb-6 items-center">
            <IonCol size="auto">
              <button type="button" onClick={() => router.push(ROUTES.DASHBOARD_SAVINGS, "back")} className="text-xl">
                <IonIcon icon={arrowBackOutline} />
              </button>
            </IonCol>
          </IonRow>

          <div>
            <h1 className="text-3xl font-black uppercase tracking-tight">Supplemental Dep.1</h1>
            <div className="mt-1 flex items-center gap-2 text-white/80">
              <p className="text-sm font-semibold tracking-wide">01826611781811</p>
              <button type="button" className="flex h-6 w-6 items-center justify-center rounded-md bg-white/15">
                <IonIcon icon={copyOutline} className="text-xs" />
              </button>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <p className="text-5xl font-black tracking-tight">₱5,942.49</p>
            <IonIcon icon={eyeOutline} className="text-2xl text-white/80" />
          </div>

          <IonRow className="mt-6 gap-4">
            <IonCol className="ion-no-padding">
              <IonButton expand="block" className="h-12 font-bold [--background:#ffffff] [--color:#930d07] [--border-radius:999px]">
                <IonIcon icon={addCircleOutline} slot="start" />
                Deposit
              </IonButton>
            </IonCol>
            <IonCol className="ion-no-padding">
              <IonButton expand="block" className="h-12 font-bold [--background:#ffffff] [--color:#930d07] [--border-radius:999px]">
                <IonIcon icon={swapHorizontalOutline} slot="start" />
                Transfer
              </IonButton>
            </IonCol>
          </IonRow>
        </div>

        <div className="ion-padding -translate-y-10">
          <IonGrid className="ion-no-padding w-full max-w-md space-y-6">
            <article className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-neutral-100">
              <IonRow className="items-start justify-between">
                <IonCol size="auto" className="ion-no-padding">
                  <p className="text-2xl font-semibold text-neutral-700">Your interest</p>
                </IonCol>
                <IonCol size="auto" className="ion-no-padding">
                  <IonIcon icon={trendingUpOutline} className="text-3xl text-emerald-600" />
                </IonCol>
              </IonRow>

              <IonRow className="mt-4">
                <IonCol size="6" className="border-r border-neutral-100 pr-4">
                  <p className="text-sm text-neutral-400">Current rate</p>
                  <p className="mt-1 text-3xl font-black text-neutral-700">3.0% p.a</p>
                </IonCol>
                <IonCol size="6" className="pl-4">
                  <p className="text-sm text-neutral-400">Interest earned this month</p>
                  <p className="mt-1 text-3xl font-black text-neutral-700">₱ 0.00</p>
                </IonCol>
              </IonRow>
            </article>

            <section className="pb-10">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-black uppercase tracking-wide text-neutral-600">Trasactions</h3>
                <button type="button" className="text-base font-semibold text-neutral-400">
                  View All
                </button>
              </div>

              <article className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-neutral-100">
                {activities.map((item, index) => {
                  const tone =
                    item.type === "credit"
                      ? {
                          bubble: "bg-emerald-50 text-emerald-500",
                          icon: arrowDownOutline,
                          amountTone: "text-emerald-500",
                        }
                      : {
                          bubble: "bg-red-50 text-[#b20f08]",
                          icon: businessOutline,
                          amountTone: "text-neutral-700",
                        };

                  return (
                    <div key={`${item.title}-${index}`} className="flex items-start justify-between border-b border-neutral-100 py-3 last:border-0 last:pb-0">
                      <div className="flex items-start gap-3">
                        <div className={`flex h-11 w-11 items-center justify-center rounded-full ${tone.bubble}`}>
                          <IonIcon icon={tone.icon} className="text-lg" />
                        </div>
                        <div>
                          <p className="text-[18px] font-bold leading-tight text-neutral-700">{item.title}</p>
                          <p className="mt-1 text-[11px] uppercase leading-tight tracking-wide text-neutral-400">{item.meta}</p>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className={`text-2xl font-black ${tone.amountTone}`}>{item.amount}</p>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-neutral-300">{item.status}</p>
                      </div>
                    </div>
                  );
                })}
              </article>
            </section>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ViewSavings;
