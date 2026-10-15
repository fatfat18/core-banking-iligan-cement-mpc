import { IonButton, IonContent, IonInput, IonItem, IonLabel, IonPage, IonText } from "@ionic/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword: React.FC = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleReset = () => {
    if (!email) {
      return;
    }

    // Demo flow only: replace with API call when backend is ready.
    setSubmitted(true);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div className="max-w-md mx-auto pt-16">
          <IonLabel className="text-3xl font-bold text-primary">Forgot Password</IonLabel>
          <IonText className="block text-zinc-600 mt-2">Enter your email and we will send password reset instructions.</IonText>

          <IonItem className="rounded-xl mt-6 border-2 bg-white border-zinc-300" lines="none">
            <IonInput
              type="email"
              value={email}
              onIonChange={(e) => setEmail(e.detail.value ?? "")}
              placeholder="eg. juandelacruz@gmail.com"
              style={{ "--padding-start": "8px", "--padding-end": "8px", "--padding-top": "1.25rem", "--padding-bottom": "1.25rem" }}
            />
          </IonItem>

          {submitted && <IonText className="block mt-3 text-green-700">If this email exists, reset instructions have been sent.</IonText>}

          <IonButton expand="block" className="mt-6" onClick={handleReset}>
            Send Reset Link
          </IonButton>

          <IonButton expand="block" fill="clear" className="mt-2" onClick={() => history.push("/login")}>
            Back to Login
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ForgotPassword;
