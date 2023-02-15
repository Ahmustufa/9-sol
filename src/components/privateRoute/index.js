import Error from "@/pages/404";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
export const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const { isLoggedIn } = useSelector((store) => store.login);

    if (isLoggedIn) {
      return <WrappedComponent {...props} />;
    } else {
      return <Error />;
    }
  };

  return Wrapper;
};
