# Code conventions

## General

### Syntax/semantic choices

1. Use semicolon after:
	* Values attribution to variables and like.
	* Importation/exportation of contents.
	* Functions call.
	* Ternary operations.
1. Do not use `var` in declarations.
1. Functions must be declared like Arrow Functions and stored in constants.
1. Avoid declarations inside of any loops type.
1. Do not use single quotes to defined strings, use double quotes.
1. The indentation must be done with tabulations, one to each indentation level.

### POO

1. Declaration of classes must be avoided, prefer the functional paradigm.
1. Do not use `get` and `set` to declare class properties.
1. Properties and methods unnecessary publicly must be private.
1. Properties must be started only in the class Constructor or in the "class environment".
Case the preferred value are not reachable, `null` must be attributed.
1. The use of properties and methods, inside their class, must be prefixed by `this`.
1. Avoid to store functions, classes and similar in properties.

### Clean code

1. All no used code must be removed.
1. Avoid nested and long ternary operations.
1. Files must depend only of NPM packages (exist two exception to TS files: `shared/`
and `index.ts`).
1. Comparison with `undefined` and `null` must be explicit.
1. Avoid attribute `undefined` to identifiers.
1. Single responsibility to functions and classes.
1. Commentaries must be explain decisions which the finally is implicit, obscure or hard to
understand without assistance or a lot of reading time.
1. It is allowed and recommended to omit curly braces in single line blocks, when possible.

### Importing

1. Imports of NPM packages must be in top of files.
1. Imports of local files must be below imports of NPM packages, separated by a empty line.

## Source code (only TypeScript)

### Syntax/semantic choices

### Typing

1. All that can be typed it must be typed.
1. Avoid "function types", add manually the types to parameters and to the return.
1. `never` and `unknown` must be priority in relation to `void` and `any`.
1. Avoid to use `as` to change the type of a value.
1. Avoid the use of complex types.

### Importing

1. Name of local imported files must be prefixed by `"./"`.
1. Imported folders name must be suffixed by a slash.

> [!NOTE]
> Imports that have a folder as target get the content of its `index.ts`.

### Exporting

1. Files can depend of the `shared/` content.
1. Files can export in maximum one function, one class or one object, as `default`.

### The main function

1. The `main` must be the last declarations in its file.
1. `main` must be exported after to be declared, as `default`.

## Tests (only JavaScript)

1. The strict mode must be used in all files.
1. Variables must not receive distinctive types.
1. Files cannot export content.
