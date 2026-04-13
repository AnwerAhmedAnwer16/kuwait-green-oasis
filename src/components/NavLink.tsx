import { NavLink as RouterNavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

type NavLinkProps = React.ComponentProps<typeof RouterNavLink>;

interface NavLinkPropsCustom extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = ({
  className,
  activeClassName,
  pendingClassName,
  ...props
}: NavLinkPropsCustom) => {
  return (
    <RouterNavLink
      className={({ isActive, isPending }) =>
        cn(className, isActive && activeClassName, isPending && pendingClassName)
      }
      {...props}
    />
  );
};

export { NavLink };
