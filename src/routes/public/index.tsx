import { BrowserRouter } from "react-router-dom";

// Serch app
import RecruitModule from "@/modules/recruit";

export default function PublicRouter() {
  return (
    <>
      <BrowserRouter>
        <RecruitModule />
      </BrowserRouter>
    </>
  );
}
