import { useContext, createContext, useState, useEffect } from "react";
import { getAllTransactions, addTransaction as addApi, deleteTransaction as deleteApi } from "../services/apiServices";

const TransactionContex = createContext()

    export function TransactionProvider ({ children }) {
        const [transactions, setTransactions] = useState([])
        const [budgets, setBudgets]= useState([])

        useEffect(() => {
            getAllTransactions()
            .then(res => setTransactions(res.data))
            .catch(err => console.log(err))
        }, [])

        const addTransaction = (newTransaction) => {
            const payload = {
                name: newTransaction.name,
                amount: parseFloat (newTransaction.amount),
                type: newTransaction.type,
                category: newTransaction.category,
                date: newTransaction.date,
                note: newTransaction.note
            };
        

             addApi(payload)
             .then(res => setTransactions([...transactions, res.data]))
             .catch(err => console.log(err))
        };

        const deleteTransaction = (id) => {
            deleteApi(id)
            .then(() => setTransactions(transactions.filter(t => t.id !== id)))
            .catch(err => console.log(err))
        }

        const addBudget = (newBudget) => {
            setBudgets([...budgets, newBudget])
        }

        const updateBudgetLimit = (category, newLimit) => {
            setBudgets(budgets.map( b => 
                b.category === category ? { ...b , limit: newLimit} : b
            ))
        }

        const deleteBudget = (category) => {
            setBudgets(budgets.filter(b => b.category !== category))
        }

        return (
            <TransactionContex.Provider value={{ transactions, addTransaction, deleteTransaction, budgets, addBudget, updateBudgetLimit, deleteBudget }}>
                {children}
            </TransactionContex.Provider>
        )
    }

export const useTransactions = () => useContext(TransactionContex)



    


