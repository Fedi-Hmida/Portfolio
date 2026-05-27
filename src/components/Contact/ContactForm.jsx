import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, Type, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const emailConfig = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
};

const ErrorMessage = ({ id, children }) => (
  <p id={id} className="mt-2 text-sm text-red-400">
    {children}
  </p>
);

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const [isSending, setIsSending] = useState(false);
  const messageValue = watch("message", "");

  const onSubmit = async (data) => {
    setIsSending(true);

    if (
      !emailConfig.serviceId ||
      !emailConfig.templateId ||
      !emailConfig.publicKey
    ) {
      toast.error(
        "Contact form is not configured yet. Please use email or LinkedIn.",
      );
      setIsSending(false);
      return;
    }

    const templateParams = {
      from_name: `${data.firstName} ${data.lastName}`,
      from_email: data.email,
      to_name: "Fedi HMIDA",
      subject: data.subject,
      message: data.message,
    };

    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey,
      );
      toast.success("Message sent successfully! I'll get back to you soon.");
      reset();
    } catch {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  const inputClasses = (error) => `
    w-full pl-10 pr-4 py-3 rounded-lg text-white placeholder-gray-500
    glass-input focus:outline-none focus:ring-2 focus:ring-primary-pink/40
    ${error ? "border-red-500 animate-shake" : "focus:border-primary-pink"}
  `;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="glass-card rounded-2xl p-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-pink/5 to-transparent" />

      <div className="relative z-10 mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-primary-pink to-pink-300 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-gray-400 mt-2">
          Send a role, internship, project brief, or technical question.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="sr-only">
              First name
            </label>
            <div className="relative">
              <User
                className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-pink"
                size={20}
                aria-hidden="true"
              />
              <input
                id="firstName"
                type="text"
                placeholder="First Name"
                {...register("firstName", { required: "First name is required" })}
                className={inputClasses(errors.firstName)}
                aria-invalid={errors.firstName ? "true" : "false"}
                aria-describedby={
                  errors.firstName ? "firstName-error" : undefined
                }
              />
            </div>
            {errors.firstName && (
              <ErrorMessage id="firstName-error">
                {errors.firstName.message}
              </ErrorMessage>
            )}
          </div>

          <div>
            <label htmlFor="lastName" className="sr-only">
              Last name
            </label>
            <div className="relative">
              <User
                className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-pink"
                size={20}
                aria-hidden="true"
              />
              <input
                id="lastName"
                type="text"
                placeholder="Last Name"
                {...register("lastName", { required: "Last name is required" })}
                className={inputClasses(errors.lastName)}
                aria-invalid={errors.lastName ? "true" : "false"}
                aria-describedby={errors.lastName ? "lastName-error" : undefined}
              />
            </div>
            {errors.lastName && (
              <ErrorMessage id="lastName-error">
                {errors.lastName.message}
              </ErrorMessage>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <div className="relative">
            <Mail
              className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-pink"
              size={20}
              aria-hidden="true"
            />
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              {...register("email", {
                required: "Email address is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
              className={inputClasses(errors.email)}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
          </div>
          {errors.email && (
            <ErrorMessage id="email-error">{errors.email.message}</ErrorMessage>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="sr-only">
            Subject
          </label>
          <div className="relative">
            <Type
              className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-pink"
              size={20}
              aria-hidden="true"
            />
            <input
              id="subject"
              type="text"
              placeholder="Subject"
              {...register("subject", { required: "Subject is required" })}
              className={inputClasses(errors.subject)}
              aria-invalid={errors.subject ? "true" : "false"}
              aria-describedby={errors.subject ? "subject-error" : undefined}
            />
          </div>
          {errors.subject && (
            <ErrorMessage id="subject-error">
              {errors.subject.message}
            </ErrorMessage>
          )}
        </div>

        <div>
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <div className="relative">
            <MessageSquare
              className="absolute left-3 top-4 text-primary-pink"
              size={20}
              aria-hidden="true"
            />
            <textarea
              id="message"
              placeholder="Your Message"
              {...register("message", {
                required: "Message is required",
                maxLength: {
                  value: 500,
                  message: "Message must be 500 characters or fewer",
                },
              })}
              rows="6"
              maxLength="500"
              className={`${inputClasses(errors.message)} resize-none`}
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={
                errors.message ? "message-error" : "message-count"
              }
            />
          </div>
          <div
            id="message-count"
            className="mt-2 text-right text-sm text-gray-400"
            aria-live="polite"
          >
            {messageValue.length}/500
          </div>
          {errors.message && (
            <ErrorMessage id="message-error">
              {errors.message.message}
            </ErrorMessage>
          )}
        </div>

        <motion.button
          type="submit"
          disabled={isSending}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-primary-pink text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary-pink/50 focus:ring-offset-2 focus:ring-offset-black"
        >
          {isSending ? (
            <>
              <div
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                aria-hidden="true"
              />
              Sending...
            </>
          ) : (
            <>
              <Send size={20} aria-hidden="true" />
              Send Message
            </>
          )}
        </motion.button>
      </form>
      <ToastContainer />
    </motion.div>
  );
};

export default ContactForm;
