import { useState } from "react";
import { useFormik, FormikProvider, Form } from "formik";
import { IoMdArrowRoundBack } from "react-icons/io";
import * as Yup from "yup";
import { ROUTES } from "../../constants/routes";

import { IonPage, useIonRouter, IonContent, IonRow, IonCol, IonInput, IonText, IonSelect, IonSelectOption, IonButton, IonItem, IonHeader, IonLabel, IonCheckbox } from "@ionic/react";

const validationSchema = Yup.object({
  mobileNumber: Yup.string().required("Mobile Number is required"),

  email: Yup.string().email("Invalid email address").required("Email is required"),

  areYouOverseas: Yup.boolean(),

  preferredMessagingPlatform: Yup.string().required("Preferred Messaging Platform is required"),

  accountName: Yup.string().required("Account Name is required"),

  province: Yup.string().required("Province is required"),

  city: Yup.string().required("City is required"),

  barangay: Yup.string().required("Barangay is required"),

  street: Yup.string().required("Street is required"),

  zipcode: Yup.string().required("Zipcode is required"),

  sameAsPermanentAddress: Yup.boolean(),

  residencyType: Yup.string().required("Residency Type is required"),

  yearsOfResidency: Yup.string().required("Years of Residency is required"),
});

const ContactAndAddress: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const router = useIonRouter();

  const formik = useFormik({
    initialValues: {
      mobileNumber: "",

      email: "",

      areYouOverseas: false,

      preferredMessagingPlatform: "",

      accountName: "",

      province: "",

      city: "",

      barangay: "",

      street: "",

      zipcode: "",

      sameAsPermanentAddress: false,

      residencyType: "",

      yearsOfResidency: "",
    },

    validationSchema,

    onSubmit: async (values) => {
      console.log(values);

      setSubmitted(true);

      router.push(ROUTES.EMPLOYEE_AND_VERIFICATION, "forward");
    },
  });

  return (
    <IonPage>
      <IonHeader className="shadow-none! pb-5 bg-zinc-50 text-primary">
        <IonRow>
          <IonCol size="2" className="flex items-center justify-center gap-4">
            <IoMdArrowRoundBack size={20} onClick={() => router.push(ROUTES.APPLY_MEMBERSHIP, "back")} className="cursor-pointer" />
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
                <div className="w-max pr-4">Step 2 of 5</div>

                <div className="h-2 w-3/4 bg-zinc-200 rounded-full mt-2">
                  <div className="h-2 w-2/5 bg-primary rounded-full"></div>
                </div>
              </div>

              {/* Header */}
              <div className="mb-2 text-primary font-semibold text-3xl">Contact & Address</div>

              <div className="text-zinc-400 mb-6">Tell us how we can reach you and where you currently reside.</div>

              <FormikProvider value={formik}>
                <Form onSubmit={formik.handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div className=" font-semibold mb-2">Contact Information</div>
                    {/* Mobile Number */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Mobile Number</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.mobileNumber && formik.errors.mobileNumber ? "border-red-500" : "border-zinc-300"}`}>
                        <IonInput
                          name="mobileNumber"
                          type="tel"
                          inputmode="numeric"
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

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email Address</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.email && formik.errors.email ? "border-red-500" : "border-zinc-300"}`}>
                        <IonInput
                          name="email"
                          type="email"
                          placeholder="example@email.com"
                          value={formik.values.email}
                          onIonInput={(e) => formik.setFieldValue("email", e.detail.value!)}
                          onIonBlur={() => formik.setFieldTouched("email", true)}
                        />
                      </IonItem>

                      {formik.touched.email && formik.errors.email && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.email}</IonText>
                        </div>
                      )}
                    </div>

                    {/* Are You Overseas */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Are You Overseas?</label>

                      <IonItem lines="none" className="rounded-xl border mt-2 bg-white border-zinc-300">
                        <IonSelect placeholder="Select option" value={formik.values.areYouOverseas} onIonChange={(e) => formik.setFieldValue("areYouOverseas", e.detail.value)}>
                          <IonSelectOption value={true}>Yes</IonSelectOption>

                          <IonSelectOption value={false}>No</IonSelectOption>
                        </IonSelect>
                      </IonItem>
                    </div>

                    {/* Preferred Messaging Platform */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Preferred Messaging Platform</label>

                      <IonItem
                        lines="none"
                        className={`rounded-xl border mt-2 bg-white ${formik.touched.preferredMessagingPlatform && formik.errors.preferredMessagingPlatform ? "border-red-500" : "border-zinc-300"}`}
                      >
                        <IonSelect
                          placeholder="Select messaging platform"
                          value={formik.values.preferredMessagingPlatform}
                          onIonChange={(e) => formik.setFieldValue("preferredMessagingPlatform", e.detail.value)}
                        >
                          <IonSelectOption value="Messenger">Messenger</IonSelectOption>

                          <IonSelectOption value="WhatsApp">WhatsApp</IonSelectOption>

                          <IonSelectOption value="Telegram">Telegram</IonSelectOption>

                          <IonSelectOption value="Viber">Viber</IonSelectOption>
                        </IonSelect>
                      </IonItem>

                      {formik.touched.preferredMessagingPlatform && formik.errors.preferredMessagingPlatform && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.preferredMessagingPlatform}</IonText>
                        </div>
                      )}
                    </div>

                    {/* Account Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Account Name</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.accountName && formik.errors.accountName ? "border-red-500" : "border-zinc-300"}`}>
                        <IonInput
                          name="accountName"
                          type="text"
                          placeholder="Enter account name"
                          value={formik.values.accountName}
                          onIonInput={(e) => formik.setFieldValue("accountName", e.detail.value!)}
                          onIonBlur={() => formik.setFieldTouched("accountName", true)}
                        />
                      </IonItem>

                      {formik.touched.accountName && formik.errors.accountName && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.accountName}</IonText>
                        </div>
                      )}
                    </div>

                    <div className=" font-semibold mb-2">Current Residental Address</div>

                    {/* Province */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Province</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.province && formik.errors.province ? "border-red-500" : "border-zinc-300"}`}>
                        <IonInput
                          name="province"
                          type="text"
                          placeholder="Enter province"
                          value={formik.values.province}
                          onIonInput={(e) => formik.setFieldValue("province", e.detail.value!)}
                          onIonBlur={() => formik.setFieldTouched("province", true)}
                        />
                      </IonItem>

                      {formik.touched.province && formik.errors.province && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.province}</IonText>
                        </div>
                      )}
                    </div>

                    {/* City */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">City / Municipality</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.city && formik.errors.city ? "border-red-500" : "border-zinc-300"}`}>
                        <IonInput
                          name="city"
                          type="text"
                          placeholder="Enter city"
                          value={formik.values.city}
                          onIonInput={(e) => formik.setFieldValue("city", e.detail.value!)}
                          onIonBlur={() => formik.setFieldTouched("city", true)}
                        />
                      </IonItem>

                      {formik.touched.city && formik.errors.city && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.city}</IonText>
                        </div>
                      )}
                    </div>

                    {/* Barangay */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Barangay</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.barangay && formik.errors.barangay ? "border-red-500" : "border-zinc-300"}`}>
                        <IonInput
                          name="barangay"
                          type="text"
                          placeholder="Enter barangay"
                          value={formik.values.barangay}
                          onIonInput={(e) => formik.setFieldValue("barangay", e.detail.value!)}
                          onIonBlur={() => formik.setFieldTouched("barangay", true)}
                        />
                      </IonItem>

                      {formik.touched.barangay && formik.errors.barangay && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.barangay}</IonText>
                        </div>
                      )}
                    </div>

                    {/* Street */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Street Name / House No.</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.street && formik.errors.street ? "border-red-500" : "border-zinc-300"}`}>
                        <IonInput
                          name="street"
                          type="text"
                          placeholder="Enter street"
                          value={formik.values.street}
                          onIonInput={(e) => formik.setFieldValue("street", e.detail.value!)}
                          onIonBlur={() => formik.setFieldTouched("street", true)}
                        />
                      </IonItem>

                      {formik.touched.street && formik.errors.street && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.street}</IonText>
                        </div>
                      )}
                    </div>

                    {/* Zipcode */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">ZIP Code</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.zipcode && formik.errors.zipcode ? "border-red-500" : "border-zinc-300"}`}>
                        <IonInput
                          name="zipcode"
                          inputmode="numeric"
                          type="text"
                          placeholder="Enter zipcode"
                          value={formik.values.zipcode}
                          onIonInput={(e) => formik.setFieldValue("zipcode", e.detail.value!)}
                          onIonBlur={() => formik.setFieldTouched("zipcode", true)}
                        />
                      </IonItem>

                      {formik.touched.zipcode && formik.errors.zipcode && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.zipcode}</IonText>
                        </div>
                      )}
                    </div>

                    {/* Same as Permanent Address */}

                    {/* Checkbox */}
                    <IonRow className="mt-2 flex items-center gap-2">
                      <IonCol size="auto">
                        {" "}
                        <IonCheckbox checked={formik.values.sameAsPermanentAddress} onIonChange={(e: any) => formik.setFieldValue("sameAsPermanentAddress", e.detail.checked)} />
                      </IonCol>
                      <IonCol size="auto" className="flex flex-col">
                        <IonLabel className="ml-3 font-semibold">Same as Permanent Address</IonLabel>
                        <IonLabel className="ml-3 text-zinc-400">Your permanent residency is the same as current.</IonLabel>
                      </IonCol>
                    </IonRow>

                    {/* Residency Type */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Residency Type</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.residencyType && formik.errors.residencyType ? "border-red-500" : "border-zinc-300"}`}>
                        <IonSelect placeholder="Select residency type" value={formik.values.residencyType} onIonChange={(e) => formik.setFieldValue("residencyType", e.detail.value)}>
                          <IonSelectOption value="Owned">Owned</IonSelectOption>

                          <IonSelectOption value="Rented">Rented</IonSelectOption>

                          <IonSelectOption value="Living with Family">Living with Family</IonSelectOption>
                        </IonSelect>
                      </IonItem>

                      {formik.touched.residencyType && formik.errors.residencyType && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.residencyType}</IonText>
                        </div>
                      )}
                    </div>

                    {/* Years of Residency */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Years of Residency</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.yearsOfResidency && formik.errors.yearsOfResidency ? "border-red-500" : "border-zinc-300"}`}>
                        <IonInput
                          name="yearsOfResidency"
                          type="number"
                          placeholder="Enter years of residency"
                          value={formik.values.yearsOfResidency}
                          onIonInput={(e) => formik.setFieldValue("yearsOfResidency", e.detail.value!)}
                          onIonBlur={() => formik.setFieldTouched("yearsOfResidency", true)}
                        />
                      </IonItem>

                      {formik.touched.yearsOfResidency && formik.errors.yearsOfResidency && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.yearsOfResidency}</IonText>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="grid grid-cols-1 gap-4">
                    <IonButton
                      onClick={() => router.push(ROUTES.EMPLOYEE_AND_VERIFICATION, "forward")}
                      expand="block"
                      // type="submit"
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

export default ContactAndAddress;
