import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      tseslint.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    ignores: ["node_modules", ".next", "out", "build", "dist"],
  },
);
