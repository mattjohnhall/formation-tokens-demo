import StyleDictionary from 'style-dictionary';
import { transforms, transformTypes } from 'style-dictionary/enums';
import { register } from '@tokens-studio/sd-transforms';
import fs from 'fs';
import path from 'path';

register(StyleDictionary);

const brands = fs.readdirSync(path.resolve('tokens/brands'))
  .filter((file) => file.endsWith('.json'))
  .map((file) => path.basename(file, '.json'));

brands.forEach((brand) => {
  const formation = new StyleDictionary({
    source: [`tokens/primitives.json`, `tokens/brands/${brand}.json`],
    platforms: {
      css: {
        buildPath: 'css/',
        prefix: 'fds',
        transformGroup: 'tokens-studio',
        transforms: ['name/kebab'],
        files: [
          {
            destination: `${brand}.css`,
            format: 'css/variables',
            options: {
              outputReferences: true
            }
          },
        ],
      },
      scss: {
        buildPath: 'scss/',
        prefix: 'fds',
        transformGroup: 'tokens-studio',
        transforms: ['name/kebab'],
        files: [
          {
            destination: `${brand}.scss`,
            format: 'scss/variables',
            options: {
              outputReferences: true
            }
          },
        ],
      },
      json: {
        buildPath: 'json/',
        transformGroup: 'tokens-studio',
        files: [
          {
            destination: `${brand}.json`,
            format: 'json/nested',
            options: {
              outputReferences: true
            }
          },
        ],
      },
    },
  });

  formation.buildAllPlatforms();
});
