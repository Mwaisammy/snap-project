import React from "react";

const authLinks = [
  {
    title: "Login",
    path: "/login",
  },
  {
    title: "Register",
    path: "/register",
  },
];

const AuthLinks = () => {
  return (
    <div className="flex items-center gap-4">
      {authLinks.map((link) => (
        <a
          key={link.title}
          href={link.path}
          className={`${
            link.title.toLowerCase() === "register"
              ? "border border-gray-400 px-4 py-1 rounded-xl text-gray-700 hover:bg-gray-100"
              : "text-gray-700"
          } capitalize`}
        >
          {link.title}
        </a>
      ))}
    </div>
  );
};

export default AuthLinks;
