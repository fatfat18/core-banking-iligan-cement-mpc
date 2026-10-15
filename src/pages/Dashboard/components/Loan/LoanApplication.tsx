import React, { useRef, useState, useEffect } from "react";
import { IonContent, IonPage, IonHeader, isPlatform, IonToolbar, IonGrid, IonRow, IonCol, IonIcon, useIonRouter } from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { IoMdArrowRoundBack } from "react-icons/io";

import LoanDetails from "./LoanDetails";
import Verification from "./Verification";
import ReviewAndConfirm from "./ReviewAndConfirm";
import OTP from "./OTP";
import ApplicationSubmitted from "./ApplicationSubmitted";
import { ROUTES } from "../../../../constants/routes";

const LoanApplication: React.FC = () => {
  const router = useIonRouter();
  const swiperRef = useRef<SwiperType | null>(null);
  const contentRef = useRef<HTMLIonContentElement | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const isPlatformIos = isPlatform("ios") || isPlatform("ipad") || isPlatform("iphone");

  useEffect(() => {
    // Force scroll to top when slide changes, especially for the success screen
    contentRef.current?.scrollToTop(0);
  }, [activeStep]);

  const steps = [
    { title: "Loan Details", step: "01 / 04", progress: "w-1/4" },
    { title: "Verification", step: "02 / 04", progress: "w-2/4" },
    { title: "Review & Confirm", step: "03 / 04", progress: "w-3/4" },
    { title: "OTP Verification", step: "04 / 04", progress: "w-full" },
    { title: "Success", step: "", progress: "" },
  ];

  const nextStep = () => {
    swiperRef.current?.slideNext();
  };

  const prevStep = () => {
    if (activeStep === 0) {
      // Handle exit or back to dashboard
      router.push(ROUTES.DASHBOARD_LOAN, "back");
    } else {
      swiperRef.current?.slidePrev();
    }
  };

  const currentStepInfo = steps[activeStep] || steps[0];

  return (
    <IonPage>
      {activeStep < 4 && (
        <IonHeader className="ion-no-border bg-[#f5f5f5]">
          <IonToolbar className="[--background:#f5f5f5]  pt-12">
            <IonGrid fixed className="ion-no-padding mx-auto w-full max-w-md">
              {/* Header */}
              <IonRow className="mb-6 items-center">
                <IonCol size="auto">
                  <IoMdArrowRoundBack onClick={prevStep} size={20} className="ml-2 cursor-pointer text-primary" />
                </IonCol>
                <IonCol className="text-center">
                  <p className=" text-2xl font-bold text-[#930d07]">Loan Application</p>
                </IonCol>
              </IonRow>

              {/* Progress Bar */}
              {currentStepInfo.progress && (
                <div className="mb-6 h-1 w-full bg-neutral-200">
                  <div className={`h-full ${currentStepInfo.progress} bg-[#930d07] transition-all duration-300`} />
                </div>
              )}
            </IonGrid>
          </IonToolbar>
        </IonHeader>
      )}

      <IonContent ref={contentRef} className="[--background:#f5f5f5]">
        <Swiper
          autoHeight={true}
          allowTouchMove={false} // Disable swiping to force button-based navigation
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveStep(swiper.activeIndex)}
          className="w-full"
        >
          <SwiperSlide>
            <LoanDetails onNext={nextStep} />
          </SwiperSlide>
          <SwiperSlide>
            <Verification onNext={nextStep} />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewAndConfirm onNext={nextStep} />
          </SwiperSlide>
          <SwiperSlide>
            <OTP onNext={nextStep} />
          </SwiperSlide>
          <SwiperSlide>
            <ApplicationSubmitted />
          </SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
};

export default LoanApplication;
