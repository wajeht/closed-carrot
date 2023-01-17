import path from 'path';
import { EXPRESS_PORT } from '../config/constants.js';
import pkg from '../../package.json' assert { type: 'json' };

export default {
  info: {
    title: 'mariposa-tech-hub-website',
    description: 'mariposa-tech-hub-website',
    termsOfService: `http://localhost:${EXPRESS_PORT}/terms`,
    contact: {
      name: 'API Support',
      url: `http://localhost:${EXPRESS_PORT}/contact`,
    },
    license: {
      name: 'PRIVATE',
      url: 'https://github.com/Mariposa-Tech-Hub/mariposa-tech-hub-website/blob/main/LICENSE',
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
