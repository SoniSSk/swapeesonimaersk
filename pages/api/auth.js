

import dbConnect from '../../lib/dbConnect';
import User from '../../models/user'

export default async function handler (req, res) {
  const { method } = req

  await dbConnect()
 
  console.log(method);
  switch (method) {
    case 'POST':
      try {
        const users = await User.find(JSON.parse(req.body))
        res.status(200).json({ success: true, data: users })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
   
    default:
      res.status(400).json({ success: false })
      break
  }
}
