import React from "react";
import { IonButton, IonCol, IonGrid, IonIcon, IonRow, isPlatform, useIonRouter, IonHeader } from "@ionic/react";
import { checkmarkCircle, calendarOutline, notificationsOutline, shieldCheckmarkOutline, informationCircleOutline } from "ionicons/icons";
import { ROUTES } from "../../../../constants/routes";

import { RiVerifiedBadgeFill } from "react-icons/ri";

const ApplicationSubmitted: React.FC = () => {
  const isPlatformIos = isPlatform("ios") || isPlatform("ipad") || isPlatform("iphone");
  const router = useIonRouter();

  const TimelineItem: React.FC<{
    title: string;
    description: string;
    status: string;
    statusColor: string;
    isLast?: boolean;
    isActive?: boolean;
  }> = ({ title, description, status, statusColor, isLast, isActive }) => (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className={`h-2.5 w-2.5 rounded-full ${isActive ? "bg-[#930d07]" : "bg-neutral-300"}`} />
        {!isLast && <div className={`w-0.5 grow ${isActive ? "bg-[#930d07]" : "bg-neutral-200"}`} />}
      </div>
      <div className="pb-6">
        <div className="flex items-center justify-between gap-4">
          <h4 className={`text-xs font-bold ${isActive ? "text-neutral-800" : "text-neutral-400"}`}>{title}</h4>
          <span className={`rounded-full px-2 py-0.5 text-[8px] font-black uppercase tracking-wider ${statusColor}`}>{status}</span>
        </div>
        <p className="mt-1 text-[10px] leading-relaxed text-neutral-400">{description}</p>
      </div>
    </div>
  );

  return (
    <IonGrid fixed className="ion-padding w-full h-max px-6 pb-12 pt-10 text-center">
      {isPlatformIos && <IonHeader></IonHeader>}
      {/* Success Icon */}
      <div className="mb-6 flex justify-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#930d07] text-white shadow-xl shadow-red-900/20">
          <RiVerifiedBadgeFill size={40} />
        </div>
      </div>

      {/* Title */}
      <div className="mb-8">
        <h2 className="text-2xl font-black tracking-tight text-[#930d07]">Application Submitted</h2>
        <p className="mt-3 text-xs leading-relaxed text-neutral-500">Your loan application has been successfully received and is now being reviewed by our cooperative officers.</p>
      </div>

      {/* Reference Card */}
      <div className="mb-8 rounded-3xl bg-white p-6 text-left shadow-sm ring-1 ring-neutral-100">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">Loan Reference</p>
          <span className="rounded-full bg-neutral-50 px-3 py-1 text-[8px] font-bold text-neutral-400">NEW APPLICATION</span>
        </div>
        <h3 className="text-2xl font-black text-neutral-700">#L-2023-8842</h3>
        <div className="mt-4 flex items-center gap-2 text-neutral-400">
          <IonIcon icon={calendarOutline} className="text-xs" />
          <p className="text-[10px] font-medium">Submitted on April 30, 2026</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="mb-8 text-left">
        <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">Estimated Timeline</p>
        <div className="px-1">
          <TimelineItem title="Verification" description="Documents and identity verified successfully." status="NEW APPLICATION" statusColor="text-[#930d07]" isActive />
          <TimelineItem title="Review" description="Estimated 1-3 Business Days." status="IN PROGRESS" statusColor="bg-neutral-100 text-neutral-500" isActive />
          <TimelineItem title="Disbursement" description="Funds release via chosen account." status="PENDING" statusColor="bg-neutral-50 text-neutral-300" isLast />
        </div>
      </div>

      {/* What's Next Card */}
      <div className="relative mb-10 overflow-hidden rounded-3xl bg-neutral-100/50 p-6 text-left ring-1 ring-neutral-200/50">
        {/* Large Info Background Icon */}
        <IonIcon icon={informationCircleOutline} className="absolute -right-6 -top-6 text-[160px] text-neutral-200/40 opacity-50" />

        <h3 className="relative z-10 mb-6 text-sm font-black text-neutral-700">What's Next?</h3>

        <div className="relative z-10 space-y-6">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#930d07] shadow-sm">
              <IonIcon icon={notificationsOutline} className="text-xl" />
            </div>
            <p className="text-[11px] leading-relaxed text-neutral-500">We will notify you via SMS/Email once the review is complete.</p>
          </div>

          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#930d07] shadow-sm">
              <IonIcon icon={shieldCheckmarkOutline} className="text-xl" />
            </div>
            <p className="text-[11px] leading-relaxed text-neutral-500">You can track the status anytime for your Loan Application.</p>
          </div>
        </div>
      </div>

      {/* Footer Button */}
      <IonButton
        expand="block"
        onClick={() => router.push(ROUTES.DASHBOARD_LOAN, "back")}
        className="h-14 font-bold [--background:#930d07] [--border-radius:1rem] [--box-shadow:0_10px_20px_rgba(147,13,7,0.3)]"
      >
        Back to Home
      </IonButton>
    </IonGrid>
  );
};

export default ApplicationSubmitted;
