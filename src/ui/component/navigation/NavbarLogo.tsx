import {NavbarLogoProps} from "@/ui/component/navigation/type";
import clsx from "clsx";

const NavbarLogo = ({logoUrl, className}: NavbarLogoProps) => {
    return (
        <div className={clsx('flex shrink-0 items-center', className)}>
            {logoUrl && (
                <img
                    className='h-8 w-auto'
                    src={logoUrl}
                    alt="Company Logo"
                />
            )}
        </div>
    );
}

export default NavbarLogo;