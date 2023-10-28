export default function Res({ children }) {
  return (
    <div className="py-2">
      <p className="text-lg">Response:</p>
      <p className="p-2 rounded bg-b dark:bg-n dark:text-black">{children}</p>
    </div>
  );
}
