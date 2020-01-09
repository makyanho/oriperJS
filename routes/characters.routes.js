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
  characters: [
    {
      id: 1,
      name: '角色名字',
      imageUrl: '/images/dummy/profilePic.jpg',
      relation: 'CP'
    },
    {
      id: 2,
      name: '角色名字',
      imageUrl: '/images/dummy/profilePic.jpg',
      relation: '哥'
    }
  ],
  works: [
    {
      id: 11,
      type: 'work',
      summary: '這是總結，測試一下斷行，總結目測只能塞廿字。',
      title: '最新名稱',
      author: '作者名稱',
      cmt: 99,
      fav: 99
    },
    {
      id: 12,
      type: 'work',
      summary: '這是總結，測試一下斷行，總結目測只能塞廿字。',
      title: '小說名稱',
      author: '作者名稱',
      cmt: 99,
      fav: 99
    },
    {
      id: 19,
      type: 'work',
      imageUrl: '/images/dummy/artwork.jpg',
      title: '插畫名稱',
      author: '作者名稱',
      cmt: 99,
      fav: 99
    },
    {
      id: 20,
      type: 'work',
      imageUrl: '/images/dummy/artwork.jpg',
      title: '插畫名稱',
      author: '作者名稱',
      cmt: 99,
      fav: 99
    }
  ],
  projects: [
    {
      id: 1,
      type: 'project',
      title: '企劃名稱',
      date: '2020/01/01',
      cmt: 99,
      fav: 99
    },
    {
      id: 2,
      type: 'project',
      title: '企劃名稱2',
      date: '2020/01/01',
      cmt: 99,
      fav: 99
    }
  ],
  comments: [
    {
      id: 1,
      user: {
        id: 1,
        name: '使用者名稱',
        profilePic: '/images/dummy/profilePic.jpg'
      },
      date: '2020/01/01',
      content: '好棒棒'
    },
    {
      id: 2,
      user: {
        id: 1,
        name: '使用者名稱',
        profilePic: '/images/dummy/profilePic.jpg'
      },
      date: '2020/01/01',
      content: '好棒棒2'
    }
  ],
  recommend: [
    {
      id: 1,
      name: '角色名字',
      imageUrl: '/images/dummy/profilePic.jpg'
    },
    {
      id: 2,
      name: '角色名字',
      imageUrl: '/images/dummy/profilePic.jpg'
    }
  ]
};

router.get('/:id', (req, res) => {
  res.send(character);
});

module.exports = router;
