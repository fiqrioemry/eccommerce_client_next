"use client";

import React from "react";
import Link from "next/link";
import { useAuth } from "@/provider/AuthProvider";
import FormElement from "@/components/FormElement";
import InputElement from "@/components/InputElement";
import ImageElement from "@/components/ImageElement";

const Page = () => {
  const {
    handleClick,
    handleSubmit,
    handleChange,
    input,
    failed,
    loading,
    message,
    hidden,
  } = useAuth();

  return (
    <section>
      <div className="container mx-auto">
        {/* 1. navigation  path info */}
        <div className="py-10 text-sm px-2">
          <div>
            <Link href="/">Home</Link> / login
          </div>
        </div>

        <div className="flex flex-wrap mb-12">
          {/* 2. signin image box */}
          <div className="auth-image-margin ">
            <ImageElement
              style="auth-page-image"
              width={300}
              height={300}
              path="/assets/empty_cart.png"
              alt="empty_cart"
            />
          </div>

          {/* 3.signin form box */}
          <div className="auth-form-margin">
            <FormElement
              status={failed}
              message={message}
              loading={loading}
              buttonTitle="login"
              formStyle="auth-form"
              titleStyle="auth-title"
              formTitle="Halaman login"
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
                hidden={hidden}
                name="password"
                style="auth-input"
                value={input.password}
                onChange={handleChange}
                handleClick={handleClick}
                placeholder="Enter your password"
                type={hidden ? "password" : "text"}
              />
            </FormElement>
            <div>
              <span> Dont have an account ?</span>
              <Link href="/register" className="font-semibold">
                {" "}
                Register here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
