import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { IonPage, IonContent, IonButton, IonImg, IonLabel, IonHeader, IonCheckbox, useIonRouter } from "@ionic/react";
import { useEffect, useRef, useState } from "react";
import { ROUTES } from "../../constants/routes";

import { HiArrowSmRight } from "react-icons/hi";
import "./Onboarding.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Onboarding: React.FC = () => {
  const swiperRef = useRef<any | null>(null);
  const router = useIonRouter();

  const [swiper, setSwiper] = useState<any>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    swiper.slideNext();

    if (activeIndex === swiper?.slides?.length - 1) {
      // reached last slide, you can do something here if needed
      router.push(ROUTES.HOME, "forward", "replace");
    }
  };

  const handleSkip = () => {
    swiper.slideTo(swiper.slides.length - 1);
  };

  useEffect(() => {
    if (swiper) {
      console.log(swiper);
      swiper.on("slideChange", () => {
        setActiveIndex(swiper.activeIndex);
      });
    }
  }, [swiper]);

  return (
    <IonPage>
      <IonHeader className="!shadow-none ">
        <div className="h-20 w-full flex justify-between px-6">
          <div className="h-full w-full flex items-center gap-4 ">
            <IonImg src="/assets/images/Onboarding/logo.png" className="h-14 w-14" />
            <IonLabel className="text-2xl font-bold text-primary">MEMPCO</IonLabel>
          </div>
          <div className="h-full w-full flex items-center justify-end ">
            <IonLabel className="font-semibold text-zinc-400 opacity-80" onClick={handleSkip}>
              Skip
            </IonLabel>
          </div>
        </div>
      </IonHeader>
      <IonContent fullscreen className="ion-padding bg-white">
        <div className="h-[75dvh]  w-full flexitems-center justify-center ">
          <Swiper
            ref={swiperRef}
            onSwiper={(swiper: any) => setSwiper(swiper)}
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            className="w-full h-full"
          >
            <SwiperSlide>
              <div className="h-[90%] flex flex-col gap-6 text-center items-center justify-center text-white ">
                <img src="/assets/images/Onboarding/1.png" className="h-max w-full floating" />

                <IonLabel className="text-4xl font-semibold text-primary">Helping people help themselves</IonLabel>

                <IonLabel className="text-xl font-medium text-zinc-500 mt-4 max-w-md">
                  Welcome to <strong>Micro-Entrepreneurs Multi-Purpose Cooperative (MEMPCO)</strong>. Your dedicated partner in financial growth, stability, and community drive success.{" "}
                </IonLabel>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[80%] flex flex-col gap-6 text-center items-center justify-center text-white ">
                <img src="/assets/images/Onboarding/2.png" className="h-max w-max scale-125 floating" />

                <IonLabel className="text-4xl font-semibold text-primary">Grow Your Savings</IonLabel>

                <IonLabel className="text-xl font-medium text-zinc-500 mt-4 max-w-md">Build your wealth through regular savings and high yield deposit. </IonLabel>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[80%] flex flex-col gap-6 text-center items-center justify-center text-white ">
                <img src="/assets/images/Onboarding/3.png" className="h-max w-max scale-150 floating" />

                <IonLabel className="text-4xl font-semibold text-primary">Access Your Loans</IonLabel>

                <IonLabel className="text-xl font-medium text-zinc-500 mt-4 max-w-md">Quick application and fair rates designed for your needs. </IonLabel>
              </div>
            </SwiperSlide>

            <SwiperSlide className="flex items-center">
              <div className="h-[80%] flex flex-col gap-6 text-center items-center justify-center text-white ">
                <img src="/assets/images/Onboarding/4.png" className="h-max w-96 scale-150 floating" />

                <IonLabel className="text-4xl font-semibold text-primary">Ready To Explore?</IonLabel>

                <IonLabel className="text-xl font-medium text-zinc-500 mt-4 max-w-md">Your journey to financial growth starts here. Welcome to Micro-Entrepreneurs MPC. </IonLabel>
              </div>
              <div className="flex pt-1  gap-4 items-start px-4">
                <IonCheckbox color="danger" class="pt-1 h-8 w-8" />
                <IonLabel className=" text-zinc-400 text-xl">
                  I agree to the <strong className="underline text-slate-800">Terms & Conditions and Privacy Policy</strong>.
                </IonLabel>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="flex gap-2">
          <IonButton onClick={handleNext} expand="block" fill="clear" className="mt-2 text-xl w-full gap-2 rounded-3xl text-white font-semibold bg-primary flex items-center justify-center">
            {activeIndex === swiper?.slides?.length - 1 ? "Get Started" : "Next"} <HiArrowSmRight className="h-8 w-8 scale-x-90" />
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Onboarding;
