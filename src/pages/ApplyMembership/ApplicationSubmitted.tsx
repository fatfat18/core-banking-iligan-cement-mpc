import { useState } from "react";
import { useFormik, FormikProvider, Form } from "formik";
import { IoMdArrowRoundBack } from "react-icons/io";
import * as Yup from "yup";
import { ROUTES } from "../../constants/routes";
import "./ApplicationSubmitted.css";

import { HiOutlineBell } from "react-icons/hi";

import { IonPage, useIonRouter, IonContent, IonRow, IonCol, IonInput, IonText, IonSelect, IonSelectOption, IonButton, IonItem, IonHeader, IonLabel, IonCheckbox, IonImg } from "@ionic/react";

const validationSchema = Yup.object({
  employeeStatus: Yup.string().required("Employee Status is required"),

  occupation: Yup.string().required("Occupation is required"),

  employer: Yup.string().required("Employer is required"),

  validID: Yup.string().required("Valid ID is required"),

  IdNumber: Yup.string().required("ID Number is required"),

  IdFile: Yup.mixed().required("ID File is required"),
});
const ApplicationSubmitted: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const router = useIonRouter();

  const formik = useFormik({
    initialValues: {
      employeeStatus: "",

      occupation: "",

      employer: "",

      validID: "",

      IdNumber: "",

      IdFile: null,
    },

    validationSchema,

    onSubmit: async (values) => {
      console.log(values);

      setSubmitted(true);

      router.push(ROUTES.FAMILY_BENEFICIARIES_SERVICES, "forward");
    },
  });

  return (
    <IonPage>
      {/* <IonHeader className="shadow-none! pb-5 bg-zinc-50 text-primary">
        <IonRow>
          <IonCol size="2" className="flex items-center justify-center gap-4">
            <IoMdArrowRoundBack size={20} onClick={() => router.push(ROUTES.HOME, "back")} className="cursor-pointer" />
          </IonCol>

          <IonCol size="10" className="flex items-center">
            <IonText className="font-semibold text-2xl">Apply Membership</IonText>
          </IonCol>
        </IonRow>
      </IonHeader> */}

      <IonContent>
        <IonRow className="flex justify-center">
          <IonCol size="12" sizeMd="8" sizeLg="6">
            <div className="bg-zinc-50 p-10 pt-0 rounded-2xl min-h-screen text-center flex flex-col items-center justify-center">
              {/* Header */}

              <IonImg src="/assets/images/apply-membership/folder.png" className="h-50 mb-10 popBounceImage" />
              <div className="mb-2 text-primary font-semibold text-4xl">Application Submitted</div>

              <div className="text-zinc-400 mb-6 mt-4 text-xl">
                Thank you for applying to <strong className="text-primary"> MEMPCO</strong>. Your application <strong className="text-zinc-600">(Ref: #MC-82739)</strong> is now being reviewed by our
                team.{" "}
              </div>

              <IonRow className="bg-zinc-100 w-full rounded-3xl p-4 px-6 mb-8">
                <IonCol size="12" className="flex flex-col items-center justify-center  py-4">
                  <div className="text-2xl font-semibold text-zinc-500 w-full text-start mb-4">What's Next?</div>

                  <div className=" flex  text-zinc-500 w-full text-start">
                    <div className="w-1/5 flex items-start justify-start">
                      <HiOutlineBell size={40} className="text-primary bg-white p-3 rounded-lg" />
                    </div>
                    <div className="w-4/5 text-lg">We will notify you via SMS/Email within 3-5 business days regarding the status of your institutional membership. </div>
                  </div>
                </IonCol>
              </IonRow>

              {/* Submit Button */}
              <div className="grid grid-cols-1 gap-4 w-full">
                <IonButton
                  onClick={() => router.push(ROUTES.HOME, "forward")}
                  expand="full"
                  fill="clear"
                  className="mt-2 text-xl w-full gap-2 rounded-3xl text-white font-semibold bg-primary flex items-center justify-center"
                >
                  Back to Home
                </IonButton>
              </div>
            </div>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default ApplicationSubmitted;
