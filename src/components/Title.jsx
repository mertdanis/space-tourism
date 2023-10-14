function Title({ children, pageNumber, className }) {
  return (
    <h2
      className={`text-mainWhite w-fit text-h5   uppercase tracking-[4.725px] font-text ${className}`}
    >
      <span className="text-h5 opacity-25 mr-[28px] font-bold">
        {pageNumber}
      </span>
      {children}
    </h2>
  );
}

export default Title;
