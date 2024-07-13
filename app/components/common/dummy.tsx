export const dummyUserProfile = {
  firstName: "John",
  lastName: "Doe",
  birthDate: "1990-01-01",
  citizenId: "1234567890123",
  kycLevel: 0, // kyc level
};
export const dummySignature = {
  content: "signature content",
  imageUrl: "/image/placeholder.png",
};
export const dummyUser = {
  id: 1,
  uuid: 1234,
  isActive: true,
  displayName: "john-doe",
  phone: "0876544567",
  email: "test@gmail.com",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
  discordId: "123456789012345678",
  displayImage: "profile-avatars/profile-3.jpg",
  coverImage: "/image/placeholder.png",
  profile: dummyUserProfile,
  facebookLink: "www.facebook.com",
  xLink: "www.x.com",
  twitchLink: "www.twitch.com",
  website: "https://www.ctrlg.gg",
  whalletAddress: "0x0000000000000000000000000000000000000000",
  privateFields: ["email", "phone", "website"],
  roles: ["admin", "user"],
  signature:
    "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>",
  gameUsernames: [
    {
      game: {
        id: 1,
        name: "Valorant",
        iconUrl: "/image/placeholder.png",
        bannerImageUrl: "/image/placeholder.png",
      },
      username: "valorant-username",
    },
    {
      game: {
        id: 2,
        name: "PubG",
        iconUrl: "/image/placeholder.png",
        bannerImageUrl: "/image/placeholder.png",
      },
      username: "pubg-username",
    },
  ],
};
export const dummyModes = [
  {
    name: "Duo",
    maxPlayer: 2,
  },
  {
    name: "Trio",
    maxPlayer: 3,
  },
  {
    name: "Team",
    maxPlayer: 5,
    isDefault: true,
  },
];

export const dummyRanks = [
  {
    name: "Bronze",
    imageUrl: "/image/placeholder.png",
  },
  {
    name: "Silver",
    imageUrl: "/image/placeholder.png",
  },
  {
    name: "Gold",
    imageUrl: "/image/placeholder.png",
  },
  {
    name: "Platinum",
    imageUrl: "/image/placeholder.png",
  },
  {
    name: "Immortal",
    imageUrl: "/image/placeholder.png",
  },
  {
    name: "Radiant",
    imageUrl: "/image/placeholder.png",
  },
  {
    name: "Ascendant",
    imageUrl: "/image/placeholder.png",
  },
];
export const dummyGames = [
  {
    id: 1,
    name: "Valorant",
    iconUrl: "/image/placeholder.png",
    bannerImageUrl: "/image/placeholder.png",
    maxPlayers: 5,
    ranks: dummyRanks,
    modes: dummyModes,
  },
  {
    id: 2,
    name: "PubG",
    iconUrl: "/image/placeholder.png",
    bannerImageUrl: "/image/placeholder.png",
    maxPlayers: 5,
    ranks: dummyRanks,
    modes: dummyModes,
  },
  {
    id: 3,
    name: "Dota",
    iconUrl: "/image/placeholder.png",
    bannerImageUrl: "/image/placeholder.png",
    maxPlayers: 5,
    ranks: dummyRanks,
    modes: dummyModes,
  },
];
export const dummyRooms = [
  {
    id: 1,
    name: "general",
    nameEN: "general",
    slug: "general",
  },
  {
    id: 2,
    name: "buy sell",
    nameEN: "buy sell",
    slug: "buy-sell",
  },
  {
    id: 3,
    name: "news",
    nameEN: "news",
    slug: "news",
  },
  {
    id: 4,
    name: "tutorial",
    nameEN: "tutorial",
    slug: "tutorial",
  },
  {
    id: 5,
    name: "help",
    nameEN: "help",
    slug: "help",
  },
] as any[];

export const dummyTags = [
  {
    name: "valorantchallenge1",
    counts: 24,
  },
  {
    name: "valorantchallenge2",
    counts: 11,
  },
  {
    name: "valorantchallenge3",
    counts: 20,
  },
  {
    name: "valorantchallenge4",
    counts: 5,
  },
  {
    name: "valorantchallenge5",
    counts: 15,
  },
] as any[];

export const reactionOptions = [
  {
    id: 1,
    name: "like",
    imageUrl: "/image/placeholder.png",
  },
  {
    id: 2,
    name: "love",
    imageUrl: "/image/placeholder.png",
  },
  {
    id: 3,
    name: "haha",
    imageUrl: "/image/placeholder.png",
  },
  {
    id: 4,
    name: "wow",
    imageUrl: "/image/placeholder.png",
  },
  {
    id: 5,
    name: "sad",
    imageUrl: "/image/placeholder.png",
  },
  {
    id: 6,
    name: "angry",
    imageUrl: "/image/placeholder.png",
  },
];

