import { songDetailReq } from '@/api'
export default async (ids: string) => {
  const res = await songDetailReq({ ids })
  const resData = res.data

  return { resData }
}
