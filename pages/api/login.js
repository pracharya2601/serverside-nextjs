
export default function(req, res) {
  if(!req.body) {
    res.statusCode = 404
    res.end("Error")
    return
  }
  
  res.send({
    token: "skdjklsdjlksdjlksjdksjdlsdskldjskjdsl",
    email: req.body.email,
    pass: req.body.password
  })
}