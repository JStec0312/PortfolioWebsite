'use client';
import React from "react";

const ContactField = ({ label, value, onChange, type = "text" }) => {
  return (
    <input
      type={type}
      placeholder={label}
      value={value}
      onChange={onChange}
      className="w-full bg-transparent text-body  text-stone-500 outline-none"
      aria-label={label}
    />
  );
};

export default ContactField;
