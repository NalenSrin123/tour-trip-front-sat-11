import React, { useState } from "react";
import { FiLock, FiMail } from "react-icons/fi";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    alert(`Reset link sent to ${email}`);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://img.magnific.com/premium-vector/angkor-wat-temple-vector-illustration-with-reflection_1639-63070.jpg?semt=ais_hybrid&w=740&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-white/45 backdrop-blur-[1px]" />
      <div className="relative z-10 w-full max-w-md">
        <div className="rounded-xl bg-white px-8 py-9 shadow-2xl sm:px-9">
          <div className="mb-4 flex justify-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-full text-blue-800">
              <FiLock className="text-[25px]" />
            </div>
          </div>
          <h1 className="text-center text-2xl font-bold text-slate-900">
            Forgot Password
          </h1>

          <p className="mx-auto mt-2 max-w-[280px] text-center text-sm leading-5 text-slate-500">
            Enter the email associated with your TourProject account to receive
            a reset link.
          </p>
          <form onSubmit={handleSubmit} className="mt-7">
            <label
              htmlFor="email"
              className="mb-1.5 block text-[11px] font-bold uppercase tracking-wide text-slate-800"
            >
              Email Address
            </label>
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-[17px] text-slate-400" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="explorer@voyagequest.com"
                className="w-full rounded-md border border-transparent bg-slate-100 py-2.5 pl-10 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-700 focus:bg-white focus:ring-2 focus:ring-blue-100"
              />
            </div>
            <button
              type="submit"
              className="mt-5 w-full rounded-md bg-blue-800 py-3 text-[11px] font-semibold uppercase tracking-wide text-white shadow-md transition duration-200 hover:bg-blue-900 hover:shadow-lg active:scale-[0.99]"
            >
              Send Reset Link
            </button>
          </form>
          <div className="mt-7 text-center">
            <h2 className="text-lg font-bold text-blue-800">TourProject</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
