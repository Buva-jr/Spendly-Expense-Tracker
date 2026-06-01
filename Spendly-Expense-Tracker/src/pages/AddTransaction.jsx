import { useState } from "react";
import { useTransactions } from "../context/TransactionContext"



function AddTransaction(){

    const { addTransaction } = useTransactions()
    const [type, setType] = useState('expense')
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const [category, setCategory]= useState('food')
    const [note, setNote] = useState('')

    const handleSubmit = () => {
        if( !amount || !date || !description || !category){
            alert("@please fill all field !")
            return
        }
        const newTransaction = {
            name: description,
            type: type,
            amount: Number(amount),
            date: date,
            category: category,
            note: note
        }

        addTransaction(newTransaction)

        setDescription('');
        setAmount('');
        setDate('');
        setCategory('food');
        setNote('');
        
        console.log('New Transaction', newTransaction)
        alert('Transaction Added sucessfully ✅')
    }

    return(
        <>
        <div className="ml-56 min-h-screen bg-gray-950 text-white font-bold p-8">
            <h1 className="text-3xl text-white">Add Transaction</h1>

            <div className="bg-gray-900 rounded-2xl p-8  max-w-md max-auto mt-6 ml-100">

                <button className={`w-45 py-2 rounded-xl mr-2 mb-4 font-bold border-2 ${type === 'income' ? 'bg-teal-900 text-teal-300 border-teal-500' : 'bg-transparent text-gray-400 border-gray-600'}`}onClick={() => setType('income')}>Income</button>
                <button className={`w-45 py-2 rounded-xl mb-4 font-bold border-2 ${type === 'expense' ? 'bg-red-900 text-red-300 border-red-500' : 'bg-transparent text-gray-400 border-gray-600'}`} onClick={() => setType('expense')}>Expense</button> <br />

                <label htmlFor="Description"  className="text-gray-400 text-sm mb-1 block">Description</label>
                <input type="text" className="w-full bg-gray-800 text-white rounded-xl px-4 py-3 ouline-none border border-gray-700 mb-4" value={description} onChange={(e) => setDescription(e.target.value)}/>

                <label htmlFor="Amount" className="text-gray-400 text-sm mb-1 block" >Amount</label>
                <input type="number" className="w-full bg-gray-800 text-white rounded-xl px-4 py-3 ouline-none border border-gray-700 mb-4" value={amount} onChange={(e) => setAmount (e.target.value)}/>

                <label htmlFor="Date"  className="text-gray-400 text-sm mb-1 block">Date</label>
                <input type="date"className="w-full bg-gray-800 text-white rounded-xl px-4 py-3 ouline-none border border-gray-700 mb-4" value={date} onChange={(e) => setDate (e.target.value)}/>

                <label htmlFor="Category"  className="text-gray-400 text-sm mb-1 block" >Category</label>
                <select name="" id="" className="w-full bg-gray-800 text-white rounded-xl px-4 py-3 outline-none border border-gray-700 mb-4" value={category} onChange={(e) =>setCategory (e.target.value)}>
                    <option>Food</option>
                    <option>Travel</option>
                    <option>Bills</option>
                    <option>Salary</option>
                    <option>Entertainment</option>
                    <option>Others...</option>
                    </select>

                <label htmlFor="note"  className="text-gray-400 text-sm mb-1 block" >Note (optional)</label>
                <input type="text"  className="w-full bg-gray-800 text-white rounded-xl px-4 py-3 ouline-none border border-gray-700 mb-4" value={note} onChange={(e) => setNote (e.target.value)}/>

                <button onClick={handleSubmit}  className="w-full bg-violet-600 text-white font-bold py-3 rounded-xl mt-2">Submit</button>


            </div>

        </div>
        </>
    );

}

export default AddTransaction
