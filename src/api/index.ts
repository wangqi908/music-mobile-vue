import req from './http'
export const playlistHotReq = () => req('/playlist/hot')

interface Params {
  limit?: number;
  ids?: number | string;
  id?: number | string;
}
export const personalizedReq = (params: Params) =>
  req('/personalized', params, 'POST')

export const personalizedNewSongReq = (params: Params) =>
  req('/personalized/newsong', params, 'POST')

export const songDetailReq = (params: Params) =>
  req('/song/detail', params, 'POST')

export const playlistDetailReq = (params: Params) =>
  req('/playlist/detail', params, 'POST')
