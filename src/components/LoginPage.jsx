import { useEffect } from "react";
import logo from "../assests/logo.png";
import microsoftLogo from "../assests/microsoft-logo.png";
import { config } from "../config/config";
import { nclient } from "../config/client";
import { useDispatch } from "react-redux";
import { set_profile } from "../redux/actions";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    try {
      // get token from url
      const url = window.location.href;
      const token = url.split("token=")[1];
      if (token) {
        // set token in local storage
        localStorage.setItem("token", token);
        nclient.get("student/profile", {
          headers: {
            Authorization: token,
            },
            }).then((res) => {
              dispatch(set_profile(res.data.user));
              navigate("/");
            });
        // redirect to home page
      }
    } catch (error) {
      
    }
  });

  const handleMicrosoftLogin = async () => {
    window.location.href = `${config.backendUrl}/auth/microsoft`;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-12 w-auto" src={logo} alt="Microsoft Logo" />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to submission portal
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div>
            <button
              className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleMicrosoftLogin}
            >
              <span className="sr-only">Sign in with Microsoft</span>
              <img className="h-5 w-5 mr-2" src={microsoftLogo} alt="" />
              Sign in with Microsoft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
