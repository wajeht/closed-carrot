import axios from 'axios';

import { DISCORD, ENV } from '../config/constants.js';
import { ENV_ENUM } from './enums.js';

class Discord {
  static async send({ message = '', object = null }) {
    if (ENV === ENV_ENUM.DEVELOPMENT) {
      console.log(`***** Skipping discord bot service in ${ENV} environment! *****`);
      return;
    }

    let params = null;

    // use different format to send if we have object passed in
    if (object == null) {
      params = { username: 'Chad', content: message };
    } else {
      params = {
        username: 'Chad',
        content: message,
        embeds: [
          {
            title: message,
            description: JSON.stringify(object, null, 2),
          },
        ],
      };
    }

    const res = await axios({
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify(params),
      url: DISCORD.URL,
    });
    if (res?.status === 204) console.log(`***** discord bot sent ${message}! *****`);
  }
}

export default Discord;
