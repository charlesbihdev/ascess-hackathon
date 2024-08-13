import Link from "next/link";

export default function NavLink({
  active = false,
  className = "",
  children,
  ...props
}) {
  return (
    <Link
      {...props}
      className={
        "inline-flex items-center px-1 pt-1 border-b-2 leading-5 transition duration-150 ease-in-out focus:outline-none " +
        (active
          ? "border-white focus:border-[#001858] "
          : "border-transparent focus:text-gray-700 focus:border-gray-300 ") +
        className
      }
    >
      {children}
    </Link>
  );
}
