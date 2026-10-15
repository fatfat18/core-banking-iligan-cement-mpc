import { IonContent, IonImg, IonPage, IonSpinner, IonText, useIonRouter } from "@ionic/react";
import { useEffect, useState } from "react";
import "./Splash.css";
import { ROUTES } from "../../constants/routes";

const Splash: React.FC = () => {
  const router = useIonRouter();
  const [currentFrame, setCurrentFrame] = useState(0);

  // useEffect(() => {
  //   const frameInterval = setInterval(() => {
  //     setCurrentFrame((prev) => (prev + 1) % 6);
  //   }, 200);

  //   return () => clearInterval(frameInterval);
  // }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(ROUTES.ONBOARDING, "forward", "replace");
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="h-full w-full flex flex-col items-center justify-center splash-container text-white">
          <div className="moveToCorner">
            <div className=" relative flex items-center justify-center h-80 w-80 mainlogo">
              <IonImg src="/assets/images/logo-animate/4.svg" className=" fade4 h-40 w-[132px] absolute translate-x-1 bottom-[21px]" />

              <IonImg src="/assets/images/logo-animate/1.svg" className=" fade1 h-40 w-[70px] -translate-x-1 absolute bottom-[9px] z-10" />
              <IonImg src="/assets/images/logo-animate/2.svg" className=" fade2 h-40 w-[101px] absolute bottom-[17px]  z-10" />
              <IonImg src="/assets/images/logo-animate/3.svg" className=" fade3 h-40 w-[107px] absolute bottom-[27px]  z-10" />

              <IonImg src="/assets/images/logo-animate/5.svg" className=" fade5 h-40 w-[140px] absolute bottom-[80px] z-20 " />
              <IonImg src="/assets/images/logo-animate/6.svg" className=" fade6 h-40 w-[110px] absolute bottom-[80px]  z-20" />

              <div className="mainlogo2 translate-x-[220px] text-7xl text-white font-semibold">MEMPCO</div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Splash;
