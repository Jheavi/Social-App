import axios from 'axios';
import { Request, Response } from 'express';
import urls from '../constants/urls';

const getMessages = async (req: Request, res: Response) => {
  const data = {
    query: `
      query getMessages {
        chat {
          message
        }
      }
      `
  };

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'x-hasura-admin-secret': '5Q4CT4Xsr9wZeZIca7MmlTUH1voHKWrwC4Qi9SratkkBevfqw2t25mnPp9xBWkUc'
    }
  };

  const messages = await axios.post(urls.ddbbUrl, data, config);
  console.log(messages.data);

  res.send(messages.data);
};

export default {
  getMessages
};
