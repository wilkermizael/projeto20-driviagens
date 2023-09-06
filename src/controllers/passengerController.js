export async function createPassenger(req,res){
 console.log(req.body)

    try {
     
      res.sendStatus(201);
    } catch (error) {
      console.log(error);
      res.status(500).send(error.message);
    }
}
