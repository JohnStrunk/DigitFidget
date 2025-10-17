# Instructions for AI coding assistants

The following instructions **MUST** be followed by any AI coding assistant
when making changes to this repository.

## Project architecture

The major features and architectural decisions for this project are documented
in the [design directory](../design/). Each feature and decision is captured
in a separate markdown file. These documents serve as a reference for
understanding the rationale behind various design choices and provide context
for future development. **All changes must be consistent with these
documents.**

Before making changes to the repository or adding new code:

- Review all existing decision records and feature descriptions in the `design/`
  directory. Changes and additions must align with these documents.
- If requirements or instructions from the user are ambiguous or incomplete,
  ask clarifying questions before proceeding.

## Rules

Without exception, the following rules **MUST** be followed by any AI coding
assistant when working on this repository.

- **Rule001**: After editing any file, run the [linting
  script](../.github/lint-all.sh) and fix ALL resulting errors and ALL
  warnings. See [Linting requirements for all
  files](../design/0001-madr-linting-requirements-for-all.md) for details.
- **Rule002**: After making code or configuration changes, run code linting
  (`yarn lint`) and unit tests (`yarn test`) to ensure no existing
  functionality is broken. **ALL warnings, errors, and failing tests must be
  fixed.**
- **Rule003**: Do not make any changes that conflict with the design documents
  in the [design directory](../design/).
- **Rule004**: Use context7 mcp to retrieve documentation. Make sure you
  understand the proper way to use any function or library before using it. DO
  NOT GUESS.
- **Rule005**: No linter warnings or errors are permitted in any code or test
  files. All linter warnings and errors must be immediately fixed. NO
  EXCEPTIONS.
- **Rule006**: When refactoring or adding UI elements, prefer creating
   reusable components with clear props for style, content, and standard HTML
   attributes. Update all usages to use the new component for consistency and
   maintainability.
- **Rule007**: All tests must use the project's configured test runner (e.g.,
   Vitest). Do not mix APIs from other runners (e.g., Jest). Always import
   mocks/functions (like `vi`) from the correct runner.
- **Rule008**: When adding or updating tests, ensure all required testing
   libraries and type definitions are installed and correctly referenced in
   `package.json`.
- **Rule009**: If lint or test errors occur after edits, immediately diagnose
   and resolve them before proceeding. Common error sources include incorrect
   imports, runner mismatches, or missing dependencies. Document fixes in
   commit messages if non-obvious.
- **Rule010**: All package management must be handled via `yarn`. Do not use
   `npm` for installing, updating, or removing dependencies in this
   repository.
- **Rule011**: Do not commit any changes to git.

## Code Structure

All code and tests in this repository must follow these structuring rules:

- **Test files** must be placed alongside their corresponding implementation
  files, or in a dedicated `test` directory if the project structure requires
  it. Duplicate test files are strictly prohibited.
- There must be only one test file per logical module or feature. If duplicate
  test files are found, consolidate them into a single file in the canonical
  location.
- Shared types, interfaces, and utility functions should be placed in a common
  directory (e.g., `src/game/types.ts`) and imported where needed.
- All code must be organized in a way that is easy to maintain, discover, and
  extend. Avoid scattering related logic across multiple locations.
- Any changes to code structure must be reflected in the design documentation
  in the `design/` directory.
