import { faker } from '@faker-js/faker';
import { StatusCodes } from 'http-status-codes';

const fakeUsers = [];

for (let i = 0; i < 10; i++) {
  const user = {
    id: faker.datatype.uuid(),
    avatar: faker.image.avatar(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
  fakeUsers.push(user);
}

export function getUsers(req, res) {
  return res.status(StatusCodes.OK).json({
    success: true,
    requestUrl: req.originalUrl,
    message: 'The resources were returned successfully!',
    data: fakeUsers,
  });
}

export function postUser(req, res) {
  const { email, password, username } = req.body;

  console.log(req.body);

  const user = {
    id: faker.datatype.uuid(),
    avatar: faker.image.avatar(),
    username,
    email,
    password,
  };

  fakeUsers.push(user);

  return res.status(StatusCodes.CREATED).json({
    success: true,
    requestUrl: req.originalUrl,
    message: 'The resources was created successfully!',
    data: [user],
  });
}
