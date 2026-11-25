import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { IonPage, IonContent, IonButton, IonImg, IonLabel, IonHeader, IonCheckbox, useIonRouter } from "@ionic/react";
import { useEffect, useState } from "react";
import { ROUTES } from "../../constants/routes";
import type { Swiper as SwiperClass } from "swiper";

import { HiArrowSmRight } from "react-icons/hi";
import "./Onboarding.css";

import "swiper/css";
import "swiper/css/pagination";

const Onboarding: React.FC = () => {
  const router = useIonRouter();

  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const isLastSlide = activeIndex === (swiper?.slides?.length ?? 0) - 1;

  const handleNext = () => {
    if (!swiper) return;

    if (isLastSlide) {
      if (!isTermsAccepted) return;
      router.push(ROUTES.HOME, "forward", "replace");
      return;
    }

    swiper.slideNext();
  };

  const handleSkip = () => {
    if (!swiper) return;
    swiper.slideTo(swiper.slides.length - 1);
  };

  useEffect(() => {
    if (swiper) {
      const onSlideChange = () => setActiveIndex(swiper.activeIndex);
      swiper.on("slideChange", onSlideChange);
      return () => {
        swiper.off("slideChange", onSlideChange);
      };
    }
  }, [swiper]);

  return (
    <IonPage>
      <IonHeader className="shadow-none!">
        <div className="onboarding-header w-full flex justify-between px-4">
          <div className="h-full w-full flex items-center gap-3">
            <IonImg src="/assets2/ILIGAN-LOGO.png" className="onboarding-header-logo" />
            <IonLabel className="onboarding-header-brand text-primary">ICMPC</IonLabel>
          </div>
          <div className="h-full w-full flex items-center justify-end">
            <IonLabel className="onboarding-header-skip text-zinc-400 opacity-80" onClick={handleSkip}>
              Skip
            </IonLabel>
          </div>
        </div>
      </IonHeader>
      <IonContent fullscreen className="ion-padding bg-white">
        <div className="h-full w-full flex flex-col">
          <div className="flex-1 min-h-0 w-full">
            <Swiper onSwiper={setSwiper} modules={[Pagination]} slidesPerView={1} pagination={{ clickable: true }} className="w-full h-full">
              <SwiperSlide>
                <div className="onboarding-slide h-full flex flex-col text-center items-center justify-center text-white">
                  <img src="/assets2/ILIGAN-1.png" className="onboarding-slide-image w-full max-w-70" />

                  <IonLabel className="onboarding-slide-title leading-tight font-semibold text-primary">Built on Trust. Driven by Growth.</IonLabel>

                  <IonLabel className="onboarding-slide-description leading-6 font-medium text-zinc-500 max-w-md">
                    Welcome to <strong>Iligan Cement Multipurpose Cooperative (ICMPC)</strong>. Your dedicated partner in financial growth, stability, and community-driven success.
                  </IonLabel>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="onboarding-slide h-full flex flex-col text-center items-center justify-center text-white">
                  <img src="/assets2/ILIGAN-2.png" className="onboarding-slide-image w-full max-w-70" />

                  <IonLabel className="onboarding-slide-title leading-tight font-semibold text-primary">Grow Your Savings</IonLabel>

                  <IonLabel className="onboarding-slide-description leading-6 font-medium text-zinc-500 max-w-md">Build your wealth through regular savings and high yield deposits.</IonLabel>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="onboarding-slide h-full flex flex-col text-center items-center justify-center text-white">
                  <img src="/assets2/ILIGAN-3.png" className="onboarding-slide-image w-full max-w-70" />

                  <IonLabel className="onboarding-slide-title leading-tight font-semibold text-primary">Access Your Loans</IonLabel>

                  <IonLabel className="onboarding-slide-description leading-6 font-medium text-zinc-500 max-w-md">Quick application and fair rates designed for your needs.</IonLabel>
                </div>
              </SwiperSlide>

              <SwiperSlide className="flex items-center">
                <div className="onboarding-slide h-full flex flex-col text-center items-center justify-center text-white">
                  <img src="/assets2/ILIGAN-4.png" className="onboarding-slide-image w-full max-w-70" />

                  <IonLabel className="onboarding-slide-title leading-tight font-semibold text-primary">Ready to Explore?</IonLabel>

                  <IonLabel className="onboarding-slide-description leading-6 font-medium text-zinc-500 max-w-md">Your journey to financial growth starts here. Welcome to Iligan Cement MPC!</IonLabel>

                  <div className="flex pt-1 gap-3 items-start px-2">
                    <IonCheckbox checked={isTermsAccepted} onIonChange={(e: CustomEvent<{ checked: boolean }>) => setIsTermsAccepted(e.detail.checked)} color="primary" class="pt-1 h-6 w-6" />
                    <IonLabel className="onboarding-slide-description text-zinc-500 text-left">
                      I agree to the <strong className="underline text-slate-800">Terms & Condition and Privacy Policy</strong>
                    </IonLabel>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="flex gap-2 pb-2">
            <IonButton
              onClick={handleNext}
              disabled={isLastSlide && !isTermsAccepted}
              expand="block"
              fill="clear"
              className="onboarding-next-btn mt-2 w-full gap-2 rounded-3xl text-white font-semibold bg-primary flex items-center justify-center">
              {isLastSlide ? "Get Started" : "Next"} <HiArrowSmRight className="h-8 w-8 scale-x-90" />
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Onboarding;
