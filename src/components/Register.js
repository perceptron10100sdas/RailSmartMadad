import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import logo from "../assets/images/registerlogo.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "./Loader";

const Register = () => {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phNo: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleRegister = async () => {
    if (
      !formData.username ||
      !formData.email ||
      !formData.phNo ||
      !formData.password
    ) {
      toast.error("Fill all the details");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        "https://skills-backend-r5yi.onrender.com/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      // console.log("data " + data);

      if (data.message === "Signed up successfully") {
        setLoading(false);
        toast.success(data.message);
        toast.success("Please check you email!");
        nav("/signin");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };


  // console.log(formData);

  return (
    <>
      {loading && <Loader />}
    
    <div
      id="register"
      className={
          loading
            ? "content blurred flex justify-center"
            : "content flex justify-center"
        }
      style={{ marginBottom: "150px" }}
    >
      <div id="signintext" className="registertext">
        <div id="signintextcontainer" style={{ padding: "0px 16px 10px 16px" }}>
          <div id="signintextheading">
            <span id="sub-heading" className="animate-pulse">
              रेल मदद में पंजीकरण करें
            </span>
            <span id="heading" className="heading">
              Register
            </span>
          </div>
          <div>
            <span className="text-sm text-black">
              Have already registered?{" "}
              <NavLink
                to="/signin"
                className="font-semibold"
                style={{ color: "#762626" }}
              >
                Log in
              </NavLink>
            </span>
          </div>
        </div>
        <div className="lg:hidden mt-4 mb-4">
          <img src={logo} alt="logo" />
        </div>
        
        <form id="signininput">
          <div>
            <input
              className="white-placeholder"
              name="username"
              type="text"
              placeholder="Full Name"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-wrap justify-between">
            <div
              id="register-inputs-div"
              className="full-length full-lengthitem1"
            >
              <input
                className="white-placeholder"
                name="email"
                type="email"
                placeholder="E - mail"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div id="register-inputs-div" className="full-length relative mt-3">
              <input
                className="white-placeholder"
                type={passwordVisible ? "text" : "password"}
                placeholder="Set a password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div id="register-inputs-div">
              <input
                className="white-placeholder"
                name="phNo"
                type="number"
                placeholder="Phone Number"
                value={formData.phNo}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </form>

        <div className="flex lg:justify-end justify-between gap-4 mt-8">
          <NavLink
            to="/"
            className="flex items-center h-8 no-underline text-black border-black rounded border pl-4 pr-4 justify-center gap-1"
            style={{ width: "90px", fontSize: "12px", fontWeight: "550" }}
          >
            <GoArrowLeft />
            Back
          </NavLink>
          <NavLink
            className="flex items-center h-8 bg-[#762626] no-underline rounded border pt-1 pb-1 pl-4 pr-4 justify-center gap-1 text-white"
            style={{
              color: "#303030",
              border: "#303030",
              width: "145px",
              fontSize: "12px",
              fontWeight: "550",
            }}
            onClick={handleRegister}
          >
            Create Account
            <GoArrowRight />
          </NavLink>
        </div>
      </div>
      <div>
        <img src={logo} alt="logo" id="registerlogo" />
      </div>
    </div>
    </>
  );
};

export default Register;
