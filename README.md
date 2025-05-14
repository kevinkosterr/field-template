# Field template
> A template repository to start creating fields for [vue3-form-generator](https://github.com/kevinkosterr/vue3-form-generator) faster.

## Checklist
- [ ] Run `pnpm install`;
- [ ] Remove `pnpm-lock.yaml` from `.gitignore`;
- [ ] Change `name` in `package.json` and `vite.config.ts`;
- [ ] Change `main` in `package.json`;
- [ ] Rename field in `src/components` (best to refactor using an IDE to immediately fix imports);
- [ ] Change `release.tagFormat` in `package.json` if desired;
- [ ] Configure `release.yml` in `.github/workflows`.

## Development
To run your development playground use:
```bash
pnpm run dev
```

To build your field component run:
```bash
pnpm run build
```

To run tests, execute:
```bash
pnpm run test
```

## Publishing your component
Publishing your component can be done manually via [the command line](https://www.freecodecamp.org/news/how-to-create-and-publish-your-first-npm-package/#heading-how-to-publish-your-npm-package) or through [GitHub Actions](https://docs.github.com/en/actions/use-cases-and-examples/publishing-packages/publishing-nodejs-packages).
This template repository already comes with a basic setup with [`semantic-release`](https://github.com/semantic-release/semantic-release) which will publish a new release 
when you push to the `production` branch (you'll have to create one yourself).

Semantic release automatically updates the `version` property in `package.json` based on your commits. It is highly
recommended you do some research on how it works before adding commits to your repository.
