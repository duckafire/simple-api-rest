# Code conventions

## Directory/file name

In general mode, files that:

* Export an object must be named like `index.ts`.
* Export a function must be named in `cobol-case`.
* Export a class must be named in `PascalCase`.

> [!NOTE]
> All folders must be have one `index.ts`. It is responsibly by import and
> export all content exported by its neighbors, in an "object no typed" format.

The content of the `controllers/` have themselves nomenclature rules, that affect
files and folder. It is reference to API endpoint, where the final word of the endpoint
is a file and the other are folders, like:

```
foobar://foo.bar/person/worker/register

└ controllers/
    ├ person/
    │   ├ worker/
    │   │   ├ register.post.ts
    │   │   └ ?
    │   └ ?
    └ ?
```

How showed above, between the file name and the file extent, it have a chunk, that
indicate the HTTP Request Method used by the endpoint. It allow that multiple endpoints,
with different request methods, they can exist in the some directory and with the some
name.

```
<exportion-name>.<method>.ts
```

## General

1. Identifiers must follow the Case Styles below.
	* `PascalCase`: class names.
	* `snake_case`: functions and methods (both must be compound).
	* `SCREAMING_SNAKE_CASE`: constants (except those that store functions).
	* `camelCase`: all other identifiers.

1. Identifiers must be explanatory.
1. Use `is` or `has` as prefixed for variables, properties, functions and methods that
have/return a boolean value.

> [!IMPORTANT]
> Identifiers declared with `const` that can be incremented, like objects and arrays, they
> must not be considered constants, then they must not follow the constants Case Style.

## Source code (only TypeScript)

1. The use of `PascalCase` is extended to:
	* Interfaces (with `I` as prefix; `IFoo`).
	* Types (with `T` as prefix; `TFoo`).

## Tests (only JavaScript)

* *None.*

