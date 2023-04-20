import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  if (router.pathname != "/login" && router.pathname != "/newRegister") {
    return (
      <div className="">
        {}
        <Header className="" />
        <main>{children}</main>
        <Footer className="sticky" />
      </div>
    );
  } else {
    return <main>{children}</main>;
  }
}
