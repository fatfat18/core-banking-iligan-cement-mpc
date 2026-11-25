import { IonButton, IonContent, IonImg, IonPage, IonItem, IonLabel, IonInput, IonText, IonRow, IonCol, IonCheckbox, IonSpinner, useIonRouter } from "@ionic/react";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

import "./Login.css";
import { BiSolidEnvelope } from "react-icons/bi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IoMdLock } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import { ROUTES } from "../../constants/routes";
import axios from "../../axios-interceptor.ts";

const LoginSchema = Yup.object().shape({ email: Yup.string().email("Invalid email").required("Email is required"), password: Yup.string().min(4, "Too short").required("Password is required") });
const LOGIN_API_URL = "https://stage-mmc.innoviders.com/api/login";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const router = useIonRouter();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: LoginSchema,
    onSubmit: async (values, { setSubmitting, setStatus }) => {
      setStatus(undefined);

      try {
        const response = await axios.post(LOGIN_API_URL, { email: values.email.trim(), password: values.password });

        const data = response.data;

        localStorage.setItem("auth", "true");

        if (typeof data?.token === "string") {
          localStorage.setItem("token", data.token);
          localStorage.setItem("authToken", data.token);
        }

        router.push(ROUTES.DASHBOARD_HOME, "forward", "replace");
      } catch (error) {
        const message =
          typeof (error as { response?: { data?: { message?: string } } })?.response?.data?.message === "string"
            ? (error as { response: { data: { message: string } } }).response.data.message
            : error instanceof Error
              ? error.message
              : "Unable to connect to the server.";
        setStatus({ error: message });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <IonPage>
      <IonContent fullscreen className="flex items-center justify-center">
        <div className="w-full h-full relative pt-12 z-50 bg-linear-to-r from-primary to-primary-dark">
          <div className="p-3 absolute top-7 left-2">
            <IoMdArrowRoundBack className="text-white" size={18} onClick={() => router.push(ROUTES.HOME, "back")} />
          </div>
          <div className="w-full h-[23%] flex relative overflow-hidden z-20!">
            <div className="h-full font-semibold text-white text-2xl w-full translate-y-5 px-7 py-4 flex flex-col items-start justify-center z-20">
              <IonText>Helping People,</IonText>
              <IonText>Help Themselves.</IonText>
            </div>
            {/* <div className="h-full w-max absolute z-10 bottom-5 -right-12 ">
              <img src={building} className="opacity-50 h-90 " />
            </div> */}
          </div>

          <div className="w-full h-[77%] z-50! px-6 pt-6 pb-5 bg-white rounded-t-4xl">
            <div className="h-14 mt-2 gap-3 w-full flex justify-star items-center mb-5">
              <IonImg src="/assets/images/Onboarding/logo.png" className="h-12 w-12" />
              <IonLabel className="text-2xl font-bold text-primary">ICMPC</IonLabel>
            </div>
            <IonRow className="font-semibold text-lg mb-1">Member Login</IonRow>
            <IonRow className="text-sm text-zinc-600 mb-3">Please enter your credentials to access your account.</IonRow>
            {formik.status?.error && (
              <IonRow className="mb-3">
                <IonText color="danger" className="text-sm">
                  {formik.status.error}
                </IonText>
              </IonRow>
            )}
            <FormikProvider value={formik}>
              <Form>
                <IonLabel className="text-sm font-medium">Email</IonLabel>
                <IonItem className={`rounded-xl mt-2 border bg-white ${formik.touched.email && formik.errors.email ? "border-red-500" : "border-zinc-300"}`} lines="none">
                  {/* Left Icon */}
                  <BiSolidEnvelope size={20} className="text-primary" />

                  <IonInput
                    onKeyUp={(e: KeyboardEvent) => {
                      if (e.key === "Enter") {
                        formik.handleSubmit();
                      }
                    }}
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onIonBlur={formik.handleBlur}
                    onIonChange={(e: CustomEvent<{ value: string | null }>) => formik.setFieldValue("email", e.detail.value ?? "")}
                    // required
                    placeholder="eg. juandelacruz@gmail.com"
                    style={{ "--padding-start": "8px", "--padding-end": "8px", "--padding-top": "0.85rem", "--padding-bottom": "0.85rem", fontSize: "0.95rem" }}
                  />

                  {/* Right Icon */}
                  {/* {!formik.errors.email && formik.values.email && <IonIcon icon={checkmarkCircleOutline} slot="end" className="text-green-500" />} */}
                </IonItem>
                <div className="mt-1 mb-4 min-h-5">
                  {" "}
                  <IonText color="danger" className="text-xs">
                    {formik.errors.email}
                  </IonText>
                </div>
                {/* Password */}
                <IonLabel className="text-sm font-medium">Password</IonLabel>
                <IonItem className={`rounded-xl border mt-2 bg-white ${formik.touched.password && formik.errors.password ? "border-red-500" : "border-zinc-300"}`} lines="none">
                  {/* Left Icon */}
                  <IoMdLock size={20} className="text-primary" />
                  <IonInput
                    onKeyUp={(e: KeyboardEvent) => {
                      if (e.key === "Enter") {
                        formik.handleSubmit();
                      }
                    }}
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formik.values.password}
                    onIonBlur={formik.handleBlur}
                    onIonChange={(e: CustomEvent<{ value: string | null }>) => formik.setFieldValue("password", e.detail.value ?? "")}
                    // required
                    placeholder="*************"
                    style={{ "--padding-start": "8px", "--padding-end": "8px", "--padding-top": "0.85rem", "--padding-bottom": "0.85rem", fontSize: "0.95rem" }}
                  />
                  {/* Right Icon */}
                  {showPassword ? (
                    <AiOutlineEyeInvisible size={20} className="text-zinc-500" onClick={() => setShowPassword(!showPassword)} />
                  ) : (
                    <AiOutlineEye size={20} className="text-zinc-500" onClick={() => setShowPassword(!showPassword)} />
                  )}
                </IonItem>
                <div className="mt-1 mb-2 min-h-5">
                  {" "}
                  <IonText color="danger" className="text-xs">
                    {formik.errors.password}
                  </IonText>
                </div>

                <IonRow>
                  <IonCol className="flex  items-center ">
                    <IonCheckbox className="flex items-center justify-center" color="primary" class="h-5 w-5" />
                    <IonLabel className="text-zinc-500 text-sm flex items-center justify-center">Remember Me?</IonLabel>
                  </IonCol>
                  <IonCol className="flex items-center justify-end gap-2">
                    <IonLabel className="text-primary text-sm cursor-pointer" onClick={() => router.push(ROUTES.FORGOT_PASSWORD)}>
                      Forgot Password?
                    </IonLabel>
                  </IonCol>
                </IonRow>
                {/* Submit */}
                <IonButton disabled={formik.isSubmitting} expand="block" fill="clear" type="submit" className="mt-4 text-base py-1 rounded-xl font-semibold bg-primary text-white">
                  {formik.isSubmitting ? <IonSpinner name="dots" color="light" /> : "Log in"}
                </IonButton>
              </Form>
            </FormikProvider>

            <div className="w-full text-center mt-6 flex flex-col">
              <IonText className="text-zinc-500 text-sm font-semibold text-center w-full py-3 border-y border-primary/10">Apply for a Membership</IonText>

              <IonText className="text-zinc-400 text-sm text-center w-full py-3">Create Account Online</IonText>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
