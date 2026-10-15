import { useRef, useState } from "react";
import { useFormik, FormikProvider, Form } from "formik";
import * as Yup from "yup";
import { ROUTES } from "../../../constants/routes";

import { IoMdArrowRoundBack } from "react-icons/io";

import { IonPage, useIonRouter, IonContent, IonRow, IonCol, IonInput, IonText, IonButton, IonItem, IonHeader } from "@ionic/react";

const validationSchema = Yup.object({
  otp: Yup.string().required("OTP Code is required").length(6, "OTP must be 6 digits"),
});

export default function OTP() {
  const [submitted, setSubmitted] = useState(false);

  const router = useIonRouter();

  const inputRefs = useRef<(HTMLIonInputElement | null)[]>([]);

  const formik = useFormik({
    initialValues: {
      otp: "",
    },

    validationSchema,

    onSubmit: (values) => {
      console.log(values);
      setSubmitted(true);
    },
  });

  const handleOtpChange = async (value: string, index: number) => {
    // numbers only
    const numericValue = value.replace(/[^0-9]/g, "");

    const otpArray = formik.values.otp.split("").concat(["", "", "", "", "", ""]);

    otpArray[index] = numericValue;

    const newOtp = otpArray.slice(0, 6).join("");

    formik.setFieldValue("otp", newOtp);

    // auto next focus
    if (numericValue && index < 5) {
      await inputRefs.current[index + 1]?.setFocus();
    }
  };

  const handleKeyDown = async (e: any, index: number) => {
    const otpArray = formik.values.otp.split("");

    // backspace previous focus
    if (e.key === "Backspace" && !otpArray[index] && index > 0) {
      await inputRefs.current[index - 1]?.setFocus();
    }
  };

  return (
    <IonPage>
      {/* Header */}
      <IonHeader className="shadow-none! pb-5 bg-zinc-50 text-primary">
        <IonRow>
          <IonCol size="2" className="flex items-center justify-center">
            <IoMdArrowRoundBack size={20} onClick={() => router.push(ROUTES.CREATE_ACCOUNT, "back")} className="cursor-pointer" />
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
                <div className="w-max pr-4">Step 2 of 3</div>

                <div className="h-2 w-3/4 bg-zinc-200 rounded-full mt-2">
                  <div className="h-2 w-2/3 bg-primary rounded-full"></div>
                </div>
              </div>

              {/* Title */}
              <div className="mb-2 text-primary font-semibold text-3xl">Enter OTP Code</div>

              <div className="text-zinc-400 mb-6">We've sent a 6-digit OTP code to [*4099]. Please enter the code below to verify your account.</div>

              <FormikProvider value={formik}>
                <Form onSubmit={formik.handleSubmit} className="space-y-6">
                  {/* OTP INPUTS */}
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      {[...Array(6)].map((_, index) => (
                        <IonItem
                          key={index}
                          lines="none"
                          className={`w-full rounded-xl text-2xl border h-18 flex items-center justify-center bg-white ${formik.touched.otp && formik.errors.otp ? "border-red-500" : "border-zinc-300"}`}
                        >
                          <IonInput
                            ref={(el) => {
                              if (el) inputRefs.current[index] = el;
                            }}
                            type="tel"
                            inputmode="numeric"
                            maxlength={1}
                            className="text-center text-2xl"
                            value={formik.values.otp[index] || ""}
                            onIonInput={(e) => handleOtpChange(e.detail.value!, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            onIonBlur={() => formik.setFieldTouched("otp", true)}
                          />
                        </IonItem>
                      ))}
                    </div>

                    {/* Validation */}
                    {formik.touched.otp && formik.errors.otp && (
                      <div className="mt-1 mb-3">
                        <IonText color="danger">{formik.errors.otp}</IonText>
                      </div>
                    )}
                  </div>

                  {/* Timer */}
                  <IonRow className="text-zinc-500 text-center mt-2">
                    <IonCol>You can resend the code in 56 seconds.</IonCol>
                  </IonRow>

                  {/* Resend */}
                  <IonRow className="text-center">
                    <IonCol>
                      <button type="button" className="text-primary font-medium">
                        Resend Code
                      </button>
                    </IonCol>
                  </IonRow>

                  {/* Submit */}
                  <div className="grid grid-cols-1 gap-4">
                    <IonButton
                      onClick={() => router.push(ROUTES.CREATE_PASSWORD, "forward")}
                      expand="block"
                      type="submit"
                      fill="clear"
                      className="mt-2 w-full text-xl gap-2 tracking-wider rounded-3xl text-white font-semibold bg-primary flex items-center justify-center"
                    >
                      Verify OTP
                      <IoMdArrowRoundBack size={20} className="text-white scale-x-[-1] ml-2" />
                    </IonButton>
                  </div>

                  {/* Success */}
                  {submitted && <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">OTP verified successfully!</div>}
                </Form>
              </FormikProvider>
            </div>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
}
