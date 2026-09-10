import NotFoundPage from "./src/components/pages/notFoundPage/notFoundPage";
import { Suspense } from "react";

export default function NotFound() {
  return (
    <Suspense fallback={null}>
      <NotFoundPage />
    </Suspense>
  );
}
