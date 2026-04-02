function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className="bg-slate-400 p-2 rounded-md text-white align-right"
    >
      {props.children}
    </button>
  );
}

export default Button;
