import { BsList } from "react-icons/bs";
interface ResponsiveSideMenuProps {
    isMenuOpen: boolean;
    toggleMenu: () => void; // Function to handle toggling state
}

const ResponsiveSideMenu = ({ isMenuOpen, toggleMenu }: ResponsiveSideMenuProps) => {
    return (
        <div>
            {!isMenuOpen && (
                <button
                title="open"
                    onClick={toggleMenu}
                    className="mobile-menu position-fixed text-black p-2 z-4 d-flex align-items-center justify-content-center rounded-circle d-block "
                >
                    <BsList size={40} />
                </button>
            )}
        </div>
    );
};

export default ResponsiveSideMenu;
