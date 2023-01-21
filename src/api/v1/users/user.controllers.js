import { faker } from '@faker-js/faker';

export function getUsers(req, res) {
  // todo

  const users = [];
  for (let i = 0; i < 10; i++) {
    const user = {
      id: faker.datatype.uuid(),
      avatar: faker.internet.avatar(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    users.push(user);
  }

  return res.success({ data: users });
}

export function getUser(req, res) {
  // todo
}

export function patchUser(req, res) {
  // todo
}

export function deleteUser(req, res) {
  // todo
}
