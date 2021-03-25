import req from './http'
export const playlistHotReq = () => req('/playlist/hot')

// 77470

/**
 * 推荐歌单
 * 说明 : 调用此接口 , 可获取推荐歌单
 * @param limit ?可选参数 : limit: 取出数量 , 默认为 30 (不支持 offset)
 */
export const personalizedReq = (params: { limit?: number }) =>
  req('/personalized', params, 'GET')

/**
 * 推荐新音乐
 * @param limit 可选参数
 */
export const personalizedNewSongReq = (params: { limit?: number }) =>
  req('/personalized/newsong', params, 'GET')

/**
 * 歌曲详情
 * 说明 : 调用此接口
 *  传入音乐 id(支持多个 id, 用 , 隔开),
 *  可获得歌曲详情(注意:歌曲封面现在需要通过专辑内容接口获取)
 *  调用例子 : /song/detail?ids=347230,/song/detail?ids=347230,347231
 * @param ids 音乐 id, 如 ids=347230
 */
export const songDetailReq = (params: { ids: number | string }) =>
  req('/song/detail', params, 'GET')

/**
 * 获取歌单详情
 * 调用例子 : /playlist/detail?id=24381616
 * @param id 必选参数  歌单 id
 * @param s  可选参数 : s : 歌单最近的 s 个收藏者,默认为8
 */
export const playlistDetailReq = (params: { id: number; s?: number }) =>
  req('/playlist/detail', params, 'GET')

/**
 *  搜索
 *  说明 : 调用此接口 , 传入搜索关键词可以搜索该音乐 / 专辑 / 歌手 / 歌单 / 用户 , 关键词可以多个 , 以空格隔开 , 如 " 周杰伦 搁浅 "( 不需要登录 ), 搜索获取的 mp3url 不能直接用 , 可通过 /song/url 接口传入歌曲 id 获取具体的播放链接
    必选参数 : keywords : 关键词
    可选参数 : limit : 返回数量 , 默认为 30 offset : 偏移数量，用于分页 , 如 : 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
    type: 搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
    接口地址 : /search 或者 /cloudsearch(更全)
    调用例子 : /search?keywords= 海阔天空 /cloudsearch?keywords= 海阔天空
 * @param keywords  必选参数 : keywords : 关键词
 * @param limit   可选参数
 * @param type   搜索类型；默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 1018:综合
 */
export const searchReq = (params: {
  keywords: string;
  limit?: number;
  type?: number;
}) => req('/search', params, 'GET')

/**
 * 热搜列表
 * 说明 : 调用此接口,可获取热门搜索列表
 */
export const searchHotReq = () => req('/search/hot')

/**
 * 搜索建议
 * 说明 : 调用此接口 , 传入搜索关键词可获得搜索建议 , 搜索结果同时包含单曲 , 歌手 , 歌单 ,mv 信息
 * 调用例子 : /search/suggest?keywords= 海阔天空 /search/suggest?keywords= 海阔天空&type=mobile
 * @param keywords :必选参数 关键词
 * @param type ?:可选参数 如果传 'mobile' 则返回移动端数据
 */
export const searchSuggestReq = (params: { keywords: string; type?: string }) =>
  req('/search/suggest', params, 'GET')

/**
 * 获取音乐 url
 * 说明 : 使用歌单详情接口后,
 * 能得到的音乐的 id, 但不能得到的音乐 url, 调用此接口, 传入的音乐 id( 可多个 , 用逗号隔开 ),
 * 可以获取对应的音乐的 url,
 * 未登录状态或者非会员返回试听片段(返回字段包含被截取的正常歌曲的开始时间和结束时间)
 * @param id : 音乐 id
 * @param br?: 可选参数 码率,默认设置了 999000 即最大码率,如果要 320k 则可设置为 320000,其他类推
 */
export const songUrlReq = (params: { id: number; br?: number }) =>
  req('/song/url', params, 'GET')

/**
 * 音乐歌词
 *  说明 :调用此接口 , 传入音乐 id 可获得对应音乐的歌词
 * @param id : 音乐 id
 */
export const lyricReq = (params: { id: number }) => req('/lyric', params, 'GET')

/**
 * 歌曲评论
 *  说明 : 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该音乐的所有评论 ( 不需要登录 )
 * @param id : 音乐 id
 * @param limit?: 可选参数 : limit: 取出评论数量 , 默认为 20
 */
export const commentMusicReq = (params: { id: number; limit?: number }) =>
  req('/comment/music', params, 'GET')

/**
 * 相似歌单
 *  说明 : 调用此接口 , 传入歌曲 id, 可获得相似歌单
 * @param id : 音乐 id
 */
export const simiPlaylistReq = (params: { id: number }) =>
  req('/simi/playlist', params, 'GET')

/**
 * 相似音乐
 *  说明 : 调用此接口 , 传入歌曲 id, 可获得相似歌曲
 * @param id : 音乐 id
 */
export const simiSongReq = (params: { id: number }) =>
  req('/simi/song', params, 'GET')
