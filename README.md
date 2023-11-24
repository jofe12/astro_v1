# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

echo "# astro_v1" >> README.md
<<<<<<< HEAD
  git init
  git add README.md
  git commit -m "first commit"
  git branch -M main
  git remote add origin https://github.com/jofe12/astro_v1.git
  git push -u origin maingit
=======
  git init                     // inicializa git
  git add .                    // adiciona los archivos 
  git commit -m "first commit" // crea el primer commit
  git branch -M main           // cambia de rama master a rama main
  git remote add origin https://github.com/jofe12/astro_v1.git 
  git push -u origin main

git branch                     // lista las ramas creadas
git checkout "nombre rama"      // cambia de rama

git checkout -b "nombre de la rama"  //crea una nueva rama y se ubica en ella.

git status                  //muestra el estado del archivo modificado, seguido se debe hacer un git add . y despues el commit
>>>>>>> panel-v1.1

git merge "nombre de la rama a fusionar"    // este comando sirve para fusionar dos ramas, pero se debe estar ubicado en la rama principal,     la                                            cual es la que va a recibir la rama secundaria.


git branch -d "nombre de la rama"           // este comando sirve para borrar una rama.


git push                                      // permite enváir los cambias en los archivos al repositorio en github.