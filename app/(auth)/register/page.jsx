"use client";

import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useAuth } from "@/provider/AuthProvider";
import FormElement from "@/components/FormElement";
import InputElement from "@/components/InputElement";
import ImageElement from "@/components/ImageElement";
import HiddenElement from "@/components/HiddenElement";

const Page = () => {
  const { failed, loading, message } = useSelector((state) => state.auth);
  const { handleSubmit, handleChange, input, hidden, setHidden } = useAuth();

  return (
    <section>
      <div className="container mx-auto">
        <div className="py-10 text-sm px-2">
          <div>
            <Link href="/">Home</Link> / register
          </div>
        </div>

        <div className="flex flex-wrap mb-12">
          <div className="auth-image-margin ">
            <ImageElement
              style="auth-image"
              width={300}
              height={300}
              path="/assets/empty_cart.png"
              alt="empty_cart"
            />
          </div>

          <div className="auth-form-margin">
            <FormElement
              status={failed}
              message={message}
              loading={loading}
              buttonTitle="register"
              formStyle="auth-form"
              titleStyle="auth-title"
              formTitle="Halaman Register"
              buttonStyle="auth-button"
              wrapperStyle="auth-wrapper"
              loadingStyle="auth-loading"
              handleSubmit={handleSubmit}
            >
              <InputElement
                type="text"
                name="email"
                style="auth-input"
                value={input.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />

              <InputElement
                name="password"
                style="auth-input"
                value={input.password}
                onChange={handleChange}
                placeholder="Enter your password"
                type={hidden ? "password" : "text"}
              >
                <HiddenElement hidden={hidden} setHidden={setHidden} />
              </InputElement>

              <InputElement
                name="passwordConfirm"
                style="auth-input"
                value={input.password}
                onChange={handleChange}
                type={hidden ? "password" : "text"}
                placeholder="Enter your confirmation password"
              >
                <HiddenElement hidden={hidden} setHidden={setHidden} />
              </InputElement>
            </FormElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
