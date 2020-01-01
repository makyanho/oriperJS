const express = require('express');

const router = express.Router();

const character = {
  name: '角色名字',
  img: ['/images/dummy/character.png'],
  desc: '角色詳細設定',
  tags: ['tag1', 'tag2', 'tag3', 'tag4'],
  createdAt: '2020/1/1',
  freetalk: '作者的話',
  user: {
    id: 1,
    name: '用戶名稱',
    profilePic: '/images/dummy/profilePic.jpg'
  },
  attrs: {
    性別: '女',
    種族: '人類',
    生日: null,
    身高: null,
    體重: null,
    職業: null
  },
  relatedCharacters: [
    {
      name: '角色名字',
      img: '/images/dummy/profilePic.jpg',
      relation: 'CP'
    },
    {
      name: '角色名字',
      img: '/images/dummy/profilePic.jpg',
      relation: '哥'
    }
  ]
};

router.get('/characters/:id', (req, res) => {
  res.send(character);
});

module.exports = router;
