"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomInput from "./CustomInput";
import { Loader2 } from "lucide-react";
import { authformSchema } from "@/lib/utils";
import { signIn, signUp } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";



const  AuthFrom = ({ type }: { type: string }) => {
  const router = useRouter()
  const [user, setuser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const formSchema = authformSchema(type)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address:'',
      state:'',
      postalCode: "",
      dateOfBirth: "",
      ssn: "",
      city:''
    },
  });

  //  Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      // sign UP with appwrite & create plaid token

      if(type === 'sign-up'){
        const newUser = await signUp(values)
        setuser(newUser)
      }
      if(type === 'sign-in'){
        const response = await signIn({
          email: values.email,
          password: values.password
        })
        console.log(response)
        if(response) return router.push('/')
      }


    } catch (error) {
      console.log(error)
    }finally{
      setIsLoading(false);
    }
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href={"/"} className="flex cursor-pointer items-center gap-2">
          <Image src={"/icons/logo.svg"} width={34} height={34} alt="logo" />

          <h1 className="text-2xl font-ibm-plex-serif font-bold text-black-1">
            YPay
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}

            <p className="text-16 font-normal text-gray-600">
              {user
                ? "Link Your Account to get Started"
                : "Please Enter Your Details"}
            </p>
          </h1>
        </div>
      </header>

      {user ? (
        <div className="flex flex-col gap-4"> PlaidLink </div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit, (errors) => console.log(errors))} className="space-y-8">
              {type == "sign-up" && (
                <>
                  <div className="flex flex-col md:flex-row gap-4">
                    <CustomInput
                      form={form}
                      name="firstName"
                      label="First Name"
                      placeholder="Enter your first name"
                    />
                    <CustomInput
                      form={form}
                      name="lastName"
                      label="Last Name"
                      placeholder="Enter your last name"
                    />
                  </div>
                  <CustomInput
                    form={form}
                    name="address"
                    label="Address"
                    placeholder="Enter your address"
                  />
                  <CustomInput
                    form={form}
                    name="city"
                    label="City"
                    placeholder="Enter your City"
                  />

                  <div className="flex flex-col md:flex-row gap-4">
                    <CustomInput
                      form={form}
                      name="state"
                      label="State"
                      placeholder="ex:NY"
                    />
                    <CustomInput
                      form={form}
                      name="postalCode"
                      label="Postal Code"
                      placeholder="Ex:1101"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row gap-4">
                    <CustomInput
                      form={form}
                      name="birthDate"
                      label="Date of Birth"
                      placeholder="yyyy-MM-dd"
                      type="date"
                    />
                    <CustomInput
                      form={form}
                      name="ssn"
                      label="SSN"
                      placeholder="Ex:1234"
                    />
                  </div>
                  <CustomInput
                    form={form}
                    name="email"
                    label="Email"
                    placeholder="Enter your email"
                  />
                  <CustomInput
                    form={form}
                    name="password"
                    label="Password"
                    placeholder="Enter your password"
                  />
                </>
              )}

              {type == "sign-in" && (
                <>
                  <CustomInput
                    form={form}
                    name="email"
                    label="Email"
                    placeholder="Enter your email"
                  />
                  <CustomInput
                    form={form}
                    name="password"
                    label="Password"
                    placeholder="Enter your password"
                  />
                </>
              )}

              <Button
                type="submit"
                // disabled={isLoading}
                className="form-btn w-full"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={30} className="animate-spin" />
                    &nbsp; Loading...
                  </>
                ) : type === "sign-in" ? (
                  "Sign In"
                ) : (
                  "Sign Up"
                )}
              </Button>
            </form>

            <footer className="flex justify-center gap-1">
              <p className="text-14 font-normal text-gray-600">
                {type === "sign-in"
                  ? "Don't have an account?"
                  : "Already have an account?"}
              </p>
              <Link
                className="form-link"
                href={type === "sign-in" ? "/sign-up" : "/sign-in"}
              >
                {type === "sign-in" ? "Sign Up" : "sign In"}
              </Link>
            </footer>
          </Form>
        </>
      )}
    </section>
  );
};

export default AuthFrom;
