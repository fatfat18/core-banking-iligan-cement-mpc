import { useState } from "react";
import { useFormik, FormikProvider, Form } from "formik";
import { IoMdArrowRoundBack } from "react-icons/io";
import * as Yup from "yup";
import { ROUTES } from "../../constants/routes";
import { RiIdCardFill } from "react-icons/ri";

import { IonPage, useIonRouter, IonContent, IonRow, IonCol, IonInput, IonText, IonSelect, IonSelectOption, IonButton, IonItem, IonHeader, IonLabel, IonCheckbox } from "@ionic/react";

const validationSchema = Yup.object({
  employeeStatus: Yup.string().required("Employee Status is required"),

  occupation: Yup.string().required("Occupation is required"),

  employer: Yup.string().required("Employer is required"),

  validID: Yup.string().required("Valid ID is required"),

  IdNumber: Yup.string().required("ID Number is required"),

  IdFile: Yup.mixed().required("ID File is required"),
});
const EmployeeAndVerification: React.FC = () => {
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
      <IonHeader className="shadow-none! pb-5 bg-zinc-50 text-primary">
        <IonRow>
          <IonCol size="2" className="flex items-center justify-center gap-4">
            <IoMdArrowRoundBack size={20} onClick={() => router.push(ROUTES.CONTACT_AND_ADDRESS, "back")} className="cursor-pointer" />
          </IonCol>

          <IonCol size="10" className="flex items-center">
            <IonText className="font-semibold text-2xl">Apply Membership</IonText>
          </IonCol>
        </IonRow>
      </IonHeader>

      <IonContent>
        <IonRow className="flex justify-center">
          <IonCol size="12" sizeMd="8" sizeLg="6">
            <div className="bg-zinc-50 p-10 pt-0 rounded-2xl">
              {/* Progress */}
              <div className="py-4 w-full flex rounded-lg mb-4">
                <div className="w-max pr-4">Step 3 of 5</div>

                <div className="h-2 w-3/4 bg-zinc-200 rounded-full mt-2">
                  <div className="h-2 w-3/5 bg-primary rounded-full"></div>
                </div>
              </div>

              {/* Header */}
              <div className="mb-2 text-primary font-semibold text-3xl">Employee & Verification</div>

              <div className="text-zinc-400 mb-6">Share your employment details and verify your identity securely.</div>

              <FormikProvider value={formik}>
                <Form onSubmit={formik.handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    {/* Employee Status */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Employee Status</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.employeeStatus && formik.errors.employeeStatus ? "border-red-500" : "border-zinc-300"}`}>
                        <IonSelect placeholder="Select employee status" value={formik.values.employeeStatus} onIonChange={(e) => formik.setFieldValue("employeeStatus", e.detail.value)}>
                          <IonSelectOption value="Employed">Employed</IonSelectOption>

                          <IonSelectOption value="Self-Employed">Self-Employed</IonSelectOption>

                          <IonSelectOption value="Unemployed">Unemployed</IonSelectOption>

                          <IonSelectOption value="Student">Student</IonSelectOption>

                          <IonSelectOption value="Retired">Retired</IonSelectOption>
                        </IonSelect>
                      </IonItem>

                      {formik.touched.employeeStatus && formik.errors.employeeStatus && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.employeeStatus}</IonText>
                        </div>
                      )}
                    </div>

                    {/* Occupation */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Occupation</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.occupation && formik.errors.occupation ? "border-red-500" : "border-zinc-300"}`}>
                        <IonInput
                          name="occupation"
                          type="text"
                          placeholder="Enter occupation"
                          value={formik.values.occupation}
                          onIonInput={(e) => formik.setFieldValue("occupation", e.detail.value!)}
                          onIonBlur={() => formik.setFieldTouched("occupation", true)}
                        />
                      </IonItem>

                      {formik.touched.occupation && formik.errors.occupation && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.occupation}</IonText>
                        </div>
                      )}
                    </div>

                    {/* Employer */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Employer / Company</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.employer && formik.errors.employer ? "border-red-500" : "border-zinc-300"}`}>
                        <IonInput
                          name="employer"
                          type="text"
                          placeholder="Enter employer/company"
                          value={formik.values.employer}
                          onIonInput={(e) => formik.setFieldValue("employer", e.detail.value!)}
                          onIonBlur={() => formik.setFieldTouched("employer", true)}
                        />
                      </IonItem>

                      {formik.touched.employer && formik.errors.employer && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.employer}</IonText>
                        </div>
                      )}
                    </div>

                    {/* Valid ID */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Valid ID Type</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.validID && formik.errors.validID ? "border-red-500" : "border-zinc-300"}`}>
                        <IonSelect placeholder="Select valid ID" value={formik.values.validID} onIonChange={(e) => formik.setFieldValue("validID", e.detail.value)}>
                          <IonSelectOption value="Passport">Passport</IonSelectOption>

                          <IonSelectOption value="Driver's License">Driver's License</IonSelectOption>

                          <IonSelectOption value="National ID">National ID</IonSelectOption>

                          <IonSelectOption value="UMID">UMID</IonSelectOption>

                          <IonSelectOption value="SSS ID">SSS ID</IonSelectOption>

                          <IonSelectOption value="PhilHealth ID">PhilHealth ID</IonSelectOption>

                          <IonSelectOption value="PRC ID">PRC ID</IonSelectOption>
                        </IonSelect>
                      </IonItem>

                      {formik.touched.validID && formik.errors.validID && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.validID}</IonText>
                        </div>
                      )}
                    </div>

                    {/* ID Number */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">ID Number</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.IdNumber && formik.errors.IdNumber ? "border-red-500" : "border-zinc-300"}`}>
                        <IonInput
                          name="IdNumber"
                          type="text"
                          placeholder="Enter ID number"
                          value={formik.values.IdNumber}
                          onIonInput={(e) => formik.setFieldValue("IdNumber", e.detail.value!)}
                          onIonBlur={() => formik.setFieldTouched("IdNumber", true)}
                        />
                      </IonItem>

                      {formik.touched.IdNumber && formik.errors.IdNumber && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.IdNumber}</IonText>
                        </div>
                      )}
                    </div>

                    {/* Upload Valid ID */}
                    <div>
                      <div className={`rounded-2xl border bg-white p-4 py-6 transition-all ${formik.touched.IdFile && formik.errors.IdFile ? "border-red-500" : "border-zinc-300"}`}>
                        {/* Hidden Input */}
                        <input
                          id="idFileInput"
                          type="file"
                          accept="image/*,.pdf"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.currentTarget.files?.[0];

                            formik.setFieldValue("IdFile", file);

                            formik.setFieldTouched("IdFile", true);
                          }}
                        />

                        {/* Custom Upload Button */}
                        <button
                          type="button"
                          onClick={() => document.getElementById("idFileInput")?.click()}
                          className="w-full rounded-xl border border-dashed border-primary  px-4  transition active:scale-[0.98]"
                        >
                          <div className="flex items-center justify-center gap-2  h-full">
                            {/* Upload Icon */}
                            <div className="flex items-start justify-start  h-20  rounded-xl ">
                              {" "}
                              <RiIdCardFill size={40} className="text-primary p-3 rounded-xl bg-primary/10" />
                            </div>

                            <div className="text-left">
                              {" "}
                              <p className="font-semibold text-lg mb-2">National ID</p>
                              <p className="text-zinc-400 text-xs">Upload clear copy of your National ID</p>
                            </div>
                            <div className="flex items-start justify-start   h-20">
                              {" "}
                              <p className="text-red-700 bg-red-50 font-semibold p-2 rounded-md">Required</p>
                            </div>
                          </div>

                          <div className=" w-full rounded-xl bg-zinc-100 text-zinc-500 font-semibold py-6 mt-2">Browse File</div>
                        </button>
                      </div>

                      {/* Error */}
                      {formik.touched.IdFile && formik.errors.IdFile && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.IdFile as string}</IonText>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="grid grid-cols-1 gap-4">
                    <IonButton
                      onClick={() => router.push(ROUTES.FAMILY_BENEFICIARIES_SERVICES, "forward")}
                      expand="block"
                      type="submit"
                      fill="clear"
                      className="mt-2 text-xl w-full gap-2 rounded-3xl text-white font-semibold bg-primary flex items-center justify-center"
                    >
                      Next Step
                      <IoMdArrowRoundBack size={20} className="text-white scale-x-[-1] ml-2" />
                    </IonButton>
                  </div>
                </Form>
              </FormikProvider>
            </div>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default EmployeeAndVerification;
