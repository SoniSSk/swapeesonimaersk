// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default function handler(req, res) {
  if (req.method === 'POST'){
    const {name,email,password } =  req.body;
    //console.log(name);
  console.log(req.body);
  res.status(200).json( req.body)
}


}
