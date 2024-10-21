"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodValidator } from '@tanstack/zod-form-adapter'
import { z } from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios";

export const description =
  "A login page with two columns. The first column has the login form with email and password. There's a Forgot your passwork link and a link to sign up if you do not have an account. The second column has a cover image.";

export const iframeHeight = "800px";

const formSchema = z.object({
  fullName: z.string().min(3, { message: "Full name must be at least 3 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
  .string()
  .min(8,{message:"Password must be at least 8 characters"} )
  .regex(new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$'), {
      message:
          'Password must be at least 8 characters and contain an uppercase letter, lowercase letter, and number'
  }),
  confirmPass: z.string().min(8,{message:"Password must be at least 8 characters"} )
}).refine(data => data.password === data.confirmPass, {
  message: 'Passwords do not match',
  path: ['confirmPass']
});


export const containerClassName = "w-full h-full p-4 lg:p-0";

export default function Dashboard() {
  const { register,reset, handleSubmit, watch, formState: { errors } } = useForm({resolver: zodResolver(formSchema)});
  const onSubmit = (data) => {
    console.log(data);
    axios.post('http://localhost:5000/api/signup', {fullName: data.fullName, email: data.email, password: data.password}).then(res => {
      if(res.status === 200) {
        console.log(res);
        alert("Account created successfully");
        reset();
      }
    }).catch(err => {
      console.error(err);
    });
  };
  console.log(errors.fullName);

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[695px]">
      <div className="flex items-center justify-center">
        <div className="mx-auto grid w-[500px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className="text-balance text-muted-foreground">
              Please Enter Your Details 
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName"  name="fullName" type="text" placeholder="Jhon Wick" {...register("fullName")}/>
              {errors.fullName && <span>{errors.fullName.message}</span>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email"  placeholder="jhonWick@gmail.com" {...register("email")}/>
                {errors.email && <span>{errors.email.message}</span>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" placeholder="giveMeMoreGuns" {...register("password")}/> 
                {errors.password && <span>{errors.password.message}</span>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirmPass">Confirm Password</Label>
                <Input id="confirmPass" name="confirmPass" type="password" placeholder="giveMeMoreGuns" {...register("confirmPass")}/>
                {errors.confirmPass && <span>{errors.confirmPass.message}</span>}
              </div>
              <div className="col-span-2">
              <Button type="submit" className="w-full">Sign Up</Button>
              </div>
              <div className="col-span-2">
                <Button variant="outline" className="w-full">
                  Sign Up with Google
                </Button>
              </div>
            </div>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="#" className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/img/signup-cover.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
