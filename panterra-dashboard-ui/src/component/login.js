import { useState } from "react";
import panterraLogo from "../assests/panterra-logo.png";
import streamsLogo from "../assests/streamslogo.png";
import { useSnackbar } from "notistack";
import CallIcon from '@mui/icons-material/Call';
import "./login.css";

export function Login() {

  const { enqueueSnackbar } = useSnackbar();

  const [data, setData] = useState({   
    username:"",
    password:"",
  });

function updatingData(e){
setData({...data,[e.target.name]:e.target.value})
}

function loginUser(userData){
  if (userData.username === "") {
    enqueueSnackbar("Username is a required field",{ variant: "warning" });
  } else if (userData.password === "") {
    enqueueSnackbar("Password is a required field",{ variant: "warning" });
  } else{
    localStorage.setItem("userData",JSON.stringify(userData));
    enqueueSnackbar("Logged in successfully", { variant: "success" });
  }
}

  return (
    <>
      <div className="admin-dashboard-body">
      <header>
        <div className="header">
          <img src={panterraLogo} className="panterra-logo" />
          <img src={streamsLogo} className="stream-logo" />
        </div>
        <hr className="gray-line" />
      </header>
      <h2>Welcome to the Admin Dashboard</h2>
      <div className="dashboard-container">
      <div className="login-form-container">
          <div className="login-form">
            <h2 className="title">Login</h2>
            <input
              id="username"
              className="input-field"
              type="text"
              name="username"
              placeholder="username"
              value={data.username}
              required
              onChange={updatingData}
            />
            <input
              id="password"
              className="input-field"
              value={data.password}
              name="password"
              type="password"
              placeholder="password"
              required
              onChange={updatingData}
            />
            <div className="sub-text">
              <div className="remember-me">
                <input type="checkbox" className="remember-check-box" />
                <label>Remember me</label>
              </div>
              <a href="#" className="forget-password">
                Forget password?
              </a>
            </div>
            <button className="button" onClick={()=>loginUser(data)}>SIGN IN</button>
          </div>
        </div>
        <div className="dashboard-text">
          <h4>Streams Admin Dashboard Key features include:</h4>
          <ul className="list-items">
            <li>Browser-based user and account level administartion</li>
            <li>Single login admin for all communications services</li>
            <li>Manage all users from anywhere in the world</li>
            <li>Customize features for each user at any time</li>
          </ul>
        </div>
       
      </div>
      </div>
      <footer>
        <div className="footer">
          <div className="policies">
            <div>@2023 Panterra Networks, Inc.</div>
            <div>Copyright Policy</div>
            <div>Privacy Policy</div>
          </div>
          <div className="contact">
          <CallIcon/>
            <div>REACH US AT:(800) 805-0558 or +1(408) 701-2200</div>
          </div>
        </div>
      </footer>
    </>
  );
}
