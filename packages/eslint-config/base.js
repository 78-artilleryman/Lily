import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import turboPlugin from "eslint-plugin-turbo";
import eslintImport from "eslint-plugin-import"
import eslintA11y from "eslint-plugin-jsx-a11y"
import tseslint from "typescript-eslint";
import onlyWarn from "eslint-plugin-only-warn";

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
      import: eslintImport,
      "jsx-a11y": eslintA11y,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "no-unused-vars": "warn",
      "import/order": ["error", { "alphabetize": { "order": "asc" } }],
      "jsx-a11y/anchor-is-valid": "warn",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-explicit-any": 0,
      "react/prop-types": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "react/no-unused-state": "error",
      "array-callback-return": 0,
      "react/self-closing-comp": "warn",
      "@typescript-eslint/ban-ts-comment": "off"
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    ignores: ["dist/**"],
  },
];
