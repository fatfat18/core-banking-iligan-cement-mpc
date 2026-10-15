import React from "react";
import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonPage, isPlatform, IonHeader, IonRow, useIonRouter } from "@ionic/react";
import { chevronForwardOutline, homeOutline, walletOutline } from "ionicons/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import NOTIFICATION from "/assets/icons/notification.svg";
import OVERVIEW_BANK from "/assets/icons/overview_bank.svg";
import BANK_ADD from "/assets/icons/bank_add.svg";
import MONEY from "/assets/icons/money.svg";
import HOME_ICON from "/assets/icons/home.svg";
import { ROUTES } from "../../constants/routes";

import "swiper/css";

interface ActiveLoan {
  type: string;
  id: string;
  balance: string;
  interest: string;
  icon: string;
}

interface ExclusiveOffer {
  title: string;
  description: string;
  image: string;
  icon: string;
}

const Loan: React.FC = () => {
  const isPlatformIos = isPlatform("ios") || isPlatform("ipad") || isPlatform("iphone");
  const router = useIonRouter();
  const activeLoans: ActiveLoan[] = [
    {
      type: "SALARY LOAN",
      id: "040501-1303001-8",
      balance: "₱ 300,000.00",
      interest: "3.2%",
      icon: MONEY,
    },
    {
      type: "PERSONAL LOAN",
      id: "040501-1303001-9",
      balance: "₱ 150,000.00",
      interest: "4.5%",
      icon: MONEY,
    },
  ];

  const exclusiveOffers: ExclusiveOffer[] = [
    {
      title: "HOME LOAN",
      description: "Low-interest rates for your dream home purchase.",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=500&q=80",
      icon: HOME_ICON,
    },
  ];

  const handleApplyForNewLoan = () => {
    router.push(ROUTES.LOAN_APPLICATION);
  };

  const handleViewLoanDetails = (loanId: string) => {
    // Navigate to loan details page with the selected loan ID
    // router.push(`${ROUTES.LOAN_DETAILS}/${loanId}`);
    router.push(`${ROUTES.LOAN_VIEW_LOAN}`);
  };

  return (
    <IonPage>
      <IonContent fullscreen className="[--background:transparent] bg-[radial-gradient(circle_at_top,#f8e5de,#f2f2f2_35%,#f7f7f7_70%)]">
        {isPlatformIos && <IonHeader></IonHeader>}
        <div className="min-h-full ion-padding mb-40">
          <IonGrid fixed className="ion-no-padding mx-auto w-full max-w-md px-4 pt-11">
            {/* Total Outstanding Balance Card */}
            <article className="relative mb-6 overflow-hidden rounded-3xl bg-linear-to-br from-[#8b0000] to-[#4b0000] p-7 text-white shadow-lg">
              <img src={OVERVIEW_BANK} alt="bank icon" className="absolute -right-4 -top-4 h-48 w-48 opacity-10" />
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">Total Outstanding Balance</p>
              <p className="mt-2 text-4xl font-black tracking-tight">₱ 428,950.00</p>

              <div className="mt-8">
                <div className="mb-2 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-white/70">
                  <span>Repayment Status</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold">30% Paid</span>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/20">
                    <div className="h-full w-[30%] rounded-full bg-white" />
                  </div>
                </div>
              </div>
            </article>

            {/* Apply for a New Loan Banner */}
            <article className="mb-8 rounded-3xl bg-[#7a0000] p-5 text-white shadow-md">
              <IonRow className="items-center justify-between " onClick={handleApplyForNewLoan}>
                <IonCol size="auto">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white p-2 text-[#7a0000]">
                      <img src={BANK_ADD} alt="Apply for a New Loan" className="h-full w-full" />
                    </div>
                    <div>
                      <h3 className="text-base! font-bold leading-tight">Apply for a New Loan</h3>
                      <p className="text-[10px] text-white/70">Quick approval and competitive rates</p>
                    </div>
                  </div>
                </IonCol>
                <IonCol size="auto">
                  <IonIcon icon={chevronForwardOutline} className="text-xl text-white/60" />
                </IonCol>
              </IonRow>
            </article>

            {/* Active Loans Section */}
            <section className="mb-8">
              <IonRow className="mb-4 items-center justify-between">
                <IonCol size="auto">
                  <p className="text-xs font-bold uppercase text-neutral-500">Active Loans</p>
                </IonCol>
                <IonCol size="auto">
                  <button className="text-xs font-semibold text-neutral-400">View All</button>
                </IonCol>
              </IonRow>

              <Swiper slidesPerView={1.1} spaceBetween={16}>
                {activeLoans.map((loan, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-100">
                      <IonRow className="mb-6 items-center gap-4">
                        <IonCol size="auto">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100 p-2 text-[#7a0000]">
                            <img src={loan.icon} alt={loan.type} className="h-full w-full" />
                          </div>
                        </IonCol>
                        <IonCol>
                          <h4 className="text-base font-bold text-neutral-800">{loan.type}</h4>
                          <p className="text-xs font-medium text-neutral-400">{loan.id}</p>
                        </IonCol>
                      </IonRow>

                      <IonRow className="mb-6 justify-between">
                        <IonCol size="auto">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Balance</p>
                          <p className="text-lg font-bold text-neutral-800">{loan.balance}</p>
                        </IonCol>
                        <IonCol size="auto" className="text-right">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Interest</p>
                          <p className="text-lg font-bold text-neutral-800">{loan.interest}</p>
                        </IonCol>
                      </IonRow>

                      <IonRow className="gap-3">
                        <IonCol className="ion-no-padding">
                          <IonButton className="h-11 w-full font-bold [--background:#7a0000] [--border-radius:12px]" size="small">
                            Pay Now
                          </IonButton>
                        </IonCol>
                        <IonCol className="ion-no-padding">
                          <IonButton
                            onClick={() => handleViewLoanDetails(loan.id)}
                            className="h-11 w-full font-bold [--background:#f2f2f2] [--color:#4a4a4a] [--border-radius:12px]"
                            fill="clear"
                            size="small"
                          >
                            Details
                          </IonButton>
                        </IonCol>
                      </IonRow>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>

            {/* Exclusive Offers Section */}
            <section>
              <IonRow className="mb-4 items-center justify-between">
                <IonCol size="auto">
                  <p className="text-xs font-bold uppercase  text-neutral-500">Exclusive Offers</p>
                </IonCol>
                <IonCol size="auto">
                  <button className="text-xs font-semibold text-neutral-400">View All</button>
                </IonCol>
              </IonRow>

              {exclusiveOffers.map((offer, idx) => (
                <article key={idx} className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-neutral-100">
                  <IonRow className="h-full">
                    <IonCol size="7" className="flex flex-col justify-between p-6">
                      <div>
                        <div className="mb-3 h-8 w-8 text-[#7a0000]">
                          <img src={offer.icon} alt={offer.title} className="h-full w-full" />
                        </div>
                        <h3 className="mb-2 text-lg font-bold text-neutral-800">{offer.title}</h3>
                        <p className="text-xs leading-relaxed text-neutral-500">{offer.description}</p>
                      </div>
                    </IonCol>
                    <IonCol size="5" className="relative">
                      <img src={offer.image} alt={offer.title} className="absolute inset-0 h-full w-full object-cover" />
                    </IonCol>
                  </IonRow>
                </article>
              ))}
            </section>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Loan;
