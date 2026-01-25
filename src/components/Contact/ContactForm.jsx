import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, Type, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const [isSending, setIsSending] = useState(false);
  const messageValue = watch("message", "");

  const onSubmit = async (data) => {
    setIsSending(true);

    const serviceID = "service_bl8wnom";
    const templateID = "template_zcdr7lh";
    const publicKey = "92zpmRJm5L2jY4o0k";

    const templateParams = {
      from_name: `${data.firstName} ${data.lastName}`,
      to_name: "Fedi Hmida",
      message: data.message,
      reply_to: data.email,
      subject: data.subject,
    };

    try {
      console.log("Sending email with params:", templateParams); // Debug log
      const response = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey,
      );
      console.log("SUCCESS!", response.status, response.text);
      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      reset();
    } catch (error) {
      console.error("FAILED...", error);
      toast.error(
        `Failed to send message: ${error.text || error.message || "Unknown error"}`,
        {
          position: "top-right",
          autoClose: 5000,
          theme: "dark",
        },
      );
    } finally {
      setIsSending(false);
    }
  };

  const inputClasses = (error) => `
    w-full pl-10 pr-4 py-3 rounded-lg outline-none text-white placeholder-gray-400
    glass-input
    ${error ? "border-red-500 animate-shake" : "focus:border-primary-pink"}
  `;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="glass-card p-8 rounded-2xl shadow-2xl relative overflow-hidden"
    >
      <ToastContainer />

      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary-pink rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="relative z-10 mb-8">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-pink to-secondary-pink">
          Let’s Connect
        </h2>
        <p className="text-gray-300 mt-2">
          Have a project in mind? We'd love to hear from you.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div className="relative">
            <User
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName", { required: true })}
              className={inputClasses(errors.firstName)}
            />
          </div>

          {/* Last Name */}
          <div className="relative">
            <User
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName", { required: true })}
              className={inputClasses(errors.lastName)}
            />
          </div>
        </div>

        {/* Email */}
        <div className="relative">
          <Mail
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="email"
            placeholder="Email Address"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            className={inputClasses(errors.email)}
          />
        </div>

        {/* Subject */}
        <div className="relative">
          <Type
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Subject"
            {...register("subject", { required: true })}
            className={inputClasses(errors.subject)}
          />
        </div>

        {/* Message */}
        <div className="relative">
          <MessageSquare
            className="absolute left-3 top-4 text-gray-400"
            size={18}
          />
          <textarea
            rows="5"
            placeholder="Your Message..."
            maxLength="500"
            {...register("message", { required: true })}
            className={`${inputClasses(errors.message)} pt-3`}
            style={{ resize: "none" }}
          ></textarea>
          <div className="absolute right-2 bottom-2 text-xs text-gray-400">
            {messageValue.length}/500
          </div>
        </div>

        <button
          type="submit"
          disabled={isSending}
          className="w-full py-4 rounded-lg bg-gradient-to-r from-primary-pink to-secondary-pink text-white font-bold text-lg shadow-lg hover:shadow-primary-pink/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
        >
          {isSending ? (
            <span className="flex items-center gap-2">
              <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
              Sending...
            </span>
          ) : (
            <>
              Send Message{" "}
              <Send
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
