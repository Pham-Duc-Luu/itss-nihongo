"use client";
import { Button, Input, Spacer } from "@nextui-org/react";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { FaGoogle, FaLine } from "react-icons/fa";
import { supabase } from "@/supabase.client";
import { useRouter } from "@/i18n/routing";
const signUpSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm Password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
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
  const route = useRouter();
  const toggleVisibilityPassWord = () =>
    setIsVisiblePassWord(!isVisiblePassWord);

  const [isVisibleRePassword, setIsVisibleRePassword] = React.useState(false);

  const toggleVisibilityRePassword = () =>
    setIsVisibleRePassword(!isVisiblePassWord);

  const onSubmit = async (data: SignUpFormValues) => {
    console.log(data);

    let existUser = await supabase
      .from("User")
      .select()
      .eq("email", data.email);

    if (existUser.data && existUser.data.length > 0) {
      return;
    }

    let User = await supabase.from("User").insert({
      email: data.email,
      password: data.password,
      name: data.name,
      role: "student",
    });
    console.log(User);

    if (!User.error) {
      let existUser = await supabase
        .from("User")
        .select()
        .eq("email", data.email);
      window.localStorage.setItem("user", JSON.stringify(existUser.data[0]));

      route.push("/classroom");
    }
  };
  return (
    <div className=" bg-emerald-200 min-h-screen">
      <div className=" h-12 bg-emerald-400"></div>
      <Spacer y={5}></Spacer>
      <div
        className=" flex justify-center flex-col items-center"
        style={{ maxWidth: 800, margin: "0 auto" }}
      >
        <div className=" text-4xl">アカウントを作成する</div>
        <Spacer y={4}></Spacer>
        <div className=" text-2xl">
          すでにアカウントをお持ちですか? <strong>ログイン</strong>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ maxWidth: 800, margin: "0 auto" }}
      >
        <div>メールは何ですか?</div>
        <Input
          {...register("email")}
          placeholder="メールアドレスを入力してください"
          // status={errors.name ? "error" : "default"}
          // helperText={errors.name?.message}
          fullWidth
        />
        <Spacer y={3} />

        <div>あなたを何と呼べばいいでしょうか?</div>
        <Input
          {...register("name")}
          placeholder="プロフィール名を入力してください"
          // status={errors.email ? "error" : "default"}
          // helperText={errors.email?.message}
          fullWidth
        />
        <Spacer y={3} />
        <div className=" flex justify-between">
          <div>パスワードを作成</div>
          <button
            className="focus:outline-none flex"
            type="button"
            onClick={toggleVisibilityPassWord}
            aria-label="toggle password visibility"
          >
            <span>ひで</span>
            {isVisiblePassWord ? (
              <MdOutlineVisibilityOff className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <MdOutlineVisibility className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        </div>
        <Input
          {...register("password")}
          // label="Password"
          type={isVisiblePassWord ? "text" : "password"}
          placeholder="パスワードを入力してください"
          description="文字と数字を組み合わせた8文字以上を使用してください"
          // status={errors.password ? "error" : "default"}
          // helperText={errors.password?.message}
          fullWidth
        />
        <Spacer y={3} />

        <div className=" flex justify-between">
          <div>パスワードを確認してください</div>

          <button
            className="focus:outline-none flex"
            type="button"
            onClick={toggleVisibilityRePassword}
            aria-label="toggle password visibility"
          >
            <span>ひで</span>
            {isVisibleRePassword ? (
              <MdOutlineVisibilityOff className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <MdOutlineVisibility className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        </div>
        <Input
          {...register("confirmPassword")}
          type={isVisibleRePassword ? "text" : "password"}
          // label="Confirm Password"
          placeholder="パスワードを入力してください"
          // status={errors.confirmPassword ? "error" : "default"}
          // helperText={errors.confirmPassword?.message}
          fullWidth
        />
        <Spacer y={3} />
        <>
          アカウントを作成すると、
          <strong>利用規約とプライバシーポリシー</strong>
          に同意したことになります
        </>
        <Button type="submit" color="primary" fullWidth>
          アカウントを作成する
        </Button>
        <div>または次のように続けます</div>
      </form>
      <Spacer y={4}></Spacer>
      <div
        className=" flex justify-around items-center"
        style={{ maxWidth: 800, margin: "0 auto" }}
      >
        <Button radius="full" size="lg" className=" bg-slate-100">
          <FaLine />
          <div>Line</div>
        </Button>
        <Button radius="full" size="lg" className=" bg-slate-100">
          <FaGoogle />
          <div>Google</div>
        </Button>
      </div>
    </div>
  );
};

export default page;
