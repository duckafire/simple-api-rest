# Code conventions

## Names

### General

1. Directories, files and endpoints must follow the `cobol-case`.
1. `index.ts` is a reserved file name.

> [!IMPORTANT]
> `index.ts` must import and export all the content exported by its neighbors, in a
> single object. If a neighbor exports an object, it must be spread.

### Controllers

1. Structure of the controllers must be similar to the structure of their endpoints.
1. Files must be suffixed with their HTTP Request Method (`<name>.<method>.ts`).

```
# endpoint
/person/worker/register

# structure
└ controllers/
    ├ person/
    │   ├ worker/
    │   │   ├ register.post.ts
    │   │   └ ?
    │   └ ?
    └ ?
```

## Identifiers

### General

1. Identifiers Case Styles:
	* `PascalCase`: classes name.
	* `snake_case`: functions/methods.
	* `SCREAMING_SNAKE_CASE`: constants with non-incrementable values.
	* `camelCase`: all other identifiers.
1. Identifiers must be explanatory.
1. Unused parameters must be named as `'_'`.
1. Use `is`, `has`, `can`, `should` or `needs` as prefixed to boolean identifiers.
1. Do not use uppercase characters in _response_ messages, except to constants names and
identifiers value.

### Source code (only TypeScript)

1. Also use `PascalCase` in:
	* Interfaces (with `I` as prefix; `IFoo`).
	* Types (with `T` as prefix; `TFoo`).
1. Exported content must be named as `main`, in all files.
1. Identifier that receives the exported content of a local file must be named with the file
name, but in `camelCase`, instead `cobolCase`.

### Tests (only JavaScript)

* *None.*

