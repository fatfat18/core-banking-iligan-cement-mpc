import { useState } from "react";
import { useFormik, FormikProvider, Form } from "formik";
import { IoMdArrowRoundBack } from "react-icons/io";
import * as Yup from "yup";
import { ROUTES } from "../../constants/routes";

import { IonPage, useIonRouter, IonContent, IonRow, IonCol, IonInput, IonText, IonSelect, IonSelectOption, IonButton, IonItem, IonHeader, IonDatetime } from "@ionic/react";

const validationSchema = Yup.object({
  preferredBranch: Yup.string().required("Preferred Branch is required"),

  membershipType: Yup.string().required("Membership Type is required"),

  firstName: Yup.string().required("First Name is required"),

  middleName: Yup.string(),

  lastName: Yup.string().required("Last Name is required"),

  dateOfBirth: Yup.string().required("Date of Birth is required"),

  civilStatus: Yup.string().required("Civil Status is required"),

  sex: Yup.string().required("Sex is required"),

  nationality: Yup.string().required("Nationality is required"),

  religion: Yup.string().required("Religion is required"),

  educationalAttainment: Yup.string().required("Educational Attainment is required"),
});

const PersonalAndMembership: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const router = useIonRouter();

  const formik = useFormik({
    initialValues: {
      preferredBranch: "",
      membershipType: "",

      firstName: "",
      middleName: "",
      lastName: "",

      dateOfBirth: "",

      civilStatus: "",

      sex: "",

      nationality: "",

      religion: "",

      educationalAttainment: "",
    },

    validationSchema,

    onSubmit: async (values) => {
      console.log(values);

      setSubmitted(true);

      router.push(ROUTES.OTP, "forward");
    },
  });

  return (
    <IonPage>
      <IonHeader className="shadow-none! pb-5 bg-zinc-50 text-primary">
        <IonRow>
          <IonCol size="2" className="flex items-center justify-center gap-4">
            <IoMdArrowRoundBack size={20} onClick={() => router.push(ROUTES.HOME, "back")} className="cursor-pointer" />
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
                <div className="w-max pr-4">Step 1 of 5</div>

                <div className="h-2 w-3/4 bg-zinc-200 rounded-full mt-2">
                  <div className="h-2 w-1/5 bg-primary rounded-full"></div>
                </div>
              </div>

              {/* Header */}
              <div className="mb-2 text-primary font-semibold text-3xl">Personal & Membership</div>

              <div className="text-zinc-400 mb-6">Provide your personal and membership information.</div>

              <FormikProvider value={formik}>
                <Form onSubmit={formik.handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div className=" font-semibold ">Membership</div>
                    {/* Preferred Branch */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Preferred Branch</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.preferredBranch && formik.errors.preferredBranch ? "border-red-500" : "border-zinc-300"}`}>
                        <IonInput
                          name="preferredBranch"
                          placeholder="Enter preferred branch"
                          value={formik.values.preferredBranch}
                          onIonInput={(e) => formik.setFieldValue("preferredBranch", e.detail.value!)}
                          onIonBlur={() => formik.setFieldTouched("preferredBranch", true)}
                        />
                      </IonItem>

                      {formik.touched.preferredBranch && formik.errors.preferredBranch && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.preferredBranch}</IonText>
                        </div>
                      )}
                    </div>

                    {/* Membership Type */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Membership Type</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.membershipType && formik.errors.membershipType ? "border-red-500" : "border-zinc-300"}`}>
                        <IonSelect
                          placeholder="Select membership type"
                          value={formik.values.membershipType}
                          onIonChange={(e) => formik.setFieldValue("membershipType", e.detail.value)}
                          onIonBlur={() => formik.setFieldTouched("membershipType", true)}
                        >
                          <IonSelectOption value="Regular">Regular</IonSelectOption>

                          <IonSelectOption value="Associate">Associate</IonSelectOption>

                          <IonSelectOption value="Corporate">Corporate</IonSelectOption>
                        </IonSelect>
                      </IonItem>

                      {formik.touched.membershipType && formik.errors.membershipType && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.membershipType}</IonText>
                        </div>
                      )}
                    </div>

                    <div className=" font-semibold ">Personal</div>

                    {/* First Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">First Name</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.firstName && formik.errors.firstName ? "border-red-500" : "border-zinc-300"}`}>
                        <IonInput
                          name="firstName"
                          placeholder="Enter first name"
                          value={formik.values.firstName}
                          onIonInput={(e) => formik.setFieldValue("firstName", e.detail.value!)}
                          onIonBlur={() => formik.setFieldTouched("firstName", true)}
                        />
                      </IonItem>

                      {formik.touched.firstName && formik.errors.firstName && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.firstName}</IonText>
                        </div>
                      )}
                    </div>

                    {/* Middle Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Middle Name</label>

                      <IonItem lines="none" className="rounded-xl border mt-2 bg-white border-zinc-300">
                        <IonInput
                          name="middleName"
                          placeholder="Enter middle name"
                          value={formik.values.middleName}
                          onIonInput={(e) => formik.setFieldValue("middleName", e.detail.value!)}
                          onIonBlur={() => formik.setFieldTouched("middleName", true)}
                        />
                      </IonItem>
                    </div>

                    {/* Last Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Last Name</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.lastName && formik.errors.lastName ? "border-red-500" : "border-zinc-300"}`}>
                        <IonInput
                          name="lastName"
                          placeholder="Enter last name"
                          value={formik.values.lastName}
                          onIonInput={(e) => formik.setFieldValue("lastName", e.detail.value!)}
                          onIonBlur={() => formik.setFieldTouched("lastName", true)}
                        />
                      </IonItem>

                      {formik.touched.lastName && formik.errors.lastName && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.lastName}</IonText>
                        </div>
                      )}
                    </div>

                    {/* Date of Birth */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Date of Birth</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.dateOfBirth && formik.errors.dateOfBirth ? "border-red-500" : "border-zinc-300"}`}>
                        <IonDatetime presentation="date" value={formik.values.dateOfBirth} onIonChange={(e) => formik.setFieldValue("dateOfBirth", e.detail.value)} />
                      </IonItem>

                      {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.dateOfBirth}</IonText>
                        </div>
                      )}
                    </div>

                    {/* Civil Status */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Civil Status</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.civilStatus && formik.errors.civilStatus ? "border-red-500" : "border-zinc-300"}`}>
                        <IonSelect placeholder="Select civil status" value={formik.values.civilStatus} onIonChange={(e) => formik.setFieldValue("civilStatus", e.detail.value)}>
                          <IonSelectOption value="Single">Single</IonSelectOption>

                          <IonSelectOption value="Married">Married</IonSelectOption>

                          <IonSelectOption value="Widowed">Widowed</IonSelectOption>

                          <IonSelectOption value="Separated">Separated</IonSelectOption>
                        </IonSelect>
                      </IonItem>

                      {formik.touched.civilStatus && formik.errors.civilStatus && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.civilStatus}</IonText>
                        </div>
                      )}
                    </div>

                    {/* Sex */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Sex</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.sex && formik.errors.sex ? "border-red-500" : "border-zinc-300"}`}>
                        <IonSelect placeholder="Select sex" value={formik.values.sex} onIonChange={(e) => formik.setFieldValue("sex", e.detail.value)}>
                          <IonSelectOption value="Male">Male</IonSelectOption>

                          <IonSelectOption value="Female">Female</IonSelectOption>

                          <IonSelectOption value="Other">Other</IonSelectOption>
                        </IonSelect>
                      </IonItem>

                      {formik.touched.sex && formik.errors.sex && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.sex}</IonText>
                        </div>
                      )}
                    </div>

                    {/* Nationality */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Nationality</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.nationality && formik.errors.nationality ? "border-red-500" : "border-zinc-300"}`}>
                        <IonInput
                          name="nationality"
                          placeholder="Enter nationality"
                          value={formik.values.nationality}
                          onIonInput={(e) => formik.setFieldValue("nationality", e.detail.value!)}
                          onIonBlur={() => formik.setFieldTouched("nationality", true)}
                        />
                      </IonItem>

                      {formik.touched.nationality && formik.errors.nationality && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.nationality}</IonText>
                        </div>
                      )}
                    </div>

                    {/* Religion */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Religion</label>

                      <IonItem lines="none" className={`rounded-xl border mt-2 bg-white ${formik.touched.religion && formik.errors.religion ? "border-red-500" : "border-zinc-300"}`}>
                        <IonInput
                          name="religion"
                          placeholder="Enter religion"
                          value={formik.values.religion}
                          onIonInput={(e) => formik.setFieldValue("religion", e.detail.value!)}
                          onIonBlur={() => formik.setFieldTouched("religion", true)}
                        />
                      </IonItem>

                      {formik.touched.religion && formik.errors.religion && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.religion}</IonText>
                        </div>
                      )}
                    </div>

                    {/* Educational Attainment */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Educational Attainment</label>

                      <IonItem
                        lines="none"
                        className={`rounded-xl border mt-2 bg-white ${formik.touched.educationalAttainment && formik.errors.educationalAttainment ? "border-red-500" : "border-zinc-300"}`}
                      >
                        <IonSelect
                          placeholder="Select educational attainment"
                          value={formik.values.educationalAttainment}
                          onIonChange={(e) => formik.setFieldValue("educationalAttainment", e.detail.value)}
                        >
                          <IonSelectOption value="High School">High School</IonSelectOption>

                          <IonSelectOption value="Vocational">Vocational</IonSelectOption>

                          <IonSelectOption value="College">College</IonSelectOption>

                          <IonSelectOption value="Postgraduate">Postgraduate</IonSelectOption>
                        </IonSelect>
                      </IonItem>

                      {formik.touched.educationalAttainment && formik.errors.educationalAttainment && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.educationalAttainment}</IonText>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="grid grid-cols-1 gap-4">
                    <IonButton
                      onClick={() => router.push(ROUTES.CONTACT_AND_ADDRESS, "forward")}
                      expand="block"
                      type="submit"
                      fill="clear"
                      className="mt-2 text-xl w-full gap-2 rounded-3xl text-white font-semibold bg-primary flex items-center justify-center"
                    >
                      Next Step
                      <IoMdArrowRoundBack size={20} className="text-white scale-x-[-1] ml-2" />
                    </IonButton>
                  </div>

                  {/* Success */}
                  {submitted && <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">Form submitted successfully!</div>}
                </Form>
              </FormikProvider>
            </div>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default PersonalAndMembership;
