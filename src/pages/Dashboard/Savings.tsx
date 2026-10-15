import React from "react";
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, isPlatform, useIonRouter } from "@ionic/react";
import { chevronForwardOutline, trendingUpOutline } from "ionicons/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import OVERVIEW_SAVINGS from "/assets/icons/overview_savings.svg";
import OVERVIEW_COINS from "/assets/icons/overview_coins.svg";
import { ROUTES } from "../../constants/routes";

import "swiper/css";

interface SavingsAccount {
  name: string;
  balance: string;
  monthlyNote: string;
  annualRate: string;
}

const savingsAccounts: SavingsAccount[] = [
  {
    name: "Supplemental Dep. 1",
    balance: "₱ 5,942.49",
    monthlyNote: "INTEREST CREDITED MONTHLY",
    annualRate: "4.5% P.A",
  },
  {
    name: "Membership Savings",
    balance: "₱ 12,310.76",
    monthlyNote: "INTEREST CREDITED MONTHLY",
    annualRate: "4.2% P.A",
  },
];

const Savings: React.FC = () => {
  const isPlatformIos = isPlatform("ios") || isPlatform("ipad") || isPlatform("iphone");
  const router = useIonRouter();

  return (
    <IonPage className="font-inter">
      <IonContent fullscreen className="[--background:transparent] bg-[radial-gradient(circle_at_top,#f8e5de,#f2f2f2_35%,#f7f7f7_70%)]">
        {isPlatformIos && <IonHeader></IonHeader>}

        <div className="min-h-full ion-padding mb-40">
          <IonGrid fixed className="ion-no-padding mx-auto w-full max-w-md px-4 pt-11">
            <article className="relative mb-6 overflow-hidden rounded-3xl bg-linear-to-br from-[#8b0000] via-[#6d0000] to-[#4b0000] p-6 text-white shadow-lg">
              <img src={OVERVIEW_SAVINGS} alt="savings icon" className="absolute -right-4 -top-4 h-36 w-36 opacity-15" />
              <img src={OVERVIEW_COINS} alt="coins icon" className="absolute right-2 bottom-2 h-20 w-20 opacity-20" />

              <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/80">Total Savings Balance</p>
              <p className="mt-2 text-4xl font-black tracking-tight">₱ 428,950.00</p>

              <IonGrid className="ion-no-padding mt-6">
                <IonRow className="gap-y-3">
                  <IonCol size="6" className="pr-1.5">
                    <div className="rounded-xl bg-white/14 p-3 backdrop-blur-sm">
                      <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/75">Yearly Growth</p>
                      <div className="mt-1.5 flex items-center gap-2">
                        <span className="text-base font-black">+ 12.4%</span>
                        <IonIcon icon={trendingUpOutline} className="text-base text-emerald-300" />
                      </div>
                    </div>
                  </IonCol>

                  <IonCol size="6" className="pl-1.5">
                    <div className="rounded-xl bg-white/14 p-3 backdrop-blur-sm">
                      <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/75">Interest</p>
                      <div className="mt-1.5 flex items-center gap-1.5">
                        <span className="text-base font-black">₱4,210.00</span>
                        <span className="text-xs text-amber-300">★</span>
                      </div>
                    </div>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </article>

            <section className="mb-7">
              <IonRow className="mb-3 items-center justify-between">
                <IonCol size="auto">
                  <p className="text-xs font-bold uppercase tracking-[0.08em] text-neutral-600">Savings Accounts</p>
                </IonCol>
                <IonCol size="auto">
                  <button className="text-xs font-semibold text-neutral-400">View All</button>
                </IonCol>
              </IonRow>

              <Swiper slidesPerView={1.08} spaceBetween={14}>
                {savingsAccounts.map((account) => (
                  <SwiperSlide key={account.name}>
                    <article onClick={() => router.push(ROUTES.VIEW_SAVINGS)} className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-neutral-100">
                      <IonRow className="items-start justify-between">
                        <IonCol size="auto" className="ion-no-padding">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-50 text-[#a90f08]">
                            <span className="text-base">✿</span>
                          </div>
                        </IonCol>
                        <IonCol size="auto" className="ion-no-padding">
                          <span className="rounded-full bg-[#fdebea] px-2.5 py-1 text-[10px] font-bold text-[#b6120b]">{account.annualRate}</span>
                        </IonCol>
                      </IonRow>

                      <h3 className="mt-2 text-base font-semibold text-[#b3120b]">{account.name}</h3>
                      <p className="mt-2 text-3xl font-black tracking-tight text-neutral-800">{account.balance}</p>

                      <p className="mt-2 flex items-center gap-2 text-[10px] font-semibold tracking-wide text-neutral-400">
                        <span className="text-xs">◯</span>
                        {account.monthlyNote}
                      </p>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>

            <section>
              <IonRow className="mb-3 items-center justify-between">
                <IonCol size="auto">
                  <p className="text-xs font-bold uppercase tracking-[0.08em] text-neutral-600">Share Capital</p>
                </IonCol>
              </IonRow>

              <article className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-neutral-100">
                <IonRow className="items-start justify-between">
                  <IonCol size="7">
                    <p className="text-sm font-semibold text-[#b3120b]">Total Share Capital</p>
                    <p className="mt-2 text-3xl font-black tracking-tight text-neutral-800">₱ 5,942.49</p>
                  </IonCol>

                  <IonCol size="5" className="text-right">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-700">
                      <IonIcon icon={trendingUpOutline} className="text-sm" />
                      4.5% P.A
                    </span>

                    <IonButton fill="clear" onClick={() => router.push(ROUTES.VIEW_SAVINGS)} className="mt-3 h-auto p-0 text-[11px] font-semibold text-neutral-500 [--color:#6b6b6b]">
                      Growth Details <IonIcon icon={chevronForwardOutline} className="ml-1 text-sm" />
                    </IonButton>
                  </IonCol>
                </IonRow>
              </article>
            </section>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Savings;
