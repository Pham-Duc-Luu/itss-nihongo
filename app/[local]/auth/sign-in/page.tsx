"use client";

import { Button, Checkbox, Input, Link, Spacer } from "@nextui-org/react";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { FaGoogle, FaLine } from "react-icons/fa";
const signUpSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignUpFormValues = z.infer<typeof signUpSchema>;
const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
  });

  const [isVisiblePassWord, setIsVisiblePassWord] = React.useState(false);

  const toggleVisibilityPassWord = () =>
    setIsVisiblePassWord(!isVisiblePassWord);

  const [isVisibleRePassword, setIsVisibleRePassword] = React.useState(false);

  const toggleVisibilityRePassword = () =>
    setIsVisibleRePassword(!isVisiblePassWord);

  const onSubmit = (data: SignUpFormValues) => {
    console.log("Form Submitted:", data);
  };
  return (
    <div className=" bg-emerald-200 min-h-screen">
      <div
        className=" flex flex-col justify-around items-center"
        style={{ maxWidth: 800, margin: "0 auto" }}
      >
        <div className=" h-12 bg-emerald-400"></div>
        <Spacer y={5}></Spacer>
        <div
          className=" flex justify-center flex-col items-center"
          style={{ maxWidth: 800, margin: "0 auto" }}
        >
          <div className=" text-4xl">ログイン</div>
          <Spacer y={4}></Spacer>
        </div>

        <Button radius="full" size="lg" className=" bg-slate-100 w-full">
          <FaLine size={30} />
          <div>Lineで続けます</div>
        </Button>
        <Spacer y={5}></Spacer>

        <Button radius="full" size="lg" className=" bg-slate-100 w-full">
          <FaGoogle size={30} />
          <div>Googleで続けます</div>
        </Button>
        <Spacer y={5}></Spacer>

        <form
          onSubmit={handleSubmit(onSubmit)}
          // style={{ maxWidth: 800, margin: "0 auto" }}
          style={{ width: 800 }}
          className=" flex justify-center items-center flex-col"
        >
          <div className=" w-full">メールアドレスまたはユーザー名</div>
          <Input
            size="lg"
            {...register("email")}
            placeholder="メールアドレスを入力してください"
            // status={errors.name ? "error" : "default"}
            // helperText={errors.name?.message}
            fullWidth
          />
          <Spacer y={3} />
          <div className=" w-full">パスワード</div>

          <Input
            size="lg"
            {...register("password")}
            // label="Password"
            endContent={
              <div className=" flex justify-between">
                <button
                  className="focus:outline-none flex"
                  type="button"
                  onClick={toggleVisibilityPassWord}
                  aria-label="toggle password visibility"
                >
                  {isVisiblePassWord ? (
                    <MdOutlineVisibilityOff className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <MdOutlineVisibility className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              </div>
            }
            type={isVisiblePassWord ? "text" : "password"}
            placeholder="パスワードを入力してください"
            // description="文字と数字を組み合わせた8文字以上を使用してください"
            // status={errors.password ? "error" : "default"}
            // helperText={errors.password?.message}
            fullWidth
          />
          <Spacer y={3} />
          <div className=" flex justify-between flex-1 w-full">
            <Checkbox defaultSelected>覚える</Checkbox>
            <Link>パスワードを忘れた</Link>
          </div>
          <Spacer y={4}></Spacer>

          <Button type="submit" color="primary" fullWidth>
            ログイン
          </Button>
          <Spacer y={4}></Spacer>
          <span className=" ">または次のように続けます</span>
          <Spacer y={4}></Spacer>

          <Button type="submit" color="primary" fullWidth>
            サインアップ
          </Button>
        </form>
      </div>
    </div>
  );
};

export default page;
