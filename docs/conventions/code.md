# Code conventions

## General

### Syntax/semantic choices

1. Semicolon must be used after:
	* Values attribution to variables and like.
	* Importation/exportation of contents.
	* Functions call.

1. `var` must not be used in declarations.
1. Functions must be declared like Arrow Functions and stored in constants.
1. Avoid declarations inside of loops.
1. Double quotes must be used to defined strings.
1. The indentation must be done with tabulations, one to each indentation level.

### POO

1. The use/declaration of classes must be avoided. Prefer the functional paradigm.
1. `get` and `set` must not be used to declare class properties.
1. Properties and methods unnecessary publicly must be private.
1. Public properties must be started only in the class Constructor. Case the preferred
value are not reachable, `null` must be attributed.
1. Private properties must be started only in the class environment or in the its
Constructor.
1. The use of properties and methods, inside their class, must be prefixed by `this`.
1. Properties must not store functions.

### Clean code

1. All no used code must be removed.
1. Avoid nested and long ternary operations.
1. Files must depend only of NPM packages (exist two exception to TS files: `shared/`
and `index.ts`).
1. Comparison with `undefined` and `null` must be explicit - in order of that they
do not be confused with boolean comparison. Use `===` to do this.
1. Avoid to attribute `undefined` to variables and properties.
1. Functions and classes must have only one responsibility.
1. Commentaries must be explain decisions which the finally is implicit, obscure or hard to
understand without assistance or a lot of reading time.
1. It is allowed and recommended to omit curly braces in single line blocks, when possible.

## Source code (only TypeScript)

### Syntax/semantic choices

### Typing

1. All that can be typed it must be typed.
1. `never` and `unknown` must be priority in relation to `void` and `any`.
1. Avoid to use `as` to change the type of a value.

### Importing

1. Imported folders must be suffixed by a slash.
1. `as` must be used to rename importations, based in **nomenclature conventions**.

> [!NOTE]
> Folders importations have the `index.ts`, of the folder, like target.

### Exporting

1. Files can depend of the `shared/` content.
1. File can export in maximum one functions or class.
1. The "exportation function (or class)" of a file must be named as `main` (or `Main` to
classes).
1. Files can export in maximum one function or class (`main`), except the `index.ts`, that
it export an object with functions and object.

### The main function

1. `main` function must be present in the end of file.
1. `main` must be declared and exported simultaneous.

## Tests (only JavaScript)

1. The strict mode must be used in all files.
1. Variables must not receive distinctive types.
1. Files cannot export content.
