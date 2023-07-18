const { faker } = require('@faker-js/faker');

const createPost = (amount) => {
  const arr = [];
  for (let i = 0; i < amount; i++) {
    arr.push({
      id: faker.string.uuid(),
      author_id: faker.string.uuid(),
      title: faker.lorem.words(),
      author: faker.person.firstName(),
      avatar: faker.image.avatar(),
      image: faker.image.url(),
      created: Date.now() - (i * 10000000 * Math.random()).toFixed(),
    });
  }
  return arr;
};

module.exports = createPost;