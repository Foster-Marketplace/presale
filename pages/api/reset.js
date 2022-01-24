import fs from "fs"

export default function handler(req, res) {
  if (fs.existsSync('./transactions.json')) {
    fs.writeFile('./transactions.json', JSON.stringify([]), 'utf8', (err) => { if (err) console.log(err) });
  }

  res.status(200).json("success")
}