import { useLocation, NavLink } from "react-router-dom";

/**
 * Component that keeps the navigation url after component updates
 * @param {*} param0
 * @returns
 */
export function QueryNavLink({ to, ...props }) {
  let location = useLocation();

  return <NavLink to={to + location.search} {...props} />;
}
