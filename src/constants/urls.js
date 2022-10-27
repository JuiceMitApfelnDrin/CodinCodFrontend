/*
 ----------------------------------
 Frontend urls
 ----------------------------------
*/
export const URLS = {
  // header URLS
  HOME: "/",
  PROFILE: "/profile/",
  INBOX: "/inbox/",
  SIGNOUT: "/signout/",

  // community URLS
  BLOG: "/community/blog/",
  FORUM: "/community/forum/",
  LEADERBOARD: "/community/leaderboard/",

  // account URLS
  PREFERENCES: "/account/preferences/",
};

/*
 ----------------------------------
 Backend urls
 ----------------------------------
*/

// FIXME: find a different way
// FIXME: create hooks for different backend calls

const BASE_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
export const BACKEND_URLS = {
  users: BASE_BACKEND_URL + "users",
  usersBySubstringInNickname: BASE_BACKEND_URL + "users?substringInNickname=",
  userByNickname: BASE_BACKEND_URL + "users?nickname=",
  userByEmail: BASE_BACKEND_URL + "users?email=",
  register: BASE_BACKEND_URL + "register",
};
