import axios from "axios";
import React, { useState } from "react";
// import styles from "./contact.module.css";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  //   const [alertInfo, setAlertInfo] = useState({
  //     display: false,
  //     message: "",
  //     type: "",
  //   });

  //   // Shows alert message for form submission feedback
  //   const toggleAlert = (message, type) => {
  //     setAlertInfo({ display: true, message, type });

  //     // Hide alert after 5 seconds
  //     setTimeout(() => {
  //       setAlertInfo({ display: false, message: "", type: "" });
  //     }, 5000);
  //   };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Detect spams by checking honeypot field
    if (data.honeypot) {
      reset();
      // console.log("Spam email, discarding submission!");
      return;
    }

    // Destrcture data object
    const { fullName, email, subject, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      const templateParams = {
        name: fullName,
        email,
        subject,
        message,
      };

      // const response=await axios.post
      console.log(templateParams)
      const response = await axios.post(
        `${import.meta.env.VITE_HOSTURL}/user/contact`,
        templateParams
      );
      if (response.status === 200) {
        toast.success("Form Submitted successfully");
        // console.log("Response data success");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }

    } catch (e) {
      //   console.error(e);
      toast.error("Form submission failed");
    } finally {
      // Re-enable form submission
      setDisabled(false);
      // Reset contact form fields after submission
      reset();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-5 py-10 bg-background-color text-foreground-color">
      {/* Contact form */}
      <div className="relative w-full max-w-4xl md:px-6 py-8 mt-12 bg-foreground-color text-background-color rounded-3xl overflow-hidden">
        <h1 className="text-4xl text-center font-bold leading-tight gradient-text mb-8">
          Contact Us
        </h1>
        <form
          className="flex flex-col gap-6"
          id="contact-form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          disabled={disabled}
        >
          {/* Form Row 1 */}
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="fullName" className="text-lg font-semibold">
                Name
              </label>
              <input
                type="text"
                id="fullName"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                {...register("fullName", {
                  required: "Please enter your Full Name",
                  maxLength: {
                    value: 50,
                    message: "Please use 50 characters or less",
                  },
                })}
              />
              {errors.fullName && (
                <span className="text-sm text-red-500">
                  {errors.fullName.message}
                </span>
              )}
            </div>
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="email" className="text-lg font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                {...register("email", {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  Please enter a valid email address
                </span>
              )}
            </div>
          </div>

          {/* Form Row 2 */}
          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="text-lg font-semibold">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              {...register("subject", {
                required: "Please enter a subject",
                maxLength: {
                  value: 100,
                  message: "Subject cannot exceed 100 characters",
                },
              })}
            />
            {errors.subject && (
              <span className="text-sm text-red-500">
                {errors.subject.message}
              </span>
            )}
          </div>

          {/* Form Row 3 */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-lg font-semibold">
              Message
            </label>
            <textarea
              rows={5}
              id="message"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              {...register("message", { required: "Please enter a message" })}
            />
            {errors.message && (
              <span className="text-sm text-red-500">{errors.message}</span>
            )}
          </div>

          {/* Honeypot for spam detection */}
          <input
            type="text"
            id="honeypot"
            className="hidden"
            {...register("honeypot")}
          />

          <button
            type="submit"
            className="w-40 px-4 py-2 mx-auto text-lg font-medium text-white bg-orange-900 rounded-md disabled:opacity-50"
            disabled={disabled}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
