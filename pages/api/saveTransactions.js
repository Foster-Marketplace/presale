import fs from "fs"

var historyList = []

if (fs.existsSync('./transactions.json')) {
  let rawdata = fs.readFileSync('./transactions.json');
  historyList = JSON.parse(rawdata);
}

export default function handler(req, res) {
  const data = req.body;

  historyList.push({
    date: new Date(),
    transactionAddress: data.transaction,
    walletAddress: data.wallet,
    solPrice: data.solPrice,
    solAmount: data.solAmount,
    liftAmount: data.liftAmount
  });

  fs.writeFile('./transactions.json', JSON.stringify(historyList), 'utf8', (err) => { if (err) console.log(err) });

  res.status(200).json("success")
}