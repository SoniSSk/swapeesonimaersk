// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction


// export default function handler(req, res) {
//   if (req.method === 'POST'){
//     const {name,email,password } =  req.body;
//     //console.log(name);
//   console.log(req.body);
//   res.status(200).json( req.body)
// }


// }


import dbConnect from '../../lib /dbConnect';
import User from '../../models/user'

export default async function handler (req, res) {
  const { method } = req

  await dbConnect()
 
  console.log(method);
  switch (method) {
    case 'POST':
      
      try {
        const {name, email, password, _id} = JSON.parse(req.body)
        const filter = { _id : _id };
        const update = { name:name, email:email, password:password};

        const user = await User.findOneAndUpdate(filter, update);
        res.status(201).json({ success: true, data: user })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}