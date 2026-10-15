import { useState } from "react";
import { useFormik, FormikProvider, Form } from "formik";
import { IoMdArrowRoundBack } from "react-icons/io";
import * as Yup from "yup";
import { ROUTES } from "../../constants/routes";
import editIcon from "../../../public/assets/images/apply-membership/edit.svg";
import { HiCheckBadge } from "react-icons/hi2";
import { RiIdCardFill } from "react-icons/ri";
import { IoCard } from "react-icons/io5";
import { IoMdCash } from "react-icons/io";

import { IonPage, useIonRouter, IonContent, IonRow, IonCol, IonInput, IonText, IonImg, IonSelectOption, IonButton, IonItem, IonHeader, IonLabel, IonCheckbox } from "@ionic/react";

const validationSchema = Yup.object({
  employeeStatus: Yup.string().required("Employee Status is required"),

  occupation: Yup.string().required("Occupation is required"),

  employer: Yup.string().required("Employer is required"),

  validID: Yup.string().required("Valid ID is required"),

  IdNumber: Yup.string().required("ID Number is required"),

  IdFile: Yup.mixed().required("ID File is required"),
});
const ReviewAndSubmit: React.FC = () => {
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
      acceptTermsAndConditions: false,
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
      <IonHeader className="shadow-none! pb-5 bg-zinc-50 text-primary">
        <IonRow>
          <IonCol size="2" className="flex items-center justify-center gap-4">
            <IoMdArrowRoundBack size={20} onClick={() => router.push(ROUTES.FAMILY_BENEFICIARIES_SERVICES, "back")} className="cursor-pointer" />
          </IonCol>

          <IonCol size="10" className="flex items-center">
            <IonText className="font-semibold text-2xl">Apply Membership</IonText>
          </IonCol>
        </IonRow>
      </IonHeader>

      <IonContent>
        <IonRow className="flex justify-center">
          <IonCol size="12" sizeMd="8" sizeLg="6">
            <div className="bg-zinc-50 p-10 pt-0 rounded-2xl min-h-screen">
              {/* Progress */}
              <div className="py-4 w-full flex rounded-lg mb-4">
                <div className="w-max pr-4">Step 5 of 5</div>

                <div className="h-2 w-3/4 bg-zinc-200 rounded-full mt-2">
                  <div className="h-2 w-5/5 bg-primary rounded-full"></div>
                </div>
              </div>

              {/* Header */}
              <div className="mb-2 text-primary font-semibold text-3xl">Review & Submit</div>

              <div className="text-zinc-400 mb-6">Check your details before final submission. </div>

              <div className="bg-zinc-100 rounded-3xl h-max p-6 flex flex-col gap-4 mb-8">
                <IonRow className="mb-2 ">
                  <IonCol size="12" class="flex items-center justify-between">
                    <div className="text-zinc-500 font-semibold text-lg ">PERSONAL & MEMBERSHIP</div>
                    <div>
                      <IonImg src={editIcon} className="w-6 h-6" />
                    </div>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="6" className="flex flex-col gap-2">
                    <div className="text-zinc-500 text-sm">FULL NAME</div>
                    <div className=" text-lg">Juan G. Dela Cruz</div>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="6" className="flex flex-col gap-2">
                    <div className="text-zinc-500 text-sm">DATE OF BIRTH</div>
                    <div className="text-lg">January 1, 1990</div>
                  </IonCol>
                  <IonCol size="6" className="flex flex-col gap-2">
                    <div className="text-zinc-500 text-sm">GENDER</div>
                    <div className=" text-lg">Male</div>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="6" className="flex flex-col gap-2">
                    <div className="text-zinc-500 text-sm">CIVIL STATUS</div>
                    <div className=" text-lg">Single</div>
                  </IonCol>
                  <IonCol size="6" className="flex flex-col gap-2">
                    <div className="text-zinc-500 text-sm">NATIONALITY</div>
                    <div className=" text-lg">Filipino</div>
                  </IonCol>
                </IonRow>
              </div>

              <div className="bg-zinc-100 rounded-3xl h-max p-6 flex flex-col gap-4 mb-8">
                <IonRow className="mb-2 ">
                  <IonCol size="12" class="flex items-center justify-between">
                    <div className="text-zinc-500 font-semibold text-lg ">CONTACT & ADDRESS</div>
                    <div>
                      <IonImg src={editIcon} className="w-6 h-6" />
                    </div>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="6" className="flex flex-col gap-2">
                    <div className="text-zinc-500 text-sm">MOBILE</div>
                    <div className=" text-lg">0917 123 4567</div>
                  </IonCol>
                  <IonCol size="6" className="flex flex-col gap-2">
                    <div className="text-zinc-500 text-sm">EMAIL</div>
                    <div className=" text-lg">juan.dc@example.com</div>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="12" className="flex flex-col gap-2">
                    <div className="text-zinc-500 text-sm">RESIDENTIAL ADDRESS</div>
                    <div className="text-lg">123 Main St, Barangay, City, Philippines</div>
                  </IonCol>
                </IonRow>
              </div>

              <div className="bg-zinc-100 rounded-3xl h-max p-6 flex flex-col gap-4 mb-8">
                <IonRow className="mb-2 ">
                  <IonCol size="12" class="flex items-center justify-between">
                    <div className="text-zinc-500 font-semibold text-lg ">EMPLOYMENT & VERIFICATION</div>
                    <div>
                      <IonImg src={editIcon} className="w-6 h-6" />
                    </div>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="6" className="flex flex-col gap-2">
                    <div className="text-zinc-500 text-sm">STATUS</div>
                    <div className=" text-lg">Employed</div>
                  </IonCol>
                  <IonCol size="6" className="flex flex-col gap-2">
                    <div className="text-zinc-500 text-sm">OCCUPATION</div>
                    <div className=" text-lg">Software Engineer</div>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="12" className="flex flex-col gap-2">
                    <div className="text-zinc-500 text-sm">VERIFIED ID</div>
                    <div className="flex items-center bg-white rounded-xl justify-center gap-2 w-full h-full">
                      {/* Upload Icon */}
                      <div className=" w-1/5 flex items-center justify-center  h-20  rounded-xl ">
                        {" "}
                        <RiIdCardFill size={40} className="text-primary p-3 rounded-xl bg-primary/10" />
                      </div>

                      <div className=" w-3/5 text-left">
                        {" "}
                        <p className="font-semibold text-lg">National ID</p>
                        <p className="text-zinc-400 text-xs">ID: 1234-1234-4567</p>
                      </div>
                      <div className=" w-1/5 flex items-center justify-center   h-20">
                        {" "}
                        <p className="text-red-700  font-semibold p-2 rounded-md">
                          <HiCheckBadge size={20} />
                        </p>
                      </div>
                    </div>
                  </IonCol>
                </IonRow>
              </div>

              <div className="bg-zinc-100 rounded-3xl h-max p-6 flex flex-col gap-4 mb-8">
                <IonRow className="mb-2 ">
                  <IonCol size="12" class="flex items-center justify-between">
                    <div className="text-zinc-500 font-semibold text-lg ">FAMILY & BENEFICIARIES</div>
                    <div>
                      <IonImg src={editIcon} className="w-6 h-6" />
                    </div>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="12" className="flex flex-col gap-2">
                    <div className="text-zinc-500 text-sm">SPOUSE</div>
                    <div className=" text-lg">Maria S. Dela Cruz</div>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="12" className="flex flex-col gap-2 p-4 bg-red-100 border border-dashed border-red-300 rounded-xl">
                    <div className="text-zinc-500 text-sm">PRIMARY BENEFICIARY</div>
                    <div className=" text-lg flex justify-between">
                      <span>Jose S. Dela Cruz</span>
                      <span className="text-zinc-400">Son</span>
                    </div>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="12" className="flex flex-col gap-2">
                    <div className="text-zinc-500 text-sm">EMERGENCY CONTACT</div>
                    <div className=" text-lg">
                      Maria S. Dela Cruz <span className="text-zinc-400 ml-2">(BROTHER)</span>
                    </div>
                    <div className=" text-lg">0912 345 7897</div>
                  </IonCol>
                </IonRow>
              </div>

              <div className="bg-zinc-100 rounded-3xl h-max p-6 flex flex-col gap-4 mb-8">
                <IonRow className="mb-2 ">
                  <IonCol size="12" class="flex items-center justify-between">
                    <div className="text-zinc-500 font-semibold text-lg ">PRODUCT & SERVICES</div>
                    <div>
                      <IonImg src={editIcon} className="w-6 h-6" />
                    </div>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="12" className=" flex gap-2 bg-red-50 border border-red-100 p-4 rounded-xl">
                    <IoCard size={30} className="text-primary-dark p-2 bg-red-50 rounded-lg" />
                    <div className=" text-lg flex items-center justify-center font-semibold">PINOY COOP ATM</div>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="12" className=" flex gap-2 bg-red-50 border border-red-100 p-4 rounded-xl">
                    <IoMdCash size={30} className="text-primary-dark p-2 bg-red-50 rounded-lg" />
                    <div className=" text-lg flex items-center justify-center font-semibold">KAYA PAYMENT PLATFORM</div>
                  </IonCol>
                </IonRow>
              </div>

              <div className="bg-primary text-white rounded-3xl h-max p-6 flex flex-col gap-4 mb-8">
                <IonRow>
                  <IonCol className="text-2xl font-semibold">Ready to Join?</IonCol>
                </IonRow>

                <IonRow>
                  <IonCol className="text-lg">Your application is complete and verified. By submitting, you acknowledge you intent to become a valued member of the MEMPCO community. </IonCol>
                </IonRow>

                {/* Checkbox */}
                <IonRow className="mt-2   ">
                  <IonCol size="1">
                    {" "}
                    <IonCheckbox checked={formik.values.acceptTermsAndConditions} onIonChange={(e: any) => formik.setFieldValue("acceptTermsAndConditions", e.detail.checked)} color="light" />
                  </IonCol>
                  <IonCol size="11" className="flex flex-col">
                    <IonLabel className="ml-3 text-lg">I hereby declare that all information provided is true and correct, and I agree to the Terms of Membership and Privacy Policy.</IonLabel>
                  </IonCol>
                </IonRow>

                <IonButton
                  onClick={() => router.push(ROUTES.APPLICATION_SUBMITTED, "forward")}
                  expand="block"
                  fill="clear"
                  className="mt-2 text-xl w-full gap-2 rounded-3xl text-primary font-semibold bg-white flex items-center justify-center"
                >
                  Submit Application
                </IonButton>
              </div>
            </div>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default ReviewAndSubmit;
