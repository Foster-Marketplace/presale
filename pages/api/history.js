import fs from "fs"

export default function handler(req, res) {
  var historyList = []
  
  if (fs.existsSync('./transactions.json')) {
    let rawdata = fs.readFileSync('./transactions.json');
    historyList = JSON.parse(rawdata);
  }

  res.status(200).json(historyList)
}