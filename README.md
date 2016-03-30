# `jscli`
> A CLI for javascript

# Usage

```sh
npm install --global jscli
```

```
Usage: js <command>

Commands:
  init  Initialize a new JavaScript project
  ls    List scaffolds

Options:
  --version   Show version number                                      [boolean]
  -h, --help  Show help                                                [boolean]
```

## Scaffolds

To initialize a project run

```sh
js init <scaffold> -o path/to/my-project
```

`<scaffold>` should be a name of a folder in `scaffolds`.
the `-o` is optional and will default to the current directory.
