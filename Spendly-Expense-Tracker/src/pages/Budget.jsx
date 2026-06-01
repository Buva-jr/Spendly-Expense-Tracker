import { useState } from "react";
import { useTransactions } from "../context/TransactionContext";


function Budget(){

    const { transactions, budgets, addBudget, updateBudgetLimit, deleteBudget } = useTransactions()
    const [ newCategory, setNewCategory] = useState('')
    const [ newLimit, setNewLimit ] = useState('')

    const getSpend = (category) =>{
        return transactions
            .filter(t => t.category && t.category.toLowerCase() === category.toLowerCase() && t.type === 'expense')
            .reduce((sum, t) => sum + t.amount, 0)
    }

    const handleAddBudget = () => {
        if( !newCategory || !newLimit) return
        addBudget({category : newCategory.toLowerCase(), limit: Number(newLimit)})
        setNewCategory('')
        setNewLimit('')
    }

    return(
        <>
        <div className="ml-56 min-h-screen bg-gray-950 text-white font-bold p-8">
            <h1 className="text-3xl text-white">Budget</h1> 

            <div className="bg-gray-800 rounded-xl p-4 mb-6 flex gap-3">
                <input type="text" placeholder="catagory (e.g. Food, Travel)" value={newCategory} onChange={(e) => setNewCategory(e.target.value)}
                className="bg-gray-700 text-white rounded-lg px-3 py-2 w-full outline-none"/>

                <input type="number" placeholder="   Limit ($)" value={newLimit} onChange={(e) => setNewLimit(e.target.value)}
                className="bg-gray-700 text-white rounded-lg ppx-3 py-2 w-fill outline-none" />

                <button onClick={handleAddBudget} className=" bg-violet-600 text-white px-4 py-2 rounded-lg">Add</button>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {budgets.map(b => {
                    const Spend = getSpend(b.category) || 0
                    const percent =b.limit > 0 ? Math.min((Spend / b.limit * 100), 100) : 0

                    const getBarColor = (percent) => {
                        if(percent === 0) return 'bg-gray-600'
                        if(percent <= 60) return 'bg-teal-300'
                        if(percent <= 80 ) return 'bg-yellow-400'
                        return 'bg-red-500'
                    }
                     const getTextColor = (percent) => {
                        if(percent <= 60) return 'text-teal-400'
                        if(percent <= 80 ) return 'text-yellow-400'
                        return 'text-red-400'
                     }
                    const isOver = Spend > b.limit
                    return(
                        <div key={b.category} className=" bg-gray-800 rounded-xl p-5">
                            <div className="flex justify-between mb-1">
                                <p className="capitalize"> {b.category}</p>
                                <p className={getTextColor(percent)}> ${Spend} / ${b.limit}</p>
                                <button className="text-red-400 text-sm hover:text-red-300" onClick={() => deleteBudget(b.category)}> Delete</button>
                                
                                 </div>

                                 <div className="w-full bg-gray-700 rounded-full h-3 mt-2 overflow-hidden">
                                    <div className={`h-3 rounded-full ${getBarColor(percent)}`} style={{width: `${percent}%`}}>
                                         </div>
                                 </div>
                             </div>
                    )
                }
                )}

            </div>

            </div>
        </>
    );
}

export default Budget