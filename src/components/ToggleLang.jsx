import React from "react";
import "../Styles/ToggleLanguageStyle.css";
import { useTranslation } from "react-i18next";

const ToggleLanguage = () => {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
    document.documentElement.lang = e.target.value;
  };

  return (
    <div className="container">
      <select
        className="selectLang"
        onChange={handleChange}
        defaultValue={i18n.language}
      >
        <option value="en">English</option>
        <option value="fa">فارسی</option>
      </select>
    </div>
  );
};

export default ToggleLanguage;
