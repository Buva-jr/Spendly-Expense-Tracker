import { useTransactions } from "../context/TransactionContext"

function History(){
    const { transactions, deleteTransaction }= useTransactions()
    return(
        <>
        <div className="ml-56 min-h-screen bg-gray-950 text-white font-bold p-8">
            <h1 className="text-3xl text-white">History</h1>

            <table className="w-full mt-6 border-collapse">
                <thead>

                <tr>
                    <th className="text-left text-gray-400 text-sm pb-3 border-b border-gray-700">Description</th>
                    <th className="text-left text-gray-400 text-sm pb-3 border-b border-gray-700">Category</th>
                    <th className="text-left text-gray-400 text-sm pb-3 border-b border-gray-700">Date</th>
                    <th className="text-left text-gray-400 text-sm pb-3 border-b border-gray-700">Type</th>
                    <th className="text-left text-gray-400 text-sm pb-3 border-b border-gray-700">Amount</th>
                </tr>

                </thead>
                <tbody className="border-bold border-gray-800">

                    {transactions.map( t => (
                        <tr key={t.id}>
                            <td className="py-3 text-sm text-gray-300">{t.name}</td>
                            <td className="py-3 text-sm text-gray-300">{t.category}</td>
                            <td className="py-3 text-sm text-gray-300">{t.date}</td>
                            <td className={`py-3 text-sm ${t.type === 'income' ? 'text-green-500' : 'text-red-400'}`}>{t.type}</td>
                            <td className="py-3 text-sm text-gray-300">{t.amount}</td>
                            <td> <button onClick={() => deleteTransaction(t.id)} className="text-red-500 hover:text-red-300 text-sm"> Delete </button></td>
                        </tr>
                    ))}

                </tbody>

            </table>

        </div>
        </>
    );
}

export default History