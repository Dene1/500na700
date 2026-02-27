export const RouterLink = (props:any) => {
  const { to, children, ...rest } = props;

  const handleClick = (event:any) => {
    event.preventDefault()

    window.history.pushState({}, '', to)
    window.dispatchEvent(new PopStateEvent('popstate'))
  }

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
};