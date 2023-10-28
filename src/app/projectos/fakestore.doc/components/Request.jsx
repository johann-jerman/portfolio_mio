export default function Req({ children, method }) {
  return (
    <div className="py-2">
      <p className="text-lg">Request:</p>
      <p
        className={
          "p-2  rounded dark:text-black " +
          `${method == "GET" && "bg-rc"} ${method == "POST" && "bg-am"} ${
            method == "PUT" && "bg-cel"
          } ${method == "DELETE" && "bg-roj"}`
        }
      >
        {children}
      </p>
    </div>
  );
}
