import { useState } from "react";
import { useFormik, FormikProvider, Form } from "formik";
import { IoMdArrowRoundBack } from "react-icons/io";
import * as Yup from "yup";
import { ROUTES } from "../../constants/routes";
import { FaMobile } from "react-icons/fa6";
import { IoCard } from "react-icons/io5";
import { IoMdCash } from "react-icons/io";
import { IoShieldCheckmark } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";

import { BsTrash3 } from "react-icons/bs";
import { IonPage, useIonRouter, IonContent, IonRow, IonCol, IonInput, IonText, IonSelect, IonSelectOption, IonButton, IonItem, IonHeader, IonLabel, IonCheckbox } from "@ionic/react";

const validationSchema = Yup.object({
  spouseFullName: Yup.string().required("Spouse Full Name is required"),

  mobileNumber: Yup.string().required("Mobile Number is required"),

  employmentStatus: Yup.string().required("Employment Status is required"),

  occupation: Yup.string().required("Occupation is required"),

  employer: Yup.string().required("Employer is required"),

  numberOfDependents: Yup.number().typeError("Must be a number").required("Number of Dependents is required"),

  emergencyContactFullName: Yup.string().required("Emergency Contact Full Name is required"),

  emergencyRelationship: Yup.string().required("Emergency Relationship is required"),

  emergencyContactMobileNumber: Yup.string().required("Emergency Contact Mobile Number is required"),

  beneficiary: Yup.array().of(
    Yup.object().shape({
      fullName: Yup.string().required("Beneficiary Full Name is required"),

      relationship: Yup.string().required("Relationship is required"),
    }),
  ),
});

