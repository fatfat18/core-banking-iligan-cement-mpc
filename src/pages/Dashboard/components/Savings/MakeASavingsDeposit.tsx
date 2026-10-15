import React from "react";
import { IonPage, IonHeader, IonRow, IonCol, IonText, IonContent, IonIcon, IonButton, IonInput, IonItem, IonLabel } from "@ionic/react";
import { chevronBackOutline, chevronDownOutline, alertCircleOutline, fileTrayStackedOutline, folderOpenOutline } from "ionicons/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ROUTES } from "../../../../constants/routes";
import { useIonRouter } from "@ionic/react";
import { IoMdArrowRoundBack } from "react-icons/io";
import GCASH_LOGO from "/assets/logo/gcash.png";

const validationSchema = Yup.object().shape({
  amount: Yup.number().required("Amount is required").min(1, "Amount must be greater than 0"),
  paymentMethod: Yup.string().required("Payment method is required"),
  referenceNumber: Yup.string().required("Reference number is required"),
  proofOfPayment: Yup.mixed().required("Proof of payment is required"),
});

const MakeASavingsDeposit: React.FC = () => {
  const router = useIonRouter();

  const formik = useFormik({
    initialValues: {
      amount: "0.00",
      paymentMethod: "GCash",
      referenceNumber: "",
      proofOfPayment: null,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form values:", values);
      router.push(ROUTES.REVIEW_DEPOSIT, "forward");
    },
  });

  return (
    <IonPage className="bg-[#f8f8f8] font-inter">
      <IonHeader className="shadow-none! pb-5 bg-zinc-50 text-primary">
        <IonRow>
          <IonCol size="2" className="flex items-center justify-center gap-4">
            <IoMdArrowRoundBack size={20} onClick={() => router.push(ROUTES.DASHBOARD_HOME, "back")} className="cursor-pointer" />
          </IonCol>

          <IonCol size="10" className="flex items-center">
            <IonText className="font-semibold text-2xl">Deposit</IonText>
          </IonCol>
        </IonRow>
      </IonHeader>

      <IonContent className="[--background:#f8f8f8] ion-padding">
        <form onSubmit={formik.handleSubmit} className="mx-auto flex max-w-md flex-col gap-8 pb-10">
          {/* Deposit Amount Section */}
          <div className="flex flex-col items-center">
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">ENTER DEPOSIT AMOUNT</p>
            <div className="flex w-full  items-center justify-center border-b border-neutral-200 pb-2 transition-all focus-within:border-[#a10f08]">
              <span className="text-3xl font-black text-neutral-900 mr-2">₱</span>
              <input
                name="amount"
                type="number"
                value={formik.values.amount}
                onChange={formik.handleChange}
                onFocus={(e) => e.target.select()}
                className="bg-transparent text-center w-full text-5xl font-black text-neutral-400 outline-none transition-colors placeholder:text-neutral-200 focus:text-neutral-900"
                placeholder="0.00"
              />
            </div>
            {formik.errors.amount && formik.touched.amount && <p className="mt-2 text-xs text-red-500">{formik.errors.amount}</p>}
          </div>

          {/* Account Details Card */}
          <div className="flex items-center justify-between rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-100 transition-shadow hover:shadow-md">
            <div>
              <p className="text-xs font-semibold text-neutral-400">Savings Account</p>
              <p className="mt-1 text-sm font-semibold text-neutral-800 uppercase tracking-tight">Supplemental Dep. 1</p>
            </div>
            <div className="text-right">
              <p className="text-right text-xs font-semibold text-neutral-400">Current Balance</p>
              <p className="mt-1 text-lg font-black text-[#a10f08]">₱ 5,942.49</p>
            </div>
          </div>

          {/* Payment Method Section */}
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">PAYMENT METHOD</p>
            <button
              type="button"
              className="group flex w-full items-center justify-between rounded-2xl bg-white p-4 shadow-sm ring-1 ring-neutral-100 transition-all hover:bg-neutral-50 active:scale-[0.98]"
            >
              <div className="flex items-center gap-4 p-4">
                <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg  transition-transform group-hover:scale-110">
                  <img src={GCASH_LOGO} alt="GCash" className="h-full w-full object-contain " />
                </div>
                <div className="text-left">
                  <p className="text-base font-bold text-neutral-800">G-Echange / GCash</p>
                  <p className="mt-0.5 text-xs font-medium text-neutral-400">Standard 1-2 business days</p>
                </div>
              </div>
              <IonIcon icon={chevronDownOutline} className="text-xl text-neutral-300 transition-colors group-hover:text-[#a10f08]" />
            </button>
          </div>

          {/* Reference Number Section */}
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">REFERENCE NUMBER</p>
            <div className="rounded-2xl bg-white p-1 shadow-sm ring-1 ring-neutral-100 transition-all focus-within:ring-2 focus-within:ring-[#a10f08]/20">
              <input
                name="referenceNumber"
                type="text"
                value={formik.values.referenceNumber}
                onChange={formik.handleChange}
                placeholder="REF-0102-0304"
                className="w-full bg-transparent p-4 text-base font-bold text-neutral-800 outline-none placeholder:text-neutral-300"
              />
            </div>
          </div>

          {/* Attach Document Section */}
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">ATTACH DOCUMENT</p>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-100">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-[#a10f08]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-neutral-800">Proof of Payment</h5>
                    <p className="mt-1 max-w-37.5 text-[10px] leading-relaxed text-neutral-400">Upload clear copy of you transaction receipt.</p>
                  </div>
                </div>
                <span className="rounded-md bg-red-50 px-2.5 py-1 text-[10px] font-bold text-[#930d07] uppercase tracking-wider">Required</span>
              </div>

              <IonButton mode="ios" expand="block" fill="solid" className="mt-6 font-bold [--background:#f8f8f8] [--color:#444] [--border-radius:12px] [--box-shadow:none]">
                Browse File
              </IonButton>
            </div>
          </div>

          {/* Important Message */}
          <div className="flex gap-4 rounded-2xl border border-red-100/50 bg-white p-5 shadow-sm">
            <IonIcon icon={alertCircleOutline} className="text-6xl text-[#a10f08]" />
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-600">IMPORTANT</p>
              <p className="mt-1 text-[11px] leading-relaxed text-neutral-400">Please ensure your Reference Number matches exactly what is shown in your banking app to avoid processing delays.</p>
            </div>
          </div>

          {/* Continue Button */}
          <IonButton type="submit" mode="ios" expand="block" className="mt-4 h-16 text-lg font-bold [--background:#a10f08] [--border-radius:9999px] [--box-shadow:0_12px_24px_rgba(161,15,8,0.3)]">
            Continue
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default MakeASavingsDeposit;
