const data = [
  {
    name: "apple",
    type: "fruit",
    sweet: true,
  },
  {
    name: "banana",
    type: "berry",
    sweet: true,
  },
  {
    name: "Tomato",
    type: "berry",
    sweet: false,
  },
  {
    name: "Watermelon",
    type: "fruit",
    sweet: true,
  },
]

export default function(req, res) {  
  res.json({data: data});
}