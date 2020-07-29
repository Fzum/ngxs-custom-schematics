# Bauen und Verpacken!!

Zuerst ein `npm build` ausführen => .js files werden generiert. Dann ein `npm pack` ausführen. Es entsteht eine Datei mit dem Namen `schematics-ngxs-1.0.0.tgz`. Danach diese in ein beliebiges Angular Projekt integrieren und `npm install schematics-ngxs-1.0.0.tgz` ausführen. In dem Projekt kann das Schematic dann aufgerufen werden mit `ng g @schematics/ngxs:ngxs --name=Hello-World`.

# ngxs-custom-schematics

Generate NGXS Boilerplate: Store, Actions, Selectors, Facade, Container, Presenter (View)

# Getting Started With Schematics

This repository is a basic Schematic implementation that serves as a starting point to create and publish Schematics to NPM.

### Testing

To test locally, install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool. That tool acts the same as the `generate` command of the Angular CLI, but also has a debug mode.

Check the documentation with

```bash
schematics --help
```

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!
