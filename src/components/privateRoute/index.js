import Error from "@/pages/404";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    // const router = useRouter();
    const { isLoggedIn } = useSelector((store) => store.login);
    console.log("isLoggedInnew", isLoggedIn);
    if (isLoggedIn) {
      return <WrappedComponent {...props} />;
      // router.push('/login');
    } else {
      return <Error />;
    }

    // If user is authenticated, render the wrapped component
  };

  return Wrapper;
};
