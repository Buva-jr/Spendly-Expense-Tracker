import { useTransactions } from "../context/TransactionContext";

function DashBoard(){
    const { transactions } = useTransactions();


    const income = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

    const expense = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

    const balance = income - expense


    return(
        <>
        <div className="min-h-screen bg-gray-950 text-white p-8 ml-56 flex flex-col">
            <h1 className="text-3xl font-bold m-6"> Dashborad </h1>

            <div className="flex gap-4">

            <div className="bg-gray-800 rounded-xl p-6 flex-1">
                <p className="text-gray-400 text-sm mb-2">Total Balance</p>
                <h2 className={`text-2xl font-bold ${balance >= 0 ? 'text-white' : 'text-red-400'}`}>
                    ${balance.toLocaleString()}
                </h2>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 flex-1">
                <p className="text-gray-400 text-sm mb-2">Expense</p>
                <h2 className="text-2xl font-bold text-red-400">
                    ${expense.toLocaleString()}
                </h2>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 flex-1">
                <p className="text-gray-400 text-sm mb-2">Income</p>
                <h2 className="text-2xl font-bold text-teal-400">
                    ${income.toLocaleString()}
                </h2>
            </div>
            </div>

            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Recent Transaction</h2>
                {transactions.length === 0 ? (
                    <p className="text-gray-400"> No Transaction yet. Add one !</p>
                ) : (
                    transactions.slice(-5).reverse().map(t => (
                        <div key={t.id} className="bg-gray-800 rounded-xl p-4 mb-2 flex justify-between">

                            <div>
                                <p className="font-medium">{t.name}</p>
                                <p className="text-gray-400 text-sm">{t.category},  {t.date}</p>
                            </div>
                            <p className={`font-bold text-lg ${t.type === 'income' ? 'text-green-400' : 'text-red-400'}`}>
                                {t.type === 'income' ? '+' : '-'} ${(t.amount || 0).toLocaleString()}
                            </p>
                        </div>
                    ))
                )}

            </div>
            </div>
        </>
    );

}

export default DashBoard