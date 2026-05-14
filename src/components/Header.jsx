import React from "react";

export const Header = () => {
  return (
    <header>
      <div className="header-icon">
        <img 
          src="/bubt-logo-png_seeklogo-498306.png" 
          alt="BUBT Logo" 
          style={{ width: "40px", height: "auto" }} // Logo-ti control korar jonno width add kora hoyeche
        />
      </div>
      <h1>SGPA Calculator</h1>
      <p>Calculate your semester SGPA instantly</p>
    </header>
  );
};
