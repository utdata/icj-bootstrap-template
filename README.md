# ICJ Bootstrap Template

This template goes along with the [Bootstrap lessons](https://utdata.github.io/icj-class/bs-00-intro.html) for Intro to Coding for Journalists.

It uses Bootstrap 5 and a Gulp setup to support a development environment with Sass and image management.

## Using this project in Codespaces

This template can be used in Github Codespaces, a virtual machine that doesn't require any other setup.

1. Click on the green **Use this template** button and choose _Create a new repository_.
    - This should allow you to create new repo based on icj-bootstrap-template.
    - Leave all the other settings the same and click **Create repository**.
    - It takes several seconds to create your repo.
1. Click on the green **<> Code** button and then choose the **Codespaces** tab.
    - Click **Create codespace on main**.
    - This will take a bit more time, but should just be a couple of minutes. **It will pause at one point and give you a prompt, but wait until you see it say "Detected Node.js" and let it finish that setup.
    - Once the Node installation finishes, your browser will look like you have a version of Visual Studio Code open, and you do!
1. In the codespace's VS Code Terminal, run:

    ```bash
    npm install -g gulp
    ```

1. In the Terminal, run `gulp dev`.

## How to set up on a personal machine

**If you are running codespaces, you don't need to do this.**

If your computer has Node.js and you have installed [degit](https://www.npmjs.com/package/degit) and [gulp](https://www.npmjs.com/package/gulp) globally, you can pull a copy of this repo to your machine and work from there.

- Create a new folder on your computer where you want the files.
- In VS Code, open a new window and open your new folder.
- Open the integrated Terminal.
- Run `$ degit utdata/icj-bootstrap-template` to download the files.
- Run `$ npm install` to install the node packages.
- Run `$ git init` to intilize git.
- Run `$ git add .` to add the files.
- Run `$ git commit -m "first commit"` to commit the files.
- Go to Github and create a repository of the same name.
- Use the `git add` command provided there to sync the repos.
- Run `$ git push origin main` to push the code to Github.

## How to run the project

- Run `gulp dev` to compile all the code and start a server.
- If you just want to compile code without running a server, run `gulp` by itself.

## Edit in the src folder

All edits to HTML, SCSS or images should be done in the `src` folder. DO NOT edit files in the `docs` folder, or you will lose the changes when gulp tasks run.