export const dummyReactions = [
  {
    id: 1,
    name: "like",
    image: "/image/placeholder.png",
    count: 3,
  },
  {
    id: 2,
    name: "love",
    image: "/image/placeholder.png",
    count: 4,
  },
  {
    id: 3,
    name: "haha",
    image: "/image/placeholder.png",
    count: 5,
  },
];
export const dummyReactions2 = [
  {
    id: 1,
    name: "like",
    image: "/image/placeholder.png",
    count: 5,
  },
  {
    id: 2,
    name: "love",
    image: "/image/placeholder.png",
    count: 8,
  },
  {
    id: 3,
    name: "haha",
    image: "/image/placeholder.png",
    count: 10,
  },
];
export const dummyComment1 = {
  id: 1,
  index: 1,
  content:
    "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>",
  reactions: dummyReactions,
  author: dummyUser,
  createdAt: "2023-10-6",
  updatedAt: "2023-10-7",
};

export const dummyComment2 = {
  id: 2,
  index: 2,
  anonymous: true,
  content:
    "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p><ul><li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li><li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li></ul>",
  quotedComment: dummyComment1,
  reactions: dummyReactions,
  author: dummyUser,
  createdAt: "2023-10-6",
  updatedAt: "2023-10-7",
};

const dummyCommentItems = [] as any[];
for (let index = 0; index < 12; index++) {
  dummyCommentItems.push({
    ...(index < 6 ? dummyComment1 : dummyComment2),
    id: index + 1,
    index: index + 1,
  });
}

export const dummyComments = {
  webboardId: 1,
  items: dummyCommentItems,
  total: 40,
  totalPages: 10,
  page: 1,
  limit: 20,
};

export const dummyPoll = {
  id: 1,
  options: [
    {
      id: 1,
      name: "John Doe",
      counts: 10,
    },
    {
      id: 2,
      name: "John Doe asdasdasdasdas dsadasdasd",
      counts: 10,
    },
    {
      id: 3,
      name: "John Doe",
      counts: 10,
    },
    {
      id: 4,
      name: "John Doe",
      counts: 10,
    },
  ],
  createdBy: dummyUser,
  createdAt: "2023-10-6",
  updatedAt: "2023-10-7",
};

export const dummyPoll2 = {
  id: 1,
  options: [
    {
      id: 1,
      name: "John Doe",
      counts: 50,
    },
    {
      id: 2,
      name: "John Doe",
      counts: 10,
    },
    {
      id: 3,
      name: "John Doe",
      counts: 0,
    },
    {
      id: 4,
      name: "John Doe",
      counts: 100,
    },
  ],
  createdBy: dummyUser,
  createdAt: "2023-10-6",
  updatedAt: "2023-10-7",
};

export const dummyWebboard = {
  id: 1,
  excerpt: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do",
  content:
    "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p><ul><li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li><li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li></ul>",
  title: "Webboard Title",
  thumbnailImageUrl: "/image/placeholder.png",
  comments: dummyComments,
  commentCounts: 4,
  postRoomIds: [1, 2],
  postRooms: [...dummyRooms].splice(0, 2),
  postGameIds: [1, 2],
  postGames: [...dummyGames].splice(0, 2),
  reactions: dummyReactions,
  tags: ["valorantchallenge1", "valorantchallenge2", "valorantchallenge3"],
  poll: null,
  author: dummyUser,
  createdAt: "2023-10-6",
  updatedAt: "2023-10-7",
};

export const dummyWebboard2 = {
  id: 10,
  excerpt: "lorem ipsum dolor sit amet consectetur adipiscing elit sed do",
  content:
    "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p><ul><li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li><li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li></ul>",
  title: "Webboard Title",
  thumbnailImageUrl: "/image/placeholder.png",
  commentCounts: 5,
  roomIds: [2, 3],
  rooms: [...dummyRooms].splice(2, 2),
  gameIds: [2, 3],
  games: [...dummyGames].splice(2, 2),
  reactions: dummyReactions,
  tags: ["valorantchallenge1", "valorantchallenge2"],
  poll: dummyPoll,
  author: dummyUser,
  createdAt: "2023-10-3",
  updatedAt: "2023-10-10",
};

const dummyFeaturedWebboardItems = [] as any[];
for (let index = 0; index < 8; index++) {
  dummyFeaturedWebboardItems.push({ ...dummyWebboard, id: index + 1 });
}
export const dummyFeaturedWebboards = [...dummyFeaturedWebboardItems];

const dummyWebboardItems = [] as any[];
for (let index = 0; index < 12; index++) {
  dummyWebboardItems.push({
    ...dummyWebboard,
    id: index + 1,
  });
}

export const dummyWebboards = {
  items: dummyWebboardItems,
  total: 40,
  totalPages: 10,
  page: 1,
  limit: 20,
};

// Party related
export const dummyPartyMember = {
  id: 1,
  status: "active",
  userId: 2,
  user: dummyUser,
  username: "test_username",
  phone: "0876544567",
  email: "test@gmail.com",
  discordId: "123456789012345678",
  gameUsername: "game-username",
  metaData: {},
};
const dummyPartyMembers = [] as any[];
for (let index = 0; index < 3; index++) {
  dummyPartyMembers.push({
    ...dummyPartyMember,
    id: index + 1,
    userId: index + 6,
  });
}

