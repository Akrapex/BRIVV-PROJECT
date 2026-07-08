import { Suspense } from "react";
import Verriy from "./VerifyEmail";

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Verriy />
    </Suspense>
  );
}
