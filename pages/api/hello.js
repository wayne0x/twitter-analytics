/*
 * @Description: 
 * @Author: wangyigang
 * @Date: 2022-08-12 08:57:17
 * @LastEditTime: 2022-08-24 14:55:52
 * @LastEditors: wangyigang
 */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log(req.method,"测试看看")
  res.status(200).json({ name: 'John Doe' })
}
