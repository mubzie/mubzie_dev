module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:@barrierbreak/a11yinspect/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "a11yinspect/title-element-error": "off",
    "a11yinspect/landmark-element-error": "off",
    "a11yinspect/skip-link-warning": "off",
  },
  overrides: [
    {
      files: ["src/components/Button/Button.jsx"],
      rules: {
        "a11yinspect/button-element-error": "off",
      },
    },
    {
      files: ["src/components/LinkButton/LinkButton.jsx"],
      rules: {
        "a11yinspect/a-element-error": "off",
      },
    },
    {
      files: ["src/pages/DetailsPage/DetailsPage.jsx"],
      rules: {
        "a11yinspect/heading-element-error": "off",
      },
    },
    {
      files: ["src/routes/getRoutesPages.jsx"],
      rules: {
        "react-refresh/only-export-components": "off",
      },
    },
  ],
};
