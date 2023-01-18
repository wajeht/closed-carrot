import { EXPRESS_PORT } from './config/constants.js';

import app from './app.js';
import * as db from './utils/db.js';

app.listen(EXPRESS_PORT, async () => {
  await db.init();

  console.log(`Express server is running at http://localhost:${EXPRESS_PORT}`);
});
