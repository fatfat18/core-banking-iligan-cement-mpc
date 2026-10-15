import { IonButton, IonContent, IonImg, IonPage, IonItem, IonLabel, IonInput, IonText, IonRow, IonCol, IonCheckbox, useIonRouter } from "@ionic/react";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

import "./Login.css";
import { BiSolidEnvelope } from "react-icons/bi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IoMdLock } from "react-icons/io";
import { IoMdArrowRoundBack } from "react-icons/io";
import building from "../../../public/assets/images/Onboarding/building.png";
import { ROUTES } from "../../constants/routes";

const LoginSchema = Yup.object().shape({ email: Yup.string().email("Invalid email").required("Email is required"), password: Yup.string().min(4, "Too short").required("Password is required") });

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const router = useIonRouter();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    // validationSchema: LoginSchema,
    onSubmit: (values) => {
      handleGoToDashboard();
      // fake login
      // if (values.email === "admin@email.com" && values.password === "1234") {
      //   localStorage.setItem("auth", "true");
      //   router.push(ROUTES.HOME, "forward", "replace");
      // } else {
      //   alert("Invalid credentials");
      // }
    },
  });

  const handleGoToDashboard = () => {
    router.push(ROUTES.DASHBOARD_HOME, "forward", "replace");
  };

  return (
    <IonPage>
      <IonContent fullscreen className=" flex items-center justify-center  ">
        <div className="w-full h-full relative pt-20 z-50 bg-linear-to-r from-primary to-rose-950 ">
          <div className="p-4 absolute top-10 left-3">
            <IoMdArrowRoundBack className="text-white" size={20} onClick={() => router.push(ROUTES.HOME, "back")} />
          </div>
          <div className="w-full h-1/4 flex relative overflow-hidden z-20! ">
            <div className="h-full font-semibold text-white  text-4xl w-full translate-y-10 p-10 flex flex-col items-start justify-center z-20">
              <IonText>Helping People,</IonText>
              <IonText>Help Themselves.</IonText>
            </div>
            <div className="h-full w-max absolute z-10 bottom-5 -right-12 ">
              <img src={building} className="opacity-50 h-90 " />
            </div>
          </div>

          <div className="w-full h-3/4 z-50! p-10 bg-white rounded-t-4xl ">
            <div className="h-20 mt-4  gap-4 w-full flex justify-star items-center mb-10">
              <IonImg src="/assets/images/Onboarding/logo.png" className="h-20 w-20" />
              <IonLabel className="text-4xl font-bold text-primary">MEMPCO</IonLabel>
            </div>
            <IonRow className="font-semibold text-2xl mb-2">Member Login</IonRow>
            <IonRow className="text-xl mb-4">Please enter your credentials to access your account.</IonRow>
            <FormikProvider value={formik}>
              <Form>
                <IonLabel>Email</IonLabel>
                <IonItem className={`rounded-xl mt-2 border bg-white ${formik.touched.email && formik.errors.email ? "border-red-500" : "border-zinc-300"}`} lines="none">
                  {/* Left Icon */}
                  <BiSolidEnvelope size={28} className="text-primary" />

                  <IonInput
                    onKeyUp={(e: any) => {
                      if (e.key === "Enter") {
                        formik.handleSubmit();
                      }
                    }}
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onIonBlur={formik.handleBlur}
                    onIonChange={(e) => formik.setFieldValue("email", e.detail.value)}
                    // required
                    placeholder="eg. juandelacruz@gmail.com"
                    style={{ "--padding-start": "8px", "--padding-end": "8px", "--padding-top": "1.5rem", "--padding-bottom": "1.5rem" }}
                  />

                  {/* Right Icon */}
                  {/* {!formik.errors.email && formik.values.email && <IonIcon icon={checkmarkCircleOutline} slot="end" className="text-green-500" />} */}
                </IonItem>
                <div className="mt-1 mb-6">
                  {" "}
                  <IonText color="danger">{formik.errors.email}</IonText>
                </div>
                {/* Password */}
                <IonLabel>Password</IonLabel>
                <IonItem className={`rounded-xl border mt-2 bg-white ${formik.touched.password && formik.errors.password ? "border-red-500" : "border-zinc-300"}`} lines="none">
                  {/* Left Icon */}
                  <IoMdLock size={28} className="text-primary" />
                  <IonInput
                    onKeyUp={(e: any) => {
                      if (e.key === "Enter") {
                        formik.handleSubmit();
                      }
                    }}
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formik.values.password}
                    onIonBlur={formik.handleBlur}
                    onIonChange={(e) => formik.setFieldValue("password", e.detail.value)}
                    // required
                    placeholder="*************"
                    style={{ "--padding-start": "8px", "--padding-end": "8px", "--padding-top": "1.5rem", "--padding-bottom": "1.5rem" }}
                  />
                  {/* Right Icon */}
                  {showPassword ? (
                    <AiOutlineEyeInvisible size={28} className="text-zinc-500" onClick={() => setShowPassword(!showPassword)} />
                  ) : (
                    <AiOutlineEye size={28} className="text-zinc-500" onClick={() => setShowPassword(!showPassword)} />
                  )}
                </IonItem>
                <div className="mt-1 mb-3">
                  {" "}
                  <IonText color="danger">{formik.errors.password}</IonText>
                </div>

                <IonRow>
                  <IonCol className="flex  items-center ">
                    <IonCheckbox className="flex items-center justify-center" color="danger" class=" h-8 w-8" />
                    <IonLabel className="text-zinc-500 flex items-center justify-center">Remember Me?</IonLabel>
                  </IonCol>
                  <IonCol className="flex items-center justify-end gap-2">
                    <IonLabel className=" text-primary cursor-pointer" onClick={() => history.push(ROUTES.FORGOT_PASSWORD)}>
                      Forgot Password?
                    </IonLabel>
                  </IonCol>
                </IonRow>
                {/* Submit */}
                <IonButton expand="block" fill="clear" type="submit" className="mt-6 text-xl py-2 rounded-2xl font-semibold bg-primary text-white ">
                  Log in
                </IonButton>
              </Form>
            </FormikProvider>

            <div className="w-full text-center mt-10 flex flex-col  ">
              <IonText className="text-zinc-500 font-semibold text-center w-full py-4 border-y border-primary/10 ">Apply for a Membership</IonText>

              <IonText className="text-zinc-400 text-center w-full py-4 ">Create Account Online</IonText>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
