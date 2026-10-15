import { useState } from "react";
import { useFormik, FormikProvider, Form } from "formik";
import { IoMdArrowRoundBack } from "react-icons/io";
import * as Yup from "yup";
import { ROUTES } from "../../../constants/routes";

import { IonPage, useIonRouter, IonContent, IonRow, IonCol, IonInput, IonText, IonSelect, IonSelectOption, IonCheckbox, IonButton, IonItem, IonLabel, IonHeader } from "@ionic/react";

const validationSchema = Yup.object({
  ClientID: Yup.string().required("Client ID is required"),
  Branch: Yup.string().required("Branch is required"),
  FirstName: Yup.string().required("First Name is required"),
  MiddleName: Yup.string(),
  LastName: Yup.string().required("Last Name is required"),
  Sex: Yup.string().required("Sex is required"),
  MobileNumber: Yup.string().required("Mobile Number is required"),
  EmailAddress: Yup.string().email("Invalid email").required("Email is required"),
  Province: Yup.string().required("Province is required"),
  City: Yup.string().required("City is required"),
  Baranggay: Yup.string().required("Baranggay is required"),
  Street: Yup.string().required("Street is required"),
  Zipcode: Yup.string().required("Zipcode is required"),
  SameAsPermAddress: Yup.boolean(),
});

