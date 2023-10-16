export default function Icon({ position, x, y, submitTateti }) {
  return (
    <div
      key={x}
      className={`w-1/3 cursor-pointer text-center text-7xl p-6 text-black 
      ${(x + 1) % 2 == 0 ? "border-x-2 border-[#1c6087]" : ""} 
      ${position == 0 ? "text-b dark:text-bc" : ""}
      ${position == "X" ? "text-ros" : ""}
      ${position == "O" ? "text-cel" : ""}
      `}
      id={y + "-" + x}
      onClick={submitTateti}
    >
      {position == 0 ? "0" : null}
      {position == "X" ? "X" : null}
      {position == "O" ? "O" : null}
    </div>
  );
}