const FamilyBeneficiariesAndServices: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const router = useIonRouter();
  const formik = useFormik({
    initialValues: {
      spouseFullName: "",

      mobileNumber: "",

      employmentStatus: "",

      occupation: "",

      employer: "",

      numberOfDependents: "",

      emergencyContactFullName: "",

      emergencyRelationship: "",

      emergencyContactMobileNumber: "",

      beneficiary: [
        {
          fullName: "",
          relationship: "",
        },
      ],
      services: {
        pinoCard: false,
        kayaPayment: false,
        mobileApp: false,
        protectionPlan: false,
      },
    },

    validationSchema,

    onSubmit: async (values) => {
      console.log(values);

      setSubmitted(true);

      router.push("/step-5", "forward");
    },
  });

  return (
    <IonPage>
      <IonHeader className="shadow-none! pb-5 bg-zinc-50 text-primary">
        <IonRow>
          <IonCol size="2" className="flex items-center justify-center gap-4">
            <IoMdArrowRoundBack size={20} onClick={() => router.push(ROUTES.EMPLOYEE_AND_VERIFICATION, "back")} className="cursor-pointer" />
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
                <div className="w-max pr-4">Step 4 of 5</div>

                <div className="h-2 w-3/4 bg-zinc-200 rounded-full mt-2">
                  <div className="h-2 w-4/5 bg-primary rounded-full"></div>
                </div>
              </div>

              {/* Header */}
              <div className="mb-2 text-primary font-semibold text-3xl">Family, Beneficiaries & Services</div>

              <div className="text-zinc-400 mb-6">Add your family, emergency contacts, beneficiaries, and preferred services.</div>

              <FormikProvider value={formik}>
                <Form onSubmit={formik.handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div className=" font-semibold mb-2">Spouse Information</div>
                    {/* Spouse Full Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Spouse Full Name</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.spouseFullName && formik.errors.spouseFullName ? "border-red-500" : "border-zinc-300"}`}>
                        <IonInput
                          name="spouseFullName"
                          placeholder="Enter spouse full name"
                          value={formik.values.spouseFullName}
                          onIonInput={(e) => formik.setFieldValue("spouseFullName", e.detail.value!)}
                          onIonBlur={() => formik.setFieldTouched("spouseFullName", true)}
                        />
                      </IonItem>

                      {formik.touched.spouseFullName && formik.errors.spouseFullName && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.spouseFullName}</IonText>
                        </div>
                      )}
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Mobile Number</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.mobileNumber && formik.errors.mobileNumber ? "border-red-500" : "border-zinc-300"}`}>
                        <IonInput
                          name="mobileNumber"
                          type="tel"
                          placeholder="+63 9XX XXX XXXX"
                          value={formik.values.mobileNumber}
                          onIonInput={(e) => formik.setFieldValue("mobileNumber", e.detail.value!)}
                          onIonBlur={() => formik.setFieldTouched("mobileNumber", true)}
                        />
                      </IonItem>

                      {formik.touched.mobileNumber && formik.errors.mobileNumber && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.mobileNumber}</IonText>
                        </div>
                      )}
                    </div>

                    {/* Employment Status */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Employment Status</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.employmentStatus && formik.errors.employmentStatus ? "border-red-500" : "border-zinc-300"}`}>
                        <IonSelect placeholder="Select employment status" value={formik.values.employmentStatus} onIonChange={(e) => formik.setFieldValue("employmentStatus", e.detail.value)}>
                          <IonSelectOption value="Employed">Employed</IonSelectOption>

                          <IonSelectOption value="Self-Employed">Self-Employed</IonSelectOption>

                          <IonSelectOption value="Unemployed">Unemployed</IonSelectOption>
                        </IonSelect>
                      </IonItem>

                      {formik.touched.employmentStatus && formik.errors.employmentStatus && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.employmentStatus}</IonText>
                        </div>
                      )}
                    </div>

                    {/* Occupation */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Occupation</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.occupation && formik.errors.occupation ? "border-red-500" : "border-zinc-300"}`}>
                        <IonInput
                          name="occupation"
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
                      <label className="block text-sm font-medium text-gray-700">Employer</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.employer && formik.errors.employer ? "border-red-500" : "border-zinc-300"}`}>
                        <IonInput
                          name="employer"
                          placeholder="Enter employer"
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

                    {/* Number of Dependents */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Number of Dependents</label>

                      <div
                        className={`mt-2 flex items-center justify-between rounded-2xl border bg-white px-4 py-3 ${
                          formik.touched.numberOfDependents && formik.errors.numberOfDependents ? "border-red-500" : "border-zinc-300"
                        }`}
                      >
                        {/* Minus Button */}
                        <IonButton
                          fill="clear"
                          type="button"
                          onClick={() => {
                            const current = Number(formik.values.numberOfDependents) || 0;

                            if (current > 0) {
                              formik.setFieldValue("numberOfDependents", current - 1);
                            }
                          }}
                          className="flex h-12 w-15  items-center justify-center rounded-xl bg-zinc-100 text-2xl font-bold text-zinc-700 active:scale-95 transition"
                        >
                          −
                        </IonButton>

                        {/* Value */}
                        <div className="flex flex-col items-center">
                          <span className="text-3xl font-bold text-primary">{formik.values.numberOfDependents || 0}</span>

                          <span className="text-xs text-zinc-400">Dependents</span>
                        </div>

                        {/* Plus Button */}
                        <IonButton
                          fill="clear"
                          type="button"
                          onClick={() => {
                            const current = Number(formik.values.numberOfDependents) || 0;

                            formik.setFieldValue("numberOfDependents", current + 1);
                          }}
                          className="flex h-12 w-15  items-center justify-center rounded-xl bg-primary text-2xl font-bold text-white active:scale-95 transition"
                        >
                          +
                        </IonButton>
                      </div>

                      {formik.touched.numberOfDependents && formik.errors.numberOfDependents && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.numberOfDependents}</IonText>
                        </div>
                      )}
                    </div>

                    <div className=" font-semibold mb-2">Emergency Contact</div>

                    {/* Emergency Contact Full Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Emergency Contact Full Name</label>

                      <IonItem
                        lines="none"
                        className={`rounded-xl border mt-2 bg-white ${formik.touched.emergencyContactFullName && formik.errors.emergencyContactFullName ? "border-red-500" : "border-zinc-300"}`}
                      >
                        <IonInput
                          name="emergencyContactFullName"
                          placeholder="Enter emergency contact full name"
                          value={formik.values.emergencyContactFullName}
                          onIonInput={(e) => formik.setFieldValue("emergencyContactFullName", e.detail.value!)}
                          onIonBlur={() => formik.setFieldTouched("emergencyContactFullName", true)}
                        />
                      </IonItem>

                      {formik.touched.emergencyContactFullName && formik.errors.emergencyContactFullName && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.emergencyContactFullName}</IonText>
                        </div>
                      )}
                    </div>

                    {/* Emergency Relationship */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Emergency Relationship</label>

                      <IonItem
                        lines="none"
                        className={`rounded-xl border mt-2 bg-white ${formik.touched.emergencyRelationship && formik.errors.emergencyRelationship ? "border-red-500" : "border-zinc-300"}`}
                      >
                        <IonInput
                          name="emergencyRelationship"
                          placeholder="Enter relationship"
                          value={formik.values.emergencyRelationship}
                          onIonInput={(e) => formik.setFieldValue("emergencyRelationship", e.detail.value!)}
                          onIonBlur={() => formik.setFieldTouched("emergencyRelationship", true)}
                        />
                      </IonItem>

                      {formik.touched.emergencyRelationship && formik.errors.emergencyRelationship && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.emergencyRelationship}</IonText>
                        </div>
                      )}
                    </div>

                    {/* Emergency Contact Mobile */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Emergency Contact Mobile Number</label>

                      <IonItem
                        lines="none"
                        className={`rounded-xl border mt-2 bg-white ${
                          formik.touched.emergencyContactMobileNumber && formik.errors.emergencyContactMobileNumber ? "border-red-500" : "border-zinc-300"
                        }`}
                      >
                        <IonInput
                          name="emergencyContactMobileNumber"
                          type="tel"
                          placeholder="+63 9XX XXX XXXX"
                          value={formik.values.emergencyContactMobileNumber}
                          onIonInput={(e) => formik.setFieldValue("emergencyContactMobileNumber", e.detail.value!)}
                          onIonBlur={() => formik.setFieldTouched("emergencyContactMobileNumber", true)}
                        />
                      </IonItem>

                      {formik.touched.emergencyContactMobileNumber && formik.errors.emergencyContactMobileNumber && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.emergencyContactMobileNumber}</IonText>
                        </div>
                      )}
                    </div>

                    <div className=" font-semibold mb-2">Beneficiaries</div>
                    {/* Beneficiaries */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium text-gray-700">Beneficiaries</label>
                      </div>

                      {formik.values.beneficiary.map((item, index) => (
                        <div key={index} className="rounded-2xl border border-zinc-200 p-6 space-y-4 bg-white">
                          <div className="flex items-center justify-between">
                            <div className="text-primary font-semibold">BENEFICIARY {index + 1} </div>
                            <div>
                              {" "}
                              {/* Remove */}
                              {formik.values.beneficiary.length > 0 && (
                                <button
                                  type="button"
                                  onClick={() => {
                                    const updated = formik.values.beneficiary.filter((_, i) => i !== index);

                                    formik.setFieldValue("beneficiary", updated);
                                  }}
                                  className="text-red-500 text-sm font-medium"
                                >
                                  <BsTrash3 size={18} className="text-zinc-500" />
                                </button>
                              )}
                            </div>
                          </div>
                          {/* Full Name */}
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Full Name</label>

                            <IonItem lines="none" className="rounded-xl border mt-2 bg-white border-zinc-300">
                              <IonInput placeholder="Enter full name" value={item.fullName} onIonInput={(e) => formik.setFieldValue(`beneficiary[${index}].fullName`, e.detail.value!)} />
                            </IonItem>
                          </div>

                          {/* Relationship */}
                          <div>
                            <label className="block text-sm font-medium text-gray-700">Relationship</label>

                            <IonItem lines="none" className="rounded-xl border mt-2 bg-white border-zinc-300">
                              <IonInput placeholder="Enter relationship" value={item.relationship} onIonInput={(e) => formik.setFieldValue(`beneficiary[${index}].relationship`, e.detail.value!)} />
                            </IonItem>
                          </div>
                        </div>
                      ))}

                      <IonButton
                        fill="clear"
                        type="button"
                        onClick={() =>
                          formik.setFieldValue("beneficiary", [
                            ...formik.values.beneficiary,
                            {
                              fullName: "",
                              relationship: "",
                            },
                          ])
                        }
                        className="px-4 h-15 w-full flex items-center justify-center border border-dashed   border-zinc-300 font-semibold  rounded-3xl text-primary-dark  text-sm"
                      >
                        <FiPlus size={20} className="inline-block mr-2" /> Add Another Beneficiary
                      </IonButton>
                    </div>

                    <div className=" font-semibold ">Other Products & Services</div>
                    <IonRow>
                      <IonCol>
                        <div className="flex flex-col gap-4">
                          <IonRow onClick={(e) => formik.setFieldValue("services.pinoCard", !formik.values.services.pinoCard)}>
                            <IonCol size="12" className=" flex gap-2  p-4 rounded-xl bg-white">
                              <IoCard size={40} className="text-primary-dark p-2 bg-zinc-50 rounded-lg" />
                              <div className="flex flex-col items-start">
                                {" "}
                                <p className=" text-lg flex items-center justify-center font-semibold">PINOY COOP ATM</p>
                                <p className="text-zinc-400 text-xs">Access your funds nationwide through our secure ATM network</p>
                              </div>
                              <div className="flex items-center justify-center">
                                <IonCheckbox
                                  slot="end"
                                  color="danger"
                                  name="pinoCard"
                                  onClick={(e) => formik.setFieldValue("services.pinoCard", !formik.values.services.pinoCard)}
                                  onIonChange={(e) => formik.setFieldValue("services.pinoCard", e.detail.checked)}
                                  checked={formik.values.services.pinoCard}
                                />
                              </div>
                            </IonCol>
                          </IonRow>

                          <IonRow onClick={(e) => formik.setFieldValue("services.kayaPayment", !formik.values.services.kayaPayment)}>
                            <IonCol size="12" className=" flex gap-2  p-4 rounded-xl bg-white">
                              <IoMdCash size={40} className="text-primary-dark p-2 bg-zinc-50 rounded-lg" />
                              <div className="flex flex-col items-start">
                                <p className=" text-lg flex items-center justify-center font-semibold">KAYA PAYMENT PLATFORM</p>{" "}
                                <p className="text-zinc-400 text-xs">Access your funds nationwide through our secure ATM network</p>
                              </div>
                              <div className="flex items-center justify-center">
                                <IonCheckbox
                                  slot="end"
                                  color="danger"
                                  name="kayaPayment"
                                  onClick={(e) => formik.setFieldValue("services.kayaPayment", !formik.values.services.kayaPayment)}
                                  onIonChange={(e) => formik.setFieldValue("services.kayaPayment", e.detail.checked)}
                                  checked={formik.values.services.kayaPayment}
                                />
                              </div>
                            </IonCol>
                          </IonRow>

                          <IonRow onClick={(e) => formik.setFieldValue("services.mobileApp", !formik.values.services.mobileApp)}>
                            <IonCol size="12" className=" flex gap-2  p-4 rounded-xl bg-white">
                              <FaMobile size={30} className="text-primary-dark p-2 bg-zinc-50 rounded-lg" />
                              <div className="flex flex-col items-start">
                                {" "}
                                <p className=" text-lg flex items-center justify-center font-semibold">MEMPCO MOBILE APP</p>
                                <p className="text-zinc-400 text-xs">Access your funds nationwide through our secure ATM network</p>
                              </div>

                              <div className="flex items-center justify-center">
                                <IonCheckbox
                                  slot="end"
                                  color="danger"
                                  name="services.mobileApp"
                                  onClick={(e) => formik.setFieldValue("services.mobileApp", !formik.values.services.mobileApp)}
                                  onIonChange={(e) => formik.setFieldValue("services.mobileApp", e.detail.checked)}
                                  checked={formik.values.services.mobileApp}
                                />
                              </div>
                            </IonCol>
                          </IonRow>

                          <IonRow onClick={(e) => formik.setFieldValue("services.protectionPlan", !formik.values.services.protectionPlan)}>
                            <IonCol size="12" className=" flex gap-2  p-4 rounded-xl bg-white">
                              <IoShieldCheckmark size={30} className="text-primary-dark p-2 bg-zinc-50 rounded-lg" />
                              <div className="flex flex-col items-start">
                                {" "}
                                <p className=" text-lg flex items-center justify-center font-semibold">PROTECTION PLAN</p>
                                <p className="text-zinc-400 text-xs">Access your funds nationwide through our secure ATM network</p>
                              </div>

                              <div className="flex items-center justify-center">
                                <IonCheckbox
                                  slot="end"
                                  color="danger"
                                  name="services.protectionPlan"
                                  onClick={(e) => formik.setFieldValue("services.protectionPlan", !formik.values.services.protectionPlan)}
                                  onIonChange={(e) => formik.setFieldValue("services.protectionPlan", e.detail.checked)}
                                  checked={formik.values.services.protectionPlan}
                                />
                              </div>
                            </IonCol>
                          </IonRow>
                        </div>
                      </IonCol>
                    </IonRow>
                  </div>

                  {/* Submit Button */}
                  <div className="grid grid-cols-1 gap-4">
                    <IonButton
                      onClick={() => router.push(ROUTES.REVIEW_AND_SUBMIT, "forward")}
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

export default FamilyBeneficiariesAndServices;
