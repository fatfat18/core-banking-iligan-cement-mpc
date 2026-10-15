import React, { useState } from "react";
import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonPage, IonRow, IonHeader, isPlatform, useIonRouter } from "@ionic/react";
import { addCircle, arrowDownOutline, arrowUpOutline, business, calendarClearOutline, notificationsOutline, swapHorizontal, swapHorizontalOutline, wallet } from "ionicons/icons";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import NOTIFICATION from "/assets/icons/notification.svg";

import BANK_ADD from "/assets/icons/bank_add.svg";
import CARD_ADD from "/assets/icons/card_add.svg";
import TRANSFER from "/assets/icons/transfer.svg";
import MONEY from "/assets/icons/money.svg";

import OVERVIEW_BANK from "/assets/icons/overview_bank.svg";
import OVERVIEW_SAVINGS from "/assets/icons/overview_savings.svg";
import OVERVIEW_COINS from "/assets/icons/overview_coins.svg";

import "swiper/css";

import "swiper/css/pagination";
import NavBar from "../../components/NavBar";
import { ROUTES } from "../../constants/routes";
import PayLoanModal from "./components/Home/PayLoanModal";
import DepositModal from "./components/Home/DepositModal";

interface QuickAction {
  label: string;
  icon: string;
  action?: () => void;
}

interface OverviewCard {
  label: string;
  amount: string;
  progress: string;
  dueDate: string;
  backgroundIcon: string;
}

interface ActivityItem {
  title: string;
  meta: string;
  amount: string;
  status: string;
  type: "credit" | "debit" | "neutral";
}

const Home: React.FC = () => {
  const [isPayLoanOpen, setIsPayLoanOpen] = useState(false);
  const [isDepositOpen, setIsDepositOpen] = useState(false);
  const router = useIonRouter();
  const isPlatformIos = isPlatform("ios") || isPlatform("ipad") || isPlatform("iphone");
  const quickActions: QuickAction[] = [
    { label: "Pay Loan", icon: MONEY, action: () => setIsPayLoanOpen(true) },
    { label: "Apply Loan", icon: BANK_ADD },
    { label: "Deposit", icon: CARD_ADD, action: () => setIsDepositOpen(true) },
    { label: "Transfer", icon: TRANSFER },
  ];

  const overviewCards: OverviewCard[] = [
    {
      label: "Total Loan Balance",
      amount: "P428,950.00",
      progress: "30%",
      dueDate: "OCT 15, 2023",
      backgroundIcon: OVERVIEW_BANK,
    },
    {
      label: "Total Savings",
      amount: "P186,430.55",
      progress: "62%",
      dueDate: "NOV 03, 2023",
      backgroundIcon: OVERVIEW_SAVINGS,
    },
    {
      label: "Available Credit",
      amount: "P75,000.00",
      progress: "48%",
      dueDate: "DEC 01, 2023",
      backgroundIcon: OVERVIEW_COINS,
    },
  ];

  const activities: ActivityItem[] = [
    {
      title: "Dividend Payout",
      meta: "SEP 28 ,2023 • SAVINGS",
      amount: "+ P12,450.00",
      status: "COMPLETED",
      type: "credit",
    },
    {
      title: "Loan Amortization",
      meta: "SEP 28 ,2023 • SALARY LOAN",
      amount: "- P5,200.00",
      status: "AUTO DEBIT",
      type: "debit",
    },
    {
      title: "Transfer",
      meta: "SEP 28 ,2023 • INTERNAL",
      amount: "P12,500.00",
      status: "VERIFIED",
      type: "neutral",
    },
    {
      title: "Member Deposit",
      meta: "SEP 28 ,2023 • CASH",
      amount: "+ P1,000.00",
      status: "COMPLETED",
      type: "credit",
    },
    {
      title: "Loan Amortization",
      meta: "SEP 28 ,2023 • SALARY LOAN",
      amount: "- P5,200.00",
      status: "AUTO DEBIT",
      type: "debit",
    },

    {
      title: "Dividend Payout",
      meta: "SEP 28 ,2023 • SAVINGS",
      amount: "+ P12,450.00",
      status: "COMPLETED",
      type: "credit",
    },
    {
      title: "Loan Amortization",
      meta: "SEP 28 ,2023 • SALARY LOAN",
      amount: "- P5,200.00",
      status: "AUTO DEBIT",
      type: "debit",
    },
    {
      title: "Transfer",
      meta: "SEP 28 ,2023 • INTERNAL",
      amount: "P12,500.00",
      status: "VERIFIED",
      type: "neutral",
    },
    {
      title: "Member Deposit",
      meta: "SEP 28 ,2023 • CASH",
      amount: "+ P1,000.00",
      status: "COMPLETED",
      type: "credit",
    },
    {
      title: "Loan Amortization",
      meta: "SEP 28 ,2023 • SALARY LOAN",
      amount: "- P5,200.00",
      status: "AUTO DEBIT",
      type: "debit",
    },
  ];

  return (
    <IonPage>
      {/* bg-[radial-gradient(circle_at_top,#f8e5de,#f2f2f2_35%,#f7f7f7_70%)] */}
      <IonContent fullscreen className="[--background:transparent]  bg-[radial-gradient(circle_at_top,#f8e5de,#f2f2f2_35%,#f7f7f7_70%)]">
        {isPlatformIos && <IonHeader></IonHeader>}
        <div className="min-h-full ion-padding  mb-40">
          <IonGrid fixed className="ion-no-padding mx-auto w-full max-w-md px-4 pt-11">
            <IonRow className="mb-5 items-start justify-between">
              <IonCol size="9">
                <p className="text-sm font-semibold text-neutral-500">Good Day!</p>
                <p className=" text-3xl font-semibold tracking-tight text-[#242424]">
                  Maria Santos <span className="text-2xl">👋</span>
                </p>
              </IonCol>
              <IonCol size="3" className="flex justify-end relative ">
                <button type="button" onClick={() => router.push(ROUTES.NOTIFICATIONS)} className="rounded-full">
                  <IonIcon icon={NOTIFICATION} className="text-[1.5rem] bg-red-100 rounded-full p-3" />
                </button>
                <span className="absolute right-2 top-2 h-3 w-3 rounded-full border-2 border-[#f7d8d8] bg-[#930d07]" />
              </IonCol>
            </IonRow>

            <section>
              <div className="mb-3 flex items-center justify-between">
                <div className="flex w-full items-center justify-between">
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">Overview</div>
                  <div className="overview-swiper-pagination w-max flex items-end justify-end gap-1 [&_.swiper-pagination-bullet]:m-0 [&_.swiper-pagination-bullet]:h-1.5 [&_.swiper-pagination-bullet]:w-0.5 [&_.swiper-pagination-bullet]:bg-[#eec3c0] [&_.swiper-pagination-bullet-active]:bg-[#9f0f08]" />
                </div>
              </div>
              <Swiper modules={[Pagination]} pagination={{ el: ".overview-swiper-pagination", clickable: true }} slidesPerView={1.05} spaceBetween={12} className="">
                {overviewCards.map((card) => (
                  <SwiperSlide key={card.label}>
                    <article className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary to-primary-dark p-6 text-white ">
                      <img src={card.backgroundIcon} alt={`${card.label} icon`} className="absolute top-5 right-0 h-40 w-40 opacity-20 z-10" />
                      <div className="pointer-events-none absolute -right-12 -top-8 h-40 w-48 rounded-full bg-white/8" />
                      <div className="pointer-events-none absolute -bottom-12 -right-16 h-44 w-44 rounded-full bg-black/10" />

                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70 z-20">{card.label}</p>
                      <p className="mt-2 text-4xl font-black tracking-wide z-20">{card.amount}</p>

                      <IonGrid className="ion-no-padding mt-6">
                        <IonRow className="gap-y-3">
                          <IonCol size="6" className="pr-1.5">
                            <div className="rounded-2xl bg-white/14 p-3 backdrop-blur-sm">
                              <p className="text-[.6rem] font-semibold uppercase text-white/70">Paid Progress (%)</p>

                              <div className="mt-2 flex items-center gap-2">
                                <span className="text-sm font-bold">{card.progress}</span>
                                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/35">
                                  <div className="h-full w-[30%] rounded-full bg-white" />
                                </div>
                              </div>
                            </div>
                          </IonCol>

                          <IonCol size="6" className="pl-1.5">
                            <div className="rounded-2xl bg-white/14 p-3 backdrop-blur-sm">
                              <p className="text-[.6rem]  font-semibold uppercase text-white/70">Next Due</p>
                              <p className="mt-2 flex items-center gap-1.5 text-sm font-semibold">
                                <IonIcon icon={calendarClearOutline} className="text-[.6rem]" /> {card.dueDate}
                              </p>
                            </div>
                          </IonCol>
                        </IonRow>
                      </IonGrid>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>

            <section className="mt-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">Quick Actions</p>
              <IonGrid className="ion-no-padding">
                <IonRow>
                  {quickActions.map((action) => (
                    <IonCol key={action.label} size="3" className="px-1.5" onClick={action.action}>
                      <div className="mx-auto flex h-max  w-max p-6  items-center justify-center rounded-xl bg-white text-[#a20f08]">
                        <IonIcon icon={action.icon} className="text-3xl" />
                      </div>

                      <p className="mt-2 text-center text-xs font-semibold text-neutral-700">{action.label}</p>
                    </IonCol>
                  ))}
                </IonRow>
              </IonGrid>
            </section>

            <section className="mt-6">
              <IonRow className="mb-3 items-center justify-between">
                <IonCol size="8">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">Cooperative Insights</p>
                </IonCol>
                <IonCol size="4" className="text-right">
                  <IonButton fill="clear" className="m-0 h-auto p-0 text-xs font-semibold text-neutral-400">
                    View All
                  </IonButton>
                </IonCol>
              </IonRow>

              <article className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] ring-1 ring-neutral-200">
                <IonGrid className="ion-no-padding">
                  <IonRow>
                    <IonCol size="7">
                      <div className="p-6">
                        <span className="inline-block rounded-md bg-[#b40f08] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">Special Event</span>
                        <p className="mt-3 text-xs font-medium text-neutral-500">March 25, 2026</p>
                        <h3 className="mt-1 text-xl font-extrabold leading-tight text-neutral-800">Annual General Assembly</h3>
                        <p className="mt-2 line-clamp-2 text-xs text-neutral-500">Message of Dir. Ruben L. Cunanan (Represented by: Ryan C. Amilnuan)</p>
                        <IonButton
                          fill="outline"
                          className="mt-3 w-full [--border-color:#f0cbc9] [--color:#9f0f08] [--border-radius:0.5rem] [--padding-top:0.5rem] [--padding-bottom:0.5rem] text-xs font-bold uppercase tracking-wide"
                        >
                          Register Now
                        </IonButton>
                      </div>
                    </IonCol>

                    <IonCol size="5" className="relative">
                      <div className="h-full w-full bg-[linear-gradient(180deg,rgba(186,30,20,0.12),rgba(171,16,8,0.24))]" />
                      <img
                        src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=500&q=80"
                        alt="Annual assembly"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </article>
            </section>

            <section className="mt-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">Recent Activity</p>
              <div className="mt-3 rounded-2xl bg-[#f7f7f7] p-3 shadow-[0_6px_16px_rgba(0,0,0,0.05)] ring-1 ring-neutral-200">
                <div className="space-y-1">
                  {activities.map((item, index) => {
                    const tone =
                      item.type === "credit"
                        ? {
                            bubble: "bg-[#e8f6ec] text-[#0ca34b]",
                            amount: "text-[#0ca34b]",
                            icon: arrowDownOutline,
                          }
                        : item.type === "debit"
                          ? {
                              bubble: "bg-[#f8eaea] text-[#d01a14]",
                              amount: "text-[#d01a14]",
                              icon: arrowUpOutline,
                            }
                          : {
                              bubble: "bg-[#ececec] text-[#7a7a7a]",
                              amount: "text-[#5b5b5b]",
                              icon: swapHorizontalOutline,
                            };

                    return (
                      <div key={`${item.title}-${index}`} className="flex items-start justify-between py-2">
                        <div className="flex items-start gap-3">
                          <div className={`mt-0.5 flex h-12 w-12 items-center justify-center rounded-full ${tone.bubble}`}>
                            <IonIcon icon={tone.icon} className="text-xl" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[#393939] mb-2">{item.title}</p>
                            <p className="text-xs font-medium uppercase  text-neutral-400">{item.meta}</p>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className={`text-sm leading-none font-extrabold mb-2 ${tone.amount}`}>{item.amount}</p>
                          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-neutral-400">{item.status}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </IonGrid>
        </div>
      </IonContent>

      <PayLoanModal isOpen={isPayLoanOpen} onDidDismiss={() => setIsPayLoanOpen(false)} />
      <DepositModal isOpen={isDepositOpen} onDidDismiss={() => setIsDepositOpen(false)} />
    </IonPage>
  );
};

export default Home;
