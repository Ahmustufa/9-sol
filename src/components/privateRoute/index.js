import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

export const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const {isLoggedIn } = useSelector((store) => store.login);

    if (!isLoggedIn) {
      router.push('/login');
      return null;
    }

    // If user is authenticated, render the wrapped component
    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};