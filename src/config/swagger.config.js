import path from 'path';
import { EXPRESS_PORT } from '../config/constants.js';
import pkg from '../../package.json' assert { type: 'json' };

export default {
  info: {
    // eslint-disable-next-line quotes
    title: "Closed Carrot: Amarillo's Tech Hub",
    description: 'closed-carrot-amarillos-tech-hub',
    termsOfService: `http://localhost:${EXPRESS_PORT}/terms-of-service`,
    contact: {
      name: 'API Support',
      url: `http://localhost:${EXPRESS_PORT}/contact-us`,
    },
    license: {
      name: 'MIT',
      url: 'https://github.com/closed-carrot/website/blob/main/LICENSE',
    },
    version: pkg.version,
  },
  security: {
    BearerAuth: {
      type: 'http',
      scheme: 'bearer',
    },
  },
  baseDir: path.resolve(path.join(process.cwd(), 'src')),
  filesPattern: ['**/*.router.js', '**/*.routes.js', '**/*.routes-controllers.js'],
  swaggerUIPath: '/docs/api',
  exposeSwaggerUI: true,
  notRequiredAsNullable: false,
};
