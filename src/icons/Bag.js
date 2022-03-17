function Bag({className, ...otherProps}) {
  return (
    <div {...otherProps} className={`icon ${className}`}>
      <svg width="29" height="46" viewBox="0 0 29 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.6839 13.3175H23.304V7.10266C23.304 3.18625 20.6549 0 17.3986 0H17.0295C16.1035 0 15.2268 0.258359 14.4459 0.71728C13.665 0.258359 12.7883 0 11.8623 0C8.60604 0 5.95687 3.18625 5.95687 7.10266V13.3175H1.20795L0 45.2795H28.8919L27.6839 13.3175ZM17.3504 2.55616C19.3855 2.55616 21.0895 4.65491 21.0895 7.10266V13.3175H17.7677V7.10266C17.7677 5.44526 17.292 3.91987 16.4978 2.7102C16.4978 2.7102 16.6199 2.55616 17.3504 2.55616ZM14.4459 3.93647C15.1287 4.74254 15.5532 5.86387 15.5532 7.10266V13.3175H13.3386V7.10266C13.3386 5.86387 13.7632 4.74254 14.4459 3.93647ZM8.17141 7.10266C8.17141 4.65491 9.82714 2.6635 11.8623 2.6635C12.0429 2.6635 12.2202 2.67992 12.394 2.7102C11.5999 3.91987 11.1241 5.44526 11.1241 7.10266V13.3175H8.17141V7.10266ZM3.32401 15.981H5.95687V42.616H2.31744L3.32401 15.981ZM8.17141 42.616V15.981H11.1241V18.6445H13.3386V15.981H21.0895V18.6445H23.304V15.981H25.5678L26.5744 42.616H8.17141Z" fill="black" />
      </svg>
    </div>
  );
}

export default Bag;
