import React from "react";
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, isPlatform, useIonRouter } from "@ionic/react";
import { chevronForwardOutline, documentTextOutline, informationCircleOutline, listOutline, personOutline, settingsOutline, shieldCheckmarkOutline } from "ionicons/icons";
import { ROUTES } from "../../constants/routes";

interface AccountMenuItem {
  label: string;
  icon: string;
}

const Account: React.FC = () => {
  const router = useIonRouter();
  const isPlatformIos = isPlatform("ios") || isPlatform("ipad") || isPlatform("iphone");
  const menuItems: AccountMenuItem[] = [
    { label: "My Profile", icon: personOutline },
    { label: "Account Security", icon: shieldCheckmarkOutline },
    { label: "About us", icon: informationCircleOutline },
    { label: "Terms and Conditions", icon: listOutline },
    { label: "Privacy Policy", icon: documentTextOutline },
    { label: "General Settings", icon: settingsOutline },
  ];

  return (
    <IonPage>
      <IonContent fullscreen className="[--background:var(--color-primary)]">
        {isPlatformIos && <IonHeader></IonHeader>}

        <div className="min-h-full pb-28">
          <IonGrid fixed className="ion-no-padding mx-auto w-full max-w-md">
            <section className="bg-primary bg-linear-to-b from-primary to-primary-dark px-5 pt-7 pb-6 text-white">
              <h1 className="text-center text-3xl font-bold tracking-tight">Account</h1>

              <div className="mt-5 flex flex-col items-center">
                <div className="h-28 w-28 overflow-hidden rounded-full border-2 border-white/90 bg-white shadow-lg">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80" alt="Maria Santos profile" className="h-full w-full object-cover" />
                </div>

                <p className="mt-4 text-3xl font-bold leading-tight">Maria Santos</p>
                <p className="mt-1 text-sm text-white/80">maria.santos@gmail.com</p>

                <IonButton
                  fill="clear"
                  onClick={() => router.push(ROUTES.ACCOUNT_VERIFICATION)}
                  className="mt-5 w-full max-w-60 text-primary text-base font-semibold [--background:white] [--border-radius:999px] [--color:var(--color-primary)] [--padding-top:11px] [--padding-bottom:11px]">
                  Verify my Account
                </IonButton>
              </div>
            </section>

            <section className="-mt-2 rounded-t-[34px] bg-[#f7f7f7] px-4 pt-7">
              <p className="text-xl font-extrabold tracking-wide text-neutral-400">GENERAL</p>

              <div className="mt-4 space-y-3.5">
                {menuItems.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    className="w-full rounded-2xl  px-4 py-3.5 shadow-[0_4px_12px_rgba(0,0,0,0.03)] ring-1 ring-neutral-100 transition hover:shadow-[0_8px_18px_rgba(0,0,0,0.07)]">
                    <IonRow className="items-center justify-between rounded-2xl ">
                      <div className="ion-no-padding ">
                        <div className="flex items-center gap-3 p-2">
                          <IonIcon icon={item.icon} className=" text-primary" />
                          <span className="text-lg font-semibold text-[#808080]">{item.label}</span>
                        </div>
                      </div>
                      <div className="ion-no-padding">
                        <IonIcon icon={chevronForwardOutline} className="text-xl text-neutral-400" />
                      </div>
                    </IonRow>
                  </button>
                ))}
              </div>

              <div className="mt-9 pb-8">
                <p className="text-lg font-extrabold tracking-wide text-neutral-400">SPECIAL OFFERS</p>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <article className="rounded-2xl bg-white p-3 shadow-[0_4px_12px_rgba(0,0,0,0.03)] ring-1 ring-neutral-100">
                    <p className="text-sm font-bold text-primary">Loyalty Bonus</p>
                    <p className="mt-1 text-xs text-neutral-500">Get boosted rates on time deposits.</p>
                  </article>
                  <article className="rounded-2xl bg-white p-3 shadow-[0_4px_12px_rgba(0,0,0,0.03)] ring-1 ring-neutral-100">
                    <p className="text-sm font-bold text-primary">Member Perks</p>
                    <p className="mt-1 text-xs text-neutral-500">Exclusive promos and partner discounts.</p>
                  </article>
                </div>
              </div>
            </section>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Account;
