import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, type ChangeEvent, type FC, type FormEvent } from "react";
import { FcGoogle } from "react-icons/fc";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { Link, useNavigate } from "react-router";

interface SignupForm {
  firstName: "";
  lastName: "";
  email: "";
  password: "";
}

const Signup: FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState<SignupForm>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/api/v1/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    console.log(data);
    navigate("/auth/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md bg-secondary/50 shadow-md rounded-lg p-6">
        <div className="flex justify-center mb-6">
          <div className="text-indigo-600 text-3xl font-bold">🌀 Specify</div>
        </div>

        <div className="text-center mb-4">
          <h1 className="text-xl font-semibold">
            Sign up with your work email
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Use your work email to sign up to your team workspace.
          </p>
        </div>

        <Button variant={"outline"} className="w-full cursor-pointer">
          <FcGoogle size={20} />
          Sign up with Google
        </Button>

        <div className="flex items-center my-4">
          <hr className="flex-grow" />
          <span className="px-2 text-sm text-secondary-foreground">OR</span>
          <hr className="flex-grow" />
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Label
                htmlFor="firstName"
                className="block text-secondary-foreground"
              >
                First Name
              </Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="w-full"
              />
            </div>
            <div className="flex-1">
              <Label
                htmlFor="lastName"
                className="block text-secondary-foreground"
              >
                Last Name
              </Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="mt-1 w-full"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="email" className="block text-secondary-foreground">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="yourname@company.com"
              className="mt-1 w-full"
            />
          </div>

          <div>
            <div className="flex justify-between items-center">
              <Label
                htmlFor="password"
                className="block text-secondary-foreground"
              >
                Password
              </Label>
              <Link
                to="/forgot-password"
                className="text-sm text-indigo-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Input
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                type={visible ? "text" : "password"}
                placeholder="Enter your password"
                className="mt-1 w-full"
              />
              <button
                type="button"
                onClick={() => setVisible(!visible)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                {visible ? <LuEye size={20} /> : <LuEyeClosed size={20} />}
              </button>
            </div>
          </div>

          <Button type="submit" className="w-full cursor-pointer">
            Login up
          </Button>
        </form>

        <div className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account yet?{" "}
          <Link to="/auth/login" className="text-indigo-600 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
