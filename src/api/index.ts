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
 */
export const personalizedNewSongReq = (params: Params) =>
  req('/personalized/newsong', params, 'POST')

/**
 * 歌曲详情
 * @param params
 */
export const songDetailReq = (params: Params) =>
  req('/song/detail', params, 'POST')

/**
 * 推荐歌单
 * @param params
 */
export const playlistDetailReq = (params: Params) =>
  req('/playlist/detail', params, 'POST')

interface Search {
  keywords: string;
  limit?: number | string;
  offset?: number | string;
  type?: string;
}
/**
 *  搜索
 *  说明 : 调用此接口 , 传入搜索关键词可以搜索该音乐 / 专辑 / 歌手 / 歌单 / 用户 , 关键词可以多个 , 以空格隔开 , 如 " 周杰伦 搁浅 "( 不需要登录 ), 搜索获取的 mp3url 不能直接用 , 可通过 /song/url 接口传入歌曲 id 获取具体的播放链接
    必选参数 : keywords : 关键词
    可选参数 : limit : 返回数量 , 默认为 30 offset : 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
    type: 搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
    接口地址 : /search 或者 /cloudsearch(更全)
    调用例子 : /search?keywords= 海阔天空 /cloudsearch?keywords= 海阔天空
 * @param params
 */
export const searchReq = (params: Search) => req('/search', params, 'POST')

/**
 * 热搜列表
 */
export const searchHotReq = () => req('/search/hot')

/**
 * 搜索建议
 * @param keywords :必选参数 关键词
 * @param type :可选参数 如果传 'mobile' 则返回移动端数据
 */
export const searchSuggestReq = (params: Search) =>
  req('/search/suggest', params, 'POST')
