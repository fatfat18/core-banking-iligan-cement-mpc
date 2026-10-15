import { useState } from "react";
import { useFormik, FormikProvider, Form } from "formik";
import { IoMdArrowRoundBack } from "react-icons/io";
import * as Yup from "yup";
import { ROUTES } from "../../../constants/routes";

import { IonPage, useIonRouter, IonContent, IonRow, IonCol, IonInput, IonText, IonButton, IonItem, IonHeader, IonIcon } from "@ionic/react";

import { eyeOutline, eyeOffOutline } from "ionicons/icons";

const validationSchema = Yup.object({
  password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),

  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Passwords do not match"),
});

const CreatePassword: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useIonRouter();

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },

    validationSchema,

    onSubmit: (values) => {
      console.log(values);
      setSubmitted(true);
    },
  });

  return (
    <IonPage>
      {/* Header */}
      <IonHeader className="shadow-none! pb-5 bg-zinc-50 text-primary">
        <IonRow>
          <IonCol size="2" className="flex items-center justify-center gap-4">
            <IoMdArrowRoundBack size={20} onClick={() => router.push(ROUTES.OTP, "back")} className="cursor-pointer" />
          </IonCol>

          <IonCol size="10" className="flex items-center">
            <IonText className="font-semibold text-2xl">Create an Account</IonText>
          </IonCol>
        </IonRow>
      </IonHeader>

      {/* Content */}
      <IonContent>
        <IonRow className="flex justify-center">
          <IonCol size="12" sizeMd="8" sizeLg="6">
            <div className="bg-zinc-50 p-10 pt-0 rounded-2xl min-h-screen">
              {/* Stepper */}
              <div className="py-4 w-full flex rounded-lg mb-4">
                <div className="w-max pr-4">Step 3 of 3</div>

                <div className="h-2 w-3/4 bg-zinc-200 rounded-full mt-2">
                  <div className="h-2 w-full bg-primary rounded-full"></div>
                </div>
              </div>

              {/* Title */}
              <div className="mb-2 text-primary font-semibold text-3xl">Secure Your Account</div>

              <div className="text-zinc-400 mb-6">Create a password for your account. Ensure it's strong and unique for enhanced security.</div>

              <FormikProvider value={formik}>
                <Form onSubmit={formik.handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    {/* Password */}
                    <div>
                      <label className="flex justify-between text-sm font-medium text-gray-700">
                        <span>Password</span>

                        <span className="text-red-500">Required</span>
                      </label>

                      <IonItem lines="none" className={`rounded-xl border-2 mt-2 bg-white ${formik.touched.password && formik.errors.password ? "border-red-500" : "border-zinc-300"}`}>
                        <IonInput
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter Password"
                          value={formik.values.password}
                          onIonInput={(e) => formik.setFieldValue("password", e.detail.value!)}
                          onIonBlur={() => formik.setFieldTouched("password", true)}
                        />

                        <IonIcon slot="end" icon={showPassword ? eyeOffOutline : eyeOutline} className="text-xl cursor-pointer text-zinc-500" onClick={() => setShowPassword(!showPassword)} />
                      </IonItem>

                      {formik.touched.password && formik.errors.password && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.password}</IonText>
                        </div>
                      )}
                    </div>

                    {/* Confirm Password */}
                    <div>
                      <label className="flex justify-between text-sm font-medium text-gray-700">
                        <span>Confirm Password</span>

                        <span className="text-red-500">Required</span>
                      </label>

                      <IonItem lines="none" className={`rounded-xl border-2 mt-2 bg-white ${formik.touched.confirmPassword && formik.errors.confirmPassword ? "border-red-500" : "border-zinc-300"}`}>
                        <IonInput
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm Password"
                          value={formik.values.confirmPassword}
                          onIonInput={(e) => formik.setFieldValue("confirmPassword", e.detail.value!)}
                          onIonBlur={() => formik.setFieldTouched("confirmPassword", true)}
                        />

                        <IonIcon
                          slot="end"
                          icon={showConfirmPassword ? eyeOffOutline : eyeOutline}
                          className="text-xl cursor-pointer text-zinc-500"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        />
                      </IonItem>

                      {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                        <div className="mt-1 mb-3">
                          <IonText color="danger">{formik.errors.confirmPassword}</IonText>
                        </div>
                      )}
                    </div>

                    {/* Password Rules */}
                    <div className="text-sm text-zinc-500 space-y-1">
                      <div>• Minimum 8 characters</div>

                      <div>• Use uppercase and lowercase letters</div>

                      <div>• Include numbers</div>

                      <div>• Include special characters</div>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="grid grid-cols-1 gap-4">
                    <IonButton
                      onClick={() => router.push(ROUTES.LOGIN, "forward")}
                      expand="block"
                      type="submit"
                      fill="clear"
                      className="mt-2 w-full text-xl gap-2  rounded-3xl text-white font-semibold bg-primary flex items-center justify-center"
                    >
                      Save Password
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

export default CreatePassword;
