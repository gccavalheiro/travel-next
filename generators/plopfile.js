module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'application component',

    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name?',
      },
    ],

    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/stories.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs',
      },
      {
        type: 'append',
        path: '../src/components/index.ts',
        separator: '',
        templateFile: 'templates/export.hbs',
      },
    ],
  })
}
