import { songDetailReq } from '@/api'
export default async (id: string) => {
  const res = await songDetailReq({ ids: id })
  const resData = res.data

  return { resData }
}
