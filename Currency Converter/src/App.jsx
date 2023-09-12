import { useState , useEffect} from "react"
import InputBox from "./Components/InputBox"


function App() {
  
  const [from , setFrom] = useState("usd")
  const [to , setTo] = useState("inr")
  const [amount , setAmount] = useState(0)
  const [convertedAmount , setConvertedAmount] = useState(0)
  const [data , setData] = useState({})

  useEffect(() => {

    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
    .then((res) => res.json())
    .then((res) => setData(res[from]))
  
  } , [from])
  
  const currencyList = Object.keys(data)
  console.log(data)

  return (
    <>
      <div className="w-screen h-screen bg-slate-900 flex flex-col items-center justify-center border-2">
        
        <InputBox 
          label="From"
          currency={from}
          amount = {amount}
          onAmountChange={(amount) => setAmount(amount)}
          selectCurrency={from}
          onCurrencyChange={(e) => setFrom(e)}
          list={currencyList}
        />
        
        <button 
          onClick={() => {
            setFrom(to)
            setTo(from)
          }}
          className="bg-orange-500 opacity-100 font-medium px-3 py-2 text-xl rounded-md fixed -translate-x-1/2 -translate-y-1/2 left-1/2 top-[46%] z-10"
        >
          Swap
        </button>

        <InputBox 
          label="To"
          currency={to}
          amount={convertedAmount}
          selectCurrency={to}
          onCurrencyChange={(e) => setTo(e)}
          list={currencyList}
        />

        <button 
          className="bg-green-500 w-[50%] my-3 p-1 rounded-md font-medium text-xl"
          onClick={() => {
            setConvertedAmount(amount*data[to])
          }}  
        >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </div>
    </>
  )
}

export default App
