const { faker } = require('@faker-js/faker');

const createComment = (postId, amount) => {
  const arr = [];
  for (let i = 0; i < amount; i++) {
    arr.push({
      id: faker.string.uuid(),
      post_id: postId,
      author_id: faker.string.uuid(),
      author: faker.person.firstName(),
      avatar: faker.image.avatar(),
      content: faker.lorem.paragraph(),
      created: Date.now() - (i * 10000 * Math.random()).toFixed(),
    });
  }
  return arr;
};

module.exports = createComment;