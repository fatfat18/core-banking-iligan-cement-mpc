import React from "react";
import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonPage, IonRow, isPlatform, useIonRouter } from "@ionic/react";
import { arrowBackOutline, copyOutline, arrowForwardOutline, arrowDownOutline, arrowUpOutline, swapHorizontalOutline, businessOutline } from "ionicons/icons";
import OVERVIEW_BANK from "/assets/icons/overview_bank.svg";
import { FaMoneyBills } from "react-icons/fa6";
import { ROUTES } from "../../../../constants/routes";

interface ActivityItem {
  title: string;
  meta: string;
  amount: string;
  status: string;
  type: "credit" | "debit" | "neutral";
}

const ViewLoan: React.FC = () => {
  const router = useIonRouter();
  const isPlatformIos = isPlatform("ios") || isPlatform("ipad") || isPlatform("iphone");

  const activities: ActivityItem[] = [
    {
      title: "Dividends Credit",
      meta: "SEP 28 ,2023 • REGULAR SAVINGS",
      amount: "+ ₱1,450.00",
      status: "COMPLETED",
      type: "credit",
    },
    {
      title: "Branch Deposit",
      meta: "SEP 28 ,2023 • SPECIAL SAVINGS",
      amount: "+ ₱12,500.00",
      status: "VERIFIED",
      type: "neutral",
    },
    {
      title: "Dividends Credit",
      meta: "SEP 28 ,2023 • REGULAR SAVINGS",
      amount: "+₱2,450.00",
      status: "COMPLETED",
      type: "credit",
    },
    {
      title: "Branch Deposit",
      meta: "SEP 28 ,2023 • SPECIAL SAVINGS",
      amount: "+ ₱12,500.00",
      status: "VERIFIED",
      type: "neutral",
    },
  ];

  const BreakdownItem: React.FC<{ label: string; value: string; dotColor: string }> = ({ label, value, dotColor }) => (
    <div className="flex items-center justify-between py-4 border-b border-neutral-50 last:border-0 last:pb-0">
      <div className="flex items-center gap-3">
        <div className={`h-2 w-2 rounded-full ${dotColor}`} />
        <p className="text-xs font-semibold text-neutral-500">{label}</p>
      </div>
      <p className="text-sm font-black text-neutral-800">₱{value}</p>
    </div>
  );

  const handleBack = () => {
    // Handle back navigation (e.g., go back to loan list or dashboard)
    router.push(ROUTES.DASHBOARD_LOAN, "back");
  };

  return (
    <IonPage>
      <IonContent fullscreen className="[--background:#f5f5f5]">
        {/* Header Section */}
        <div className="relative overflow-hidden bg-gradient-to-br ion-padding from-[#ce1a10] to-[#220201] h-120 pt-12 text-white rounded-b-[20px]">
          {isPlatformIos && <div className="h-10" />}

          {/* Background Building Icon */}
          <IonIcon icon={OVERVIEW_BANK} className="absolute -right-8 top-16 text-[180px] opacity-50" />

          <IonGrid className="ion-no-padding px-6">
            <IonRow className=" items-center">
              <IonCol size="auto">
                <IonIcon onClick={handleBack} icon={arrowBackOutline} className="text-xl" />
              </IonCol>
            </IonRow>

            <div className="mb-8">
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-black uppercase tracking-wider">Salary Loan</h1>
              </div>
              <div className="mt-1 flex items-center gap-2 text-white/70">
                <p className="text-xs font-bold tracking-widest">040501-1303001-8</p>
                <button className="flex h-6 w-6 items-center justify-center rounded-md bg-white/10">
                  <IonIcon icon={copyOutline} className="text-[10px]" />
                </button>
              </div>
            </div>

            <div className="mb-8 pl-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Current Outstanding Balance</p>
              <h2 className="mt-2 text-4xl font-black tracking-tight tabular-nums">₱428,950.00</h2>
            </div>

            <IonButton expand="block" className="h-14 font-bold [--background:#ffffff] [--color:#930d07] [--border-radius:1.25rem] shadow-[0_10px_25px_rgba(0,0,0,0.2)]">
              <div className="flex w-full items-center justify-center px-2">
                <div className="flex justify-center items-center gap-3">
                  <FaMoneyBills className="text-2xl" />

                  <span className="text-sm font-black">Make a Payment</span>
                  <IonIcon icon={arrowForwardOutline} />
                </div>
              </div>
            </IonButton>
          </IonGrid>
        </div>

        <div className="ion-padding -translate-y-20">
          <IonGrid className="ion-no-padding w-full max-w-md space-y-5">
            {/* Repayment Progress */}
            <article className="rounded-xl px-4 bg-white  shadow-sm ring-1 ring-neutral-100">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-[9px] text-neutral-800 opacity-60">Repayment Progress</h3>
                <span className=" font-black text-[#930d07]">40%</span>
              </div>
              <div className="h-4 w-full overflow-hidden rounded-full bg-neutral-100">
                <div className="h-full w-[40%] rounded-full bg-[#930d07]" />
              </div>
              <div className="mt-4  pb-6 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-neutral-300">
                <p>
                  Paid: <span className="text-neutral-500 font-black">₱285,966.67</span>
                </p>
                <p>
                  Remaining: <span className="text-neutral-500 font-black">₱428,950.00</span>
                </p>
              </div>
            </article>

            {/* Term & Next Payment */}
            <IonRow className="gap-4">
              <IonCol className="ion-no-padding">
                <article className="h-full rounded-2xl bg-white p-5 shadow-sm ring-1 ring-neutral-100 border-l-[3.5px] border-[#930d07]">
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-300">Remaining Term</p>
                  <h4 className="mt-2 text-sm font-black uppercase text-neutral-800">14 Months</h4>
                </article>
              </IonCol>
              <IonCol className="ion-no-padding">
                <article className="h-full rounded-2xl bg-white p-5 shadow-sm ring-1 ring-neutral-100 border-l-[3.5px] border-[#930d07]">
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-neutral-300">Next Payment</p>
                  <h4 className="mt-2 text-sm font-black text-[#930d07]">₱6,450.00</h4>
                  <p className="mt-1 text-[8px] font-black text-neutral-400">Due: Oct 15, 2026</p>
                </article>
              </IonCol>
            </IonRow>

            {/* Loan Breakdown */}
            <section className="pt-2">
              <h3 className="mb-4 text-[12px]font-black uppercase  text-neutral-800 opacity-60">Loan Breakdown</h3>
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-100">
                <BreakdownItem label="Total Principal Paid" value="56,000.00" dotColor="bg-[#7a0a05]" />
                <BreakdownItem label="Remaining Interest" value="12,420.00" dotColor="bg-red-300" />
                <BreakdownItem label="Original Loan Amount" value="140,000.00" dotColor="bg-neutral-200" />
              </div>
            </section>

            {/* Transaction History */}
            <section className="pt-2 pb-12">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-[12px] font-black uppercase text-neutral-800 opacity-60">Transactions</h3>
                <button className="text-[10px] font-bold text-neutral-400">View All</button>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-100">
                <div className="space-y-1">
                  {activities.map((item, index) => {
                    const tone =
                      item.type === "credit"
                        ? {
                            bubble: "bg-emerald-50 text-emerald-500",
                            icon: arrowDownOutline,
                          }
                        : item.type === "debit"
                          ? {
                              bubble: "bg-red-50 text-red-500",
                              icon: arrowUpOutline,
                            }
                          : {
                              bubble: "bg-red-50 text-[#930d07]",
                              icon: businessOutline,
                            };

                    return (
                      <div key={`${item.title}-${index}`} className="flex items-start justify-between py-3 border-b border-neutral-50 last:border-0 last:pb-0">
                        <div className="flex items-start gap-4">
                          <div className={`flex h-11 w-11 items-center justify-center rounded-full ${tone.bubble}`}>
                            <IonIcon icon={tone.icon} className="text-lg" />
                          </div>
                          <div>
                            <p className="text-[13px] font-bold text-neutral-800">{item.title}</p>
                            <p className="mt-0.5 text-[5px]!  uppercase tracking-wider text-neutral-400">{item.meta}</p>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className={`text-xs! font-black ${item.type === "credit" ? "text-emerald-500" : "text-neutral-800"}`}>{item.amount}</p>
                          <p className="mt-1 text-xs!  uppercase  text-neutral-300">{item.status}</p>
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
    </IonPage>
  );
};

export default ViewLoan;
