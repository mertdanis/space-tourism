function Title({ children, pageNumber, className }) {
  return (
    <div className="sm:my-0 my-[30px]">
      <h2
        className={`text-mainWhite w-fit sm:text-h5 text-[16px]  uppercase tracking-[4.725px] font-text ${className}`}
      >
        <span className="sm:text-h5 text-[16px] opacity-25 sm:mr-[28px] mr-[10px] font-bold ">
          {pageNumber}
        </span>
        {children}
      </h2>
    </div>
  );
}

export default Title;
