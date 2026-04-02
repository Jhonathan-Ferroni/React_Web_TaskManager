function Input({ onChange, ...props }) {
  return (
    <input
      className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      onChange={(event) => onChange?.(event.target.value)}
      {...props}
    ></input>
  );
}

export default Input;
