// import { faker } from '@faker-js/faker';

export function getUsers(req, res) {
  // todo

  // const users = [];

  // for (let i = 0; i < 4; i++) {
  //   const user = {
  //     id: faker.datatype.uuid(),
  //     avatar: faker.internet.avatar(),
  //     username: faker.internet.userName(),
  //     email: faker.internet.email(),
  //     password: faker.internet.password(),
  //   };
  //   users.push(user);
  // }

  return res.success({ data: [] });
}

export function getUser(req, res) {
  // todo
  return res.success({
    message: 'implement getUser()',
  });
}

export function patchUser(req, res) {
  // todo
  return res.success({
    message: 'implement patchUser()',
  });
}

export function deleteUser(req, res) {
  // todo
  return res.success({
    message: 'implement deleteUser()',
  });
}
