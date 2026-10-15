import React from "react";
import { IonPage, IonHeader, IonRow, IonCol, IonText, IonContent, IonIcon, IonButton, IonInput, IonItem, IonLabel } from "@ionic/react";
import { chevronBackOutline, trashOutline } from "ionicons/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ROUTES } from "../../../../constants/routes";
import { useIonRouter } from "@ionic/react";
import { IoMdArrowRoundBack } from "react-icons/io";

const ReviewPayment: React.FC = () => {
  const router = useIonRouter();

  // Mock initial values - in a real app these would be passed from the previous step
  const formik = useFormik({
    initialValues: {
      amount: "6,450.00",
      paymentMethod: "G-Exchange / GCash",
      referenceNumber: "REF-0102-0304",
      transactionDate: "October 23, 2026 • 4:00 pm",
      proofOfPayment: "receipt_01.jpg",
    },
    onSubmit: (values) => {
      console.log("Submitting:", values);
      router.push(ROUTES.PAYMENT_SUCCESSFUL);
    },
  });

  const DetailRow = ({ label, value }: { label: string; value: string }) => (
    <div className="flex items-center justify-between py-2 border-b border-zinc-50 last:border-none">
      <p className="text-[11px] font-medium text-neutral-400">{label}</p>
      <p className="text-[11px] font-bold text-neutral-800">{value}</p>
    </div>
  );

  return (
    <IonPage className="bg-[#f8f8f8] font-inter">
      <IonHeader className="shadow-none! bg-zinc-50 text-primary pt-2 pb-2">
        <IonRow className="items-center">
          <IonCol size="2" className="flex justify-center">
            <IoMdArrowRoundBack size={20} onClick={() => router.push("/dashboard/home", "back")} className="cursor-pointer text-[#a10f08]" />
          </IonCol>
          <IonCol size="10">
            <IonText className="font-bold text-lg text-[#a10f08]">Review Payment</IonText>
          </IonCol>
        </IonRow>
      </IonHeader>

      <IonContent className="[--background:#f8f8f8] ion-padding">
        <div className="mx-auto flex max-w-md flex-col gap-6 pt-6">
          {/* Static Payment Amount Display */}
          <div className="flex flex-col items-center">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">Payment Amount</p>
            <h1 className="text-4xl font-black text-neutral-900">₱{formik.values.amount}</h1>
          </div>

          {/* Transaction Details Card */}
          <div className="mt-4 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-neutral-100 border-l-[3px] border-[#a10f08]">
            <div className="p-5">
              <h3 className="mb-4 text-xs font-bold text-neutral-700">Transaction Details</h3>
              <div className="flex flex-col gap-1">
                <DetailRow label="Loan Type" value="Salary Loan" />
                <DetailRow label="Payment Method" value={formik.values.paymentMethod} />
                <DetailRow label="Reference Number" value={formik.values.referenceNumber} />
                <DetailRow label="Transaction Date" value={formik.values.transactionDate} />
              </div>
            </div>
          </div>

          {/* Proof of Payment Section */}
          <div className="mt-2">
            <p className="mb-3 text-[10px] font-bold text-neutral-500">Proof of Payment</p>
            <div className="flex items-center justify-between rounded-xl bg-white p-4 shadow-sm ring-1 ring-neutral-100">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-lg bg-neutral-200">
                  <img src="https://via.placeholder.com/150" alt="Receipt" className="h-full w-full object-cover opacity-60" />
                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-800">{formik.values.proofOfPayment}</p>
                  <p className="text-[10px] font-medium text-neutral-400">1.2 MB • Image Uploaded</p>
                </div>
              </div>
              <button className="p-2 text-neutral-300 transition-colors hover:text-red-500">
                <IonIcon icon={trashOutline} className="text-xl" />
              </button>
            </div>
          </div>

          {/* Action Button & Disclaimer */}
          <div className="mt-10 flex flex-col gap-5">
            <IonButton
              onClick={() => formik.handleSubmit()}
              mode="ios"
              expand="block"
              className="h-14 text-sm font-bold [--background:#a10f08] [--border-radius:14px] uppercase tracking-wide shadow-lg"
            >
              Confirm & Submit
            </IonButton>

            <p className="px-4 text-center text-[10px] leading-relaxed text-neutral-400/80">By confirming, you agree to our terms & service regarding fund transfer and capital management.</p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ReviewPayment;
