import app from './app.js';
import { EXPRESS_PORT } from './config/constants.js';

app.listen(EXPRESS_PORT, () => {
  console.log(`Express server is running at http://localhost:${EXPRESS_PORT}`);
});
