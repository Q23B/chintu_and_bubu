import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { siteNavItems } from "./nav-data";
import "../../styles/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="site-header__inner page-container">
        <div className="brand-block">
          <div className="brand-name">Chintu & Bubu</div>
          <div className="brand-subtitle">Official Brand</div>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`site-nav ${menuOpen ? "site-nav--open" : ""}`}
          aria-label="Primary navigation"
        >
          <div className="site-nav__links">
            {siteNavItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  isActive
                    ? "site-nav__link site-nav__link--active"
                    : "site-nav__link"
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="site-nav__cta site-nav__cta--mobile">
            <button
              type="button"
              className="button button--primary button--pill"
            >
              Partner With Us
            </button>
          </div>
        </nav>

        <div className="site-header__actions site-header__actions--desktop">
          <button type="button" className="button button--primary button--pill">
            Partner With Us
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