const CreateAccount: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const router = useIonRouter();

  const formik = useFormik({
    initialValues: {
      ClientID: "",
      Branch: "",
      FirstName: "",
      MiddleName: "",
      LastName: "",
      Sex: "",
      MobileNumber: "",
      EmailAddress: "",
      Province: "",
      City: "",
      Barangay: "",
      Street: "",
      Zipcode: "",
      SameAsPermAddress: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      setSubmitted(true);
    },
  });

  return (
    <IonPage>
      <IonHeader className="shadow-none! pb-5 bg-zinc-50 text-primary ">
        <IonRow>
          <IonCol size="2" className="flex items-center justify-center gap-4">
            <IoMdArrowRoundBack size={20} onClick={() => router.push(ROUTES.HOME, "back")} className="cursor-pointer" />
          </IonCol>
          <IonCol size="10" className="flex items-center ">
            <IonText className="font-semibold text-2xl">Create an Account</IonText>
          </IonCol>
        </IonRow>
      </IonHeader>
      <IonContent className="">
        <IonRow className="flex justify-center">
          <IonCol size="12" sizeMd="8" sizeLg="6">
            <div className="bg-zinc-50 p-10 pt-0  rounded-2xl">
              <div className="py-4 w-full flex rounded-lg mb-4">
                <div className="w-max pr-4">Step 1 of 3</div>
                <div className="h-2 w-3/4 bg-zinc-200 rounded-full mt-2">
                  <div className="h-2 w-1/3 bg-primary rounded-full"></div>
                </div>
              </div>

              <div className="mb-2 text-primary font-semibold text-3xl">Create Account</div>
              <div className=" text-zinc-400 mb-6">Please ensure your details match your government-issued identification exactly.</div>

              <div className=" font-semibold mb-2">Account Information</div>
              <FormikProvider value={formik}>
                <Form onSubmit={formik.handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    {/* Client ID */}
                    <div>
                      <label className="flex justify-between text-sm font-medium text-gray-700">
                        <span>Client ID</span>
                        <span className="text-red-500">Required</span>
                      </label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.ClientID && formik.errors.ClientID ? "border-red-500" : "border-zinc-300"}`}>
                        <IonInput placeholder="Enter Client ID" value={formik.values.ClientID} onIonInput={(e) => formik.setFieldValue("ClientID", e.detail.value!)} onIonBlur={formik.handleBlur} />
                      </IonItem>

                      {formik.touched.ClientID && formik.errors.ClientID && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.ClientID}</IonText>
                        </div>
                      )}
                    </div>

                    {/* Branch */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Branch</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.Branch && formik.errors.Branch ? "border-red-500" : "border-zinc-300"}`}>
                        <IonInput placeholder="Enter Branch" value={formik.values.Branch} onIonInput={(e) => formik.setFieldValue("Branch", e.detail.value!)} onIonBlur={formik.handleBlur} />
                      </IonItem>

                      {formik.touched.Branch && formik.errors.Branch && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.Branch}</IonText>
                        </div>
                      )}
                    </div>

                    {/* First Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">First Name</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.FirstName && formik.errors.FirstName ? "border-red-500" : "border-zinc-300"}`}>
                        <IonInput placeholder="First Name" value={formik.values.FirstName} onIonInput={(e) => formik.setFieldValue("FirstName", e.detail.value!)} onIonBlur={formik.handleBlur} />
                      </IonItem>

                      {formik.touched.FirstName && formik.errors.FirstName && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.FirstName}</IonText>
                        </div>
                      )}
                    </div>

                    {/* Middle Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Middle Name</label>

                      <IonItem lines="none" className="rounded-xl border mt-2 bg-white border-zinc-300">
                        <IonInput placeholder="Middle Name" value={formik.values.MiddleName} onIonInput={(e) => formik.setFieldValue("MiddleName", e.detail.value!)} onIonBlur={formik.handleBlur} />
                      </IonItem>
                    </div>

                    {/* Last Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Last Name</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.LastName && formik.errors.LastName ? "border-red-500" : "border-zinc-300"}`}>
                        <IonInput placeholder="Last Name" value={formik.values.LastName} onIonInput={(e) => formik.setFieldValue("LastName", e.detail.value!)} onIonBlur={formik.handleBlur} />
                      </IonItem>

                      {formik.touched.LastName && formik.errors.LastName && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.LastName}</IonText>
                        </div>
                      )}
                    </div>

                    {/* Sex */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Sex</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.Sex && formik.errors.Sex ? "border-red-500" : "border-zinc-300"}`}>
                        <IonSelect placeholder="Select Sex" value={formik.values.Sex} onIonChange={(e) => formik.setFieldValue("Sex", e.detail.value)}>
                          <IonSelectOption value="Male">Male</IonSelectOption>

                          <IonSelectOption value="Female">Female</IonSelectOption>

                          <IonSelectOption value="Other">Other</IonSelectOption>
                        </IonSelect>
                      </IonItem>

                      {formik.touched.Sex && formik.errors.Sex && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.Sex}</IonText>
                        </div>
                      )}
                    </div>

                    <div className=" font-semibold mb-2">Contact Information</div>
                    {/* Mobile Number */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Mobile Number</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.MobileNumber && formik.errors.MobileNumber ? "border-red-500" : "border-zinc-300"}`}>
                        <IonInput
                          type="tel"
                          placeholder="+63 9XX XXX XXXX"
                          value={formik.values.MobileNumber}
                          onIonInput={(e) => formik.setFieldValue("MobileNumber", e.detail.value!)}
                          onIonBlur={formik.handleBlur}
                        />
                      </IonItem>

                      {formik.touched.MobileNumber && formik.errors.MobileNumber && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.MobileNumber}</IonText>
                        </div>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email Address</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.EmailAddress && formik.errors.EmailAddress ? "border-red-500" : "border-zinc-300"}`}>
                        <IonInput
                          type="email"
                          placeholder="email@example.com"
                          value={formik.values.EmailAddress}
                          onIonInput={(e) => formik.setFieldValue("EmailAddress", e.detail.value!)}
                          onIonBlur={formik.handleBlur}
                        />
                      </IonItem>

                      {formik.touched.EmailAddress && formik.errors.EmailAddress && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.EmailAddress}</IonText>
                        </div>
                      )}
                    </div>
                    <div className=" font-semibold mb-2">Current Residential Address</div>

                    {/* Province */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Province / Region</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.Province && formik.errors.Province ? "border-red-500" : "border-zinc-300"}`}>
                        <IonInput
                          type="text"
                          placeholder="Enter your province"
                          value={formik.values.Province}
                          onIonInput={(e) => formik.setFieldValue("Province", e.detail.value!)}
                          onIonBlur={formik.handleBlur}
                        />
                      </IonItem>

                      {formik.touched.Province && formik.errors.Province && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.Province}</IonText>
                        </div>
                      )}
                    </div>

                    {/* City */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">City / Municipality</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.City && formik.errors.City ? "border-red-500" : "border-zinc-300"}`}>
                        <IonInput
                          type="text"
                          placeholder="Enter your city"
                          value={formik.values.City}
                          onIonInput={(e) => formik.setFieldValue("City", e.detail.value!)}
                          onIonBlur={formik.handleBlur}
                        />
                      </IonItem>

                      {formik.touched.City && formik.errors.City && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.City}</IonText>
                        </div>
                      )}
                    </div>

                    {/* Barangay */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Barangay</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.Barangay && formik.errors.Barangay ? "border-red-500" : "border-zinc-300"}`}>
                        <IonInput
                          type="text"
                          placeholder="Enter your barangay"
                          value={formik.values.Barangay}
                          onIonInput={(e) => formik.setFieldValue("Barangay", e.detail.value!)}
                          onIonBlur={formik.handleBlur}
                        />
                      </IonItem>

                      {formik.touched.Barangay && formik.errors.Barangay && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.Barangay}</IonText>
                        </div>
                      )}
                    </div>

                    {/* Street */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Street Name / House No.</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.Street && formik.errors.Street ? "border-red-500" : "border-zinc-300"}`}>
                        <IonInput
                          type="text"
                          placeholder="Enter your street"
                          value={formik.values.Street}
                          onIonInput={(e) => formik.setFieldValue("Street", e.detail.value!)}
                          onIonBlur={formik.handleBlur}
                        />
                      </IonItem>

                      {formik.touched.Street && formik.errors.Street && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.Street}</IonText>
                        </div>
                      )}
                    </div>

                    {/* Zipcode */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">ZIP Code</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.Zipcode && formik.errors.Zipcode ? "border-red-500" : "border-zinc-300"}`}>
                        <IonInput
                          type="text"
                          placeholder="Enter your zipcode"
                          value={formik.values.Zipcode}
                          onIonInput={(e) => formik.setFieldValue("Zipcode", e.detail.value!)}
                          onIonBlur={formik.handleBlur}
                        />
                      </IonItem>

                      {formik.touched.Zipcode && formik.errors.Zipcode && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.Zipcode}</IonText>
                        </div>
                      )}
                    </div>

                    {/* Checkbox */}
                    <IonRow className="mt-2 flex items-center gap-2">
                      <IonCol size="auto">
                        {" "}
                        <IonCheckbox checked={formik.values.SameAsPermAddress} onIonChange={(e) => formik.setFieldValue("SameAsPermAddress", e.detail.checked)} />
                      </IonCol>
                      <IonCol size="auto" className="flex flex-col">
                        <IonLabel className="ml-3 font-semibold">Same as Permanent Address</IonLabel>
                        <IonLabel className="ml-3 text-zinc-400">Your permanent residency is the same as current.</IonLabel>
                      </IonCol>
                    </IonRow>
                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-1 gap-4">
                    <IonButton
                      onClick={() => router.push(ROUTES.OTP, "forward")}
                      expand="block"
                      type="submit"
                      fill="clear"
                      className="mt-2 text-xl w-full gap-2  rounded-3xl text-white font-semibold bg-primary flex items-center justify-center"
                    >
                      Create Account <IoMdArrowRoundBack size={20} className="text-white scale-x-[-1] ml-2" />
                    </IonButton>
                  </div>

                  {/* Success */}
                  {submitted && <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">Account created successfully!</div>}
                </Form>
              </FormikProvider>
            </div>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};
export default CreateAccount;
