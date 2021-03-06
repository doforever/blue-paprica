function ArrowDown({className, ...otherProps}) {
  return (
    <div {...otherProps} className={`icon ${className}`}>
      <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.50071 6.06531C4.33941 6.06531 4.17813 6.00372 4.05516 5.88081L0.18536 2.01097C-0.06081 1.7648 -0.06081 1.36568 0.18536 1.11961C0.43143 0.873541 0.830472 0.873541 1.07666 1.11961L4.50071 4.54386L7.92477 1.11973C8.17094 0.873661 8.56995 0.873661 8.816 1.11973C9.06229 1.3658 9.06229 1.76492 8.816 2.01109L4.94626 5.88093C4.82322 6.00386 4.66195 6.06531 4.50071 6.06531Z" fill="black" />
      </svg>
    </div>
  );
}

export default ArrowDown;