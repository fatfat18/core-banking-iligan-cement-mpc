import { IonButton, IonContent, IonInput, useIonRouter, IonLabel, IonPage, IonCol, IonImg, IonRow, IonCard, IonCardContent } from "@ionic/react";
import { ROUTES } from "../../constants/routes";
import * as Yup from "yup";

import "./Home.css";
import { IoIosUnlock } from "react-icons/io";
import { IoChevronForwardOutline } from "react-icons/io5";

import { FaUserPlus } from "react-icons/fa6";
import { MdCardMembership } from "react-icons/md";

const LoginSchema = Yup.object().shape({
  username: Yup.string().min(3, "Too short").required("Username is required"),

  password: Yup.string().min(4, "Too short").required("Password is required"),
});

const Home: React.FC = () => {
  const router = useIonRouter();

  return (
    <IonPage>
      <IonContent className=" flex items-center justify-center relative ">
        <div className="h-full w-full absolute bg z-10"></div>

        <div className="w-full absolute flex flex-col items-center justify-center  pt-32 p-10 z-50">
          <IonRow className="h-20 gap-4 w-full flex justify-center items-center mb-10">
            <IonImg src="/assets/images/Onboarding/logo.png" className="h-20 w-20" />
            <IonLabel className="text-3xl font-bold text-primary">MEMPCO</IonLabel>
          </IonRow>

          <IonRow className="h-full w-full mt-4 flex flex-col text-primary text-center text-4xl font-semibold">
            <IonLabel>Welcome to</IonLabel>
            <IonLabel>Micro-Entrepreneurs MPC!</IonLabel>
          </IonRow>

          <IonRow className="h-full w-full text-center px-6  my-8 mb-12">
            <IonLabel className="text-xl text-zinc-500">Select an option below to access your MEMPCO services. </IonLabel>
          </IonRow>

          <div className="w-full flex flex-col gap-10">
            <IonRow className="h-full w-full m flex items-center justify-center gap-6">
              <IonCol size="12">
                <IonCard className="w-full rounded-3xl h-35 flex cursor-pointer  border border-white/30" onClick={() => router.push(ROUTES.LOGIN)}>
                  <div className="w-1/5 flex items-center justify-center">
                    <IoIosUnlock size={40} className="p-3 rounded-2xl bg-linear-to-b from-primary to-rose-950 text-white" />
                  </div>
                  <div className="w-3/5 flex flex-col text-xl  justify-center">
                    <p className="font-semibold text-black text-2xl">Login</p>
                    <p>Access your account and tools.</p>
                  </div>
                  <div className="w-1/5 flex items-center justify-center">
                    <IoChevronForwardOutline size={20} className="text-zinc-400" />
                  </div>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow className="h-full w-full m flex items-center justify-center gap-6">
              <IonCol size="12">
                <IonCard className="w-full rounded-3xl h-35 flex cursor-pointer border border-white/30 backdrop-blur-sm bg-white/10" onClick={() => router.push(ROUTES.CREATE_ACCOUNT)}>
                  <div className="w-1/5 flex items-center justify-center">
                    <FaUserPlus size={40} className="p-3  rounded-2xl bg-white/30 text-primary scale-x-[-1]" />
                  </div>
                  <div className="w-3/5 flex flex-col text-xl  justify-center">
                    <p className="font-semibold text-black text-2xl">Create Account</p>
                    <p>Set up digital access for existing members. </p>
                  </div>
                  <div className="w-1/5 flex items-center justify-center">
                    <IoChevronForwardOutline size={20} className="text-zinc-400" />
                  </div>
                </IonCard>
              </IonCol>
            </IonRow>

            <IonRow className="h-full w-full m flex items-center justify-center gap-6">
              <IonCol size="12">
                <IonCard className="w-full rounded-3xl h-35 flex cursor-pointer border border-white/30 backdrop-blur-sm bg-white/10" onClick={() => router.push(ROUTES.APPLY_MEMBERSHIP)}>
                  <div className="w-1/5 flex items-center justify-center">
                    <MdCardMembership size={40} className="p-3 rounded-2xl bg-white/30 text-primary" />
                  </div>
                  <div className="w-3/5 flex flex-col text-xl  justify-center">
                    <p className="font-semibold text-black text-2xl">Apply Membership</p>
                    <p>Join our financial cooperative today.</p>
                  </div>
                  <div className="w-1/5 flex items-center justify-center">
                    <IoChevronForwardOutline size={20} className="text-zinc-400" />
                  </div>
                </IonCard>
              </IonCol>
            </IonRow>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
