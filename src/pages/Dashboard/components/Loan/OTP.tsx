import React, { useRef, useState, useEffect } from "react";
import { IonButton, IonGrid, IonInput } from "@ionic/react";
import { useFormik, FormikProvider, Form } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({ otp: Yup.string().required("OTP is required").length(6, "OTP must be 6 digits") });

interface OTPProps {
  onNext?: () => void;
}

const OTP: React.FC<OTPProps> = ({ onNext }) => {
  // const isPlatformIos = isPlatform("ios") || isPlatform("ipad") || isPlatform("iphone");
  const [seconds, setSeconds] = useState(56);
  const inputRefs = useRef<(HTMLIonInputElement | null)[]>([]);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [seconds]);

  const formik = useFormik({
    initialValues: { otp: "" },
    validationSchema,
    onSubmit: (values) => {
      console.log("OTP Submitted:", values.otp);
    },
  });

  const handleOtpChange = async (value: string, index: number) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    const otpArray = formik.values.otp.split("").concat(["", "", "", "", "", ""]);
    otpArray[index] = numericValue;
    const newOtp = otpArray.slice(0, 6).join("");
    formik.setFieldValue("otp", newOtp);

    if (numericValue && index < 5) {
      await inputRefs.current[index + 1]?.setFocus();
    }
  };

  const handleKeyDown = async (e: any, index: number) => {
    const otpArray = formik.values.otp.split("");
    if (e.key === "Backspace" && !otpArray[index] && index > 0) {
      await inputRefs.current[index - 1]?.setFocus();
    }
  };

  return (
    <IonGrid fixed className=" h-full w-full  px-6 pb-12 pt-4">
      {/* Title Section */}

      <div className="mb-10 text-center px-2">
        <h2 className="text-2xl font-black tracking-tight text-[#930d07]">Verify Your Application</h2>
        <p className="mt-4 text-xs leading-relaxed text-neutral-500 max-w-[280px] mx-auto">
          We've sent a 6-digit OTP code to <span className="font-bold text-neutral-700">[*5752]</span> to securely submit your loan application.
        </p>
      </div>

      {/* OTP Form */}
      <FormikProvider value={formik}>
        <Form onSubmit={formik.handleSubmit}>
          <div className="mb-8">
            <div className="flex items-center justify-between gap-2 mb-6">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className={`h-14 w-full rounded-xl bg-white shadow-sm ring-1 flex items-center justify-center transition-all ${formik.values.otp[index] ? "ring-[#930d07]" : "ring-neutral-200"}`}>
                  <IonInput
                    ref={(el) => {
                      if (el) inputRefs.current[index] = el;
                    }}
                    type="tel"
                    inputmode="numeric"
                    maxlength={1}
                    value={formik.values.otp[index] || ""}
                    onIonInput={(e) => handleOtpChange(e.detail.value!, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="text-center text-xl font-bold text-neutral-800"
                  />
                </div>
              ))}
            </div>

            {/* Timer & Resend */}
            <div className="text-center">
              <p className="text-[11px] text-neutral-400">
                You can resend the code in <span className="font-bold">{seconds} seconds</span>
              </p>
              <button
                type="button"
                disabled={seconds > 0}
                className={`mt-1 text-[11px] font-bold underline transition-colors ${seconds > 0 ? "text-neutral-300 pointer-events-none" : "text-[#930d07]"}`}>
                Resend code
              </button>
            </div>
          </div>

          {/* Confirm Button */}
          <div className="space-y-4">
            <IonButton type="submit" expand="block" onClick={onNext} className="h-14 font-bold [--background:#930d07] [--border-radius:1rem] [--box-shadow:0_10px_20px_rgba(147,13,7,0.3)]">
              Verify
            </IonButton>
          </div>
        </Form>
      </FormikProvider>
    </IonGrid>
  );
};

export default OTP;
