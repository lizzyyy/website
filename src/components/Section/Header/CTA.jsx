import React from "react";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href={"/resume/LizzyWang_Resume.pdf"}
        download="LizzyWang_Resume.pdf"
        className="btn"
      >
        Resume
      </a>
      <a href={"mailto:yuchen.w@berkeley.edu"} className="btn btn-primary">
        Contact Me
      </a>
    </div>
  );
};

export default CTA;
