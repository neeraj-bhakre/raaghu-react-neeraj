import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Login.scss";
import { ServiceProxy } from "../../../../libs/shared/service-proxy";
import { getUserConfiguration } from "../../../../libs/public.api";
import { useNavigate } from "react-router-dom";
import RdsCompLogin from "../../../../../raaghu-components/src/rds-comp-login/rds-comp-login";
import { filter } from "lodash-es";
export interface LoginProps {
  onForgotPassword: (isForgotPasswordClicked?: boolean) => void;
}
const Login: React.FC<LoginProps> = (props: LoginProps) => {
  // const [accessToken , setaccessToken] = useState()
  // const dispatch: any = useAppDispatch();
  // const accessToken: any = useSelector(
  //   (state: RootState) => state.persistedReducer.login.accessToken
  // );
  const navigate = useNavigate();
  const proxy = new ServiceProxy();
  const hello = () => {
    var cred = localStorage.getItem("access_token");
    if (cred) {
      var pasrsedtoken = JSON.parse(cred);
      console.log("pasrsed", pasrsedtoken);
      console.log("cred", cred);
    }

    proxy.applicationConfiguration(undefined).then((result: any) => {
      console.log("hello this is result", result);
    });

    // proxy.languagesGET( undefined,undefined, undefined,  undefined,  undefined,  undefined, undefined, 1000).then((result:any)=>{console.log("langs",result)})
    if (cred != undefined) {
      getUserConfiguration("login");
      navigate("/dashboard");
    }
  };

  const loginHandler = (email: any, password: any) => {
    const requestBody = {
      grant_type: "password",
      username: email, // "admin",
      password: password, //"1q2w3E*"
      client_id: "raaghu",
      scope: "address email phone profile roles BookStore", 
    };
    fetch("https://raaghu-react.azurewebsites.net/connect/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(requestBody).toString(),
  })
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem("access_token", JSON.stringify(data.access_token));
      hello()
    });
  };
  const forgotPasswordHandler: any = (isForgotPasswordClicked: boolean) => {
    // navigate("/forgot-password");
    // props.onForgotPassword(isForgotPasswordClicked);
  };
  const { t } = useTranslation();
  return (
    <div className="login-background">
      <div className="align-items-center d-flex justify-content-center login m-auto"
        style={{ maxWidth: "900px", height: "100vh " }}>
        <div className="container-fluid m-2">
          <div className="bg-white row rounded-3 ">
            <div className="col-md-6">
              <div className="py-4 px-3">
                <div className="pb-4">
                  <div className="text-center">
                    <img src="./assets/raaghu_text_logo.svg"></img>
                  </div>
                </div>
                <RdsCompLogin
                  onLogin={loginHandler}
                  onForgotPassword={forgotPasswordHandler} />
              </div>
            </div>
            <div
              className="col-md-6 order-1 order-sm-2 rounded-end position-relative align-items-center p-0"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundColor: "#000",
                height: 524,
              }}>
              <video className="video position-relative" autoPlay muted loop style={{ width: 442, height: 524 }}>
                <source src="./assets/building_lights.mp4" type="video/mp4"></source>
              </video>
              <img className="position-absolute" style={{ zIndex: "3", backgroundSize: "cover", top: 240, left: 196, width: 50, height: 50, }} src="./assets/raaghu_icon.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
