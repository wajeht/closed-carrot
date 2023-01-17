import { faker } from '@faker-js/faker';

/**
 * It creates 10 fake users and returns them in a JSON response
 * @param req - The request object.
 * @param res - The response object.
 * @returns An array of 10 fake users.
 */
export function getUsers(req, res) {
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

  return res.status(200).json({
    success: true,
    requestUrl: req.originalUrl,
    message: 'The resources were returned successfully!',
    data: fakeUsers,
  });
}
