import React, { useRef } from "react";
import { useForm } from "react-hook-form";

const StudentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { fullname: "", email: "", phone: "", password: "" },
  });

  console.log(errors);
  const onSubmit = (data) => console.log(data);

  return (
    <div style={{ backgroundColor: "#e2e0f4", height: "93vh" }} className="App">
      <div className="container py-5">
        <div className="card border-20 shadow w-75 p-4 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-3">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="fullname"
                placeholder="Enter Your Full Name"
                {...register("fullname", {
                  required: "please fill this field..",
                })}
              />
              <small className="form-text text-danger">
                {errors.fullname?.message}
              </small>
            </div>

            <div className="form-group mb-3">
              <label htmlFor="email">E-mail Address</label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Enter Your E-mail Address"
                {...register("email", { required: "please fill this field.." })}
              />
              
            </div>
            <div className="form-group mb-3">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Enter Your Phone Number"
                {...register("phone", { required: "please fill this field.." })}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter Your Password"
                {...register("password", {
                  required: "please fill this field..",
                  minLength: {
                    value: 6,
                    message: "Min Length should be 6 characters",
                  },
                })}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="state">Choose Your State</label>
              <select
                className="form-control"
                id="state"
                {...register("state", { required: "please fill this field.." })}
              >
                <option value="">--- Select Your State ---</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Assam">Assam</option>
                <option value="Delhi">Delhi</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Punjab">Punjab</option>
              </select>
            </div>


            <button type="submit" className="btn btn-primary">
              Create New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;

{/* <div className="form-group mb-3">
  <label htmlFor="gender" className="mr-4">
    Choose Your Gender
  </label>
  <div className="form-check form-check-inline mb-3">
    <input
      className="form-check-input"
      type="radio"
      id="male"
      value="male"
      {...register("gender", {
        required: "please fill this field..",
      })}
    />
    <label className="form-check-label" htmlFor="male">
      male
    </label>
  </div>
  <div className="form-check form-check-inline">
    <input
      className="form-check-input"
      type="radio"
      id="female"
      value="female"
      name="gender"
      {...register("gender", {
        required: "please fill this field..",
      })}
    />
    <label className="form-check-label" htmlFor="female">
      female
    </label>
  </div>
  <div className="form-check form-check-inline">
    <input
      className="form-check-input"
      type="radio"
      id="other"
      value="other"
      name="gender"
      {...register("gender", {
        required: "please fill this field..",
      })}
    />
    <label className="form-check-label" htmlFor="other">
      other
    </label>
  </div>
</div> */}