# Documentation

The target of this sub-directory is to explain all "important" parts of
this project, in order to facilitate the general development of it.

> [!IMPORTANT]
> This content must be updated EVERY time that a new Git Tag is created.

### Pages

* [REST principles](https://github.com/duckafire/simple-api-rest/tree/main/docs/rest-principles.md)
* [Conventions](https://github.com/duckafire/simple-api-rest/tree/main/docs/conventions/)
	* [Code](https://github.com/duckafire/simple-api-rest/blob/main/docs/conventions/code.md)
	* [Nomenclature](https://github.com/duckafire/simple-api-rest/blob/main/docs/conventions/nomenclature.md)

## Repository map

```
simple-api-rest/
├ .git/
│   └ ?
├ .github/
│   └ ?
├ !build/
│   └ ?
├ docs/
│   └ ?
├ !node_modules/
│   └ ?
├ src/
│   ├ controllers/
│   │   ├ [...]/
│   │   │   ├ index.ts
│   │   │   └ ?
│   │   ├ index.ts
│   │   ├ empty-endpoint.ts
│   │   └ inexistent-endpoint.ts
│   ├ database/
│   │   ├ index.ts
│   │   └ ?
│   ├ shared/
│   │   ├ @types/
│   │   │   ├ index.ts
│   │   │   └ ?
│   │   ├ classes/
│   │   │   ├ index.ts
│   │   │   └ ?
│   │   ├ middlewares/
│   │   │   ├ index.ts
│   │   │   └ ?
│   ├ routes.ts
│   └ index.ts
├ tests/
│   ├ controllers/
│   │   └ *
│   └ jest.setup.js
├ !.env
├ .env.example
├ .gitattributes
├ .gitignore
├ LICENSE
├ README.md
├ jest.config.js
├ package.json
├ %package-lock.json
└ tsconfig.json
```

> [!NOTE]
> ### Special characters
>
> * `!` (name prefix): content ignored by Git.
> * `*`: all content from the "original" (sub)directory.
> * `?`: a variable quantity of content - that they follow a standard.
> * `%` (name prefix): it must not be manually edited.
> * `[...]`: variable quantity of content (folders and files).

> [!IMPORTANT]
> If a directory that is shown in the map is not present in the project,
> this means that there is no content for it.
