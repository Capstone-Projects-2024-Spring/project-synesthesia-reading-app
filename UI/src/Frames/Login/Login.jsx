import "./Login.css";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";

function Login({ loginSuccess }) {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => loginSuccess(tokenResponse),
  });
  const errorMessage = (error) => {
    console.log(error);
  };
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };
  return (
    <>
      <div className="bg-gray-200 flex flex-col items-center space-y-10 justify-center h-screen">
        <h1 className="text-3xl font-bold text-purple-500">Color in Sync</h1>
        <button
          className="bg-gray-100 p-2.5 rounded-md"
          onClick={() => login()}
        >
          Log in with Google
        </button>
      </div>
    </>
  );
}

export default Login;