export const dummyParty = {
  id: 1,
  isActive: true,
  name: "party name",
  members: dummyPartyMembers,
  ranks: [...dummyRanks].splice(0, 3),
  gameId: 1,
  game: dummyGames[0],
  requiredSlots: 3,
  mode: "team",
  discordUrl: "https://www.discord.com",
  isPrivate: true,
  boostedAt: null,
  createdBy: dummyUser,
  createdAt: "2023-10-3",
  updatedAt: "2023-10-10",
};

export const dummyParty2 = {
  id: 2,
  isActive: false,
  name: "edit party name",
  members: [...dummyPartyMembers].splice(0, 2),
  ranks: [...dummyRanks].splice(0, 3),
  gameId: 1,
  game: dummyGames[0],
  requiredSlots: 3,
  mode: "team",
  discordUrl: "https://www.discord.com/newww",
  isPrivate: true,
  boostedAt: "2023-10-25 17:05:00",
  createdBy: dummyUser,
  createdAt: "2023-10-3",
  updatedAt: "2023-10-10",
};

const dummyPartyItems = [] as any[];
for (let i = 0; i < 10; i++) {
  dummyPartyItems.push({
    ...dummyParty,
    id: i + 1,
    name: `${dummyParty.name} ${i + 1}`,
  });
}

export const dummyPartyItems2 = [] as any[];
for (let i = 0; i < 10; i++) {
  dummyPartyItems2.push({
    ...dummyParty,
    id: i % 2 === 0 ? i + 1 : i + 10,
    name:
      i % 2 === 0
        ? `${dummyParty.name} ${i + 1}`
        : `${dummyParty.name} ${i + 10}`,
    updatedAt: i % 2 === 0 ? "2023-10-10" : "2023-10-11",
  });
}

export const dummyPartyItems3 = [] as any[];
for (let i = 0; i < 10; i++) {
  dummyPartyItems3.push({
    ...dummyParty,
    id: i + 10,
    name: `${dummyParty.name} ${i + 10}`,
    updatedAt: "2023-10-11",
  });
}

export const dummyParties = dummyPartyItems;

export const dummyPartyRequest = {
  id: 1,
  user: dummyUser,
  status: "approved",
  username: "test_username",
  message: "test message",
};

export const dummyPartyRequests = [
  {
    id: 1,
    user: dummyUser,
    status: "pending",
    username: "test_username",
    message: "test message",
  },
  {
    id: 2,
    user: dummyUser,
    status: "approved",
    username: "test_username",
    message: "test message",
  },
  {
    id: 3,
    user: dummyUser,
    status: "rejected",
    username: "test_username",
    message: "test message",
  },
];

export const dummyPartyChats = [
  {
    createdBy: {
      id: 1,
      displayName: "user 1",
      displayImage: "profile-avatars/profile-5.jpg",
    },
    createdAt: "2023-10-29 23:15",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
  },
  {
    createdBy: {
      id: 2,
      displayName: "user 2",
      displayImage: "profile-avatars/profile-3.jpg",
    },
    createdAt: "2023-10-29 23:16",
    message: "test message 2",
  },
  {
    createdBy: {
      id: 3,
      displayName: "user 3",
      displayImage: "profile-avatars/profile-2.jpg",
    },
    createdAt: "2023-10-29 23:17",
    message: "test message 3",
  },
  {
    createdBy: {
      id: 4,
      displayName: "user 1",
      displayImage: "profile-avatars/profile-5.jpg",
    },
    createdAt: "2023-10-29 23:15",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
  },
  {
    createdBy: {
      id: 5,
      displayName: "user 2",
      displayImage: "profile-avatars/profile-3.jpg",
    },
    createdAt: "2023-10-29 23:16",
    message: "test message 2",
  },
  {
    createdBy: {
      id: 6,
      displayName: "user 3",
      displayImage: "profile-avatars/profile-2.jpg",
    },
    createdAt: "2023-10-29 23:17",
    message: "test message 3",
  },
];

export const dummyNotificationItems = [
  {
    id: 3,
    by: null,
    relatedType: "tournament",
    relatedId: 1,
    message: "team-full",
    createdAt: "2023-10-29 23:17",
  },
  {
    id: 2,
    by: dummyUser,
    relatedType: "party",
    relatedPost: 1,
    message: "completed",
    createdAt: "2023-10-29 23:16",
  },
  {
    id: 1,
    by: null,
    relatedType: "tournament",
    relatedPost: 1,
    message: "completed",
    createdAt: "2023-10-29 23:15",
  },
];

export const dummyNotifications = {
  items: dummyNotificationItems,
  total: 40,
  totalPages: 10,
  page: 1,
  limit: 20,
};

export const campaignResult = {
  "00000": {
    title: "ฉายา",
    alias: "ใส่มาเลย ยาวๆๆๆๆ",
  },
  "00001": {
    title: "ฉายา",
    alias: "ใส่มาเลย ยาวๆๆๆๆ",
  },
};
