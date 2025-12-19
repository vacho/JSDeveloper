# Missing TypeScript Topics for Documentation

Based on a review of the existing documentation and examples, here are some important TypeScript topics that are not yet explained:

## Core Concepts

*   **Modules:** Cover how to organize code into modules using `import` and `export`.

## Advanced Types

*   **Union Types:** Explain how to declare that a type could be one of many types (e.g., `string | number`).
*   **Intersection Types:** Explain how to combine multiple types into one.
*   **Literal Types:** Describe how to create types that are specific strings, numbers, or booleans.
*   **Conditional Types:** Explain how to create types that change based on a condition.

## Object-Oriented Programming

*   **Classes:** While there is an OOP example, the documentation should explain TypeScript's class syntax, including access modifiers (`public`, `private`, `protected`).
*   **Abstract Classes:** Describe how to create base classes from which other classes may be derived.

## Other Features

*   **Decorators:** Explain this experimental feature for annotating and modifying classes and their members.
*   **`tsconfig.json` Configuration:** Provide a more detailed explanation of the `tsconfig.json` file and its most important compiler options, such as:
    *   `target`
    *   `module`
    *   `strict`
    *   `outDir`
    *   `rootDir`
    *   `esModuleInterop`
