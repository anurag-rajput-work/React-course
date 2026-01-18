import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrency from './hooks/usecurrency'

function App() {
    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState('USD')
    const [to, setTo] = useState('INR')
    const [convertedAmount, setConvertedAmount] = useState(0)

    let currencyInfo = useCurrency(from)
    let options = Object.keys(currencyInfo)

    let swap = () => {
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }

    let convert = () => {
        if (!currencyInfo[to]) return
        let rate = currencyInfo[to]
        setConvertedAmount(amount * rate)
    }

    return (
        <div
            className="w-full min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: "url('https://media.istockphoto.com/id/2208925074/vector/global-financial-network-and-digital-currency-exchange-vector-illustration.jpg?s=612x612&w=0&k=20&c=F_y327UEhSAcRiHBykqbK5JEd6HxzAdvj6DI6mv5QPE=')"
            }}
        >
            <div className="w-full max-w-md mx-auto bg-white/20 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        convert()
                    }}
                >
                    {/* From Input */}
                    <div className="mb-5">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(cur) => setFrom(cur)}
                            selectedCurrency={from}
                            onAmountChange={(amt) => setAmount(amt)}
                        />
                    </div>

                    {/* Swap Button */}
                    <div className="flex justify-center mb-5">
                        <button
                            type="button"
                            onClick={swap}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition transform hover:scale-105"
                        >
                            ⇄ Swap
                        </button>
                    </div>

                    {/* To Input */}
                    <div className="mb-5">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            amountDisabled={true}
                            currencyOptions={options}
                            onCurrencyChange={(cur) => setTo(cur)}
                            selectedCurrency={to}
                        />
                    </div>

                    {/* Convert Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white font-semibold py-3 rounded-xl shadow-lg transition-transform transform hover:scale-105"
                    >
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default App
