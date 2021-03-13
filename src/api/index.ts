import req from './http'
export const playlistHotReq = () => req('/playlist/hot')

interface Params {
  limit?: number;
  ids?: number | string;
  id?: number | string;
}
export const personalizedReq = (params: Params) =>
  req('/personalized', params, 'POST')

/**
 * 最新音乐
 * @param params
 * @returns
 */
export const personalizedNewSongReq = (params: Params) =>
  req('/personalized/newsong', params, 'POST')

/**
 * 歌曲详情
 * @param params
 * @returns
 */
export const songDetailReq = (params: Params) =>
  req('/song/detail', params, 'POST')

/**
 * 推荐歌单
 * @param params
 * @returns
 */
export const playlistDetailReq = (params: Params) =>
  req('/playlist/detail', params, 'POST')
