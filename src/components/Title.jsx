function Title({ children, pageNumber }) {
  return (
    <h2 className=" text-white  uppercase tracking-[0.2em] font-text ">
      <span className="opacity-50">{pageNumber}</span>
      {children}
    </h2>
  );
}

export default Title;
