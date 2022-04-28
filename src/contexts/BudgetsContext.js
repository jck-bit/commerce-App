import React, { useContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'

const BudgetsContext = React.createContext()

export  function useBudgets (){
   return useContext(BudgetsContext)
}
// what the budget provider does is it takes the value of the context and passes it down to the children
// {
//     id:
//     name:
//     max
// }

// {
//     id:
//     budgetId:
//     amount:
//     description:
// }

export const BudgetsProvider = ({children}) => {
   const [budgets,setBudgets] = useState([])
   const [expenses, setExpenses] = useState([])

   //get the budget by id
   function getBudgetsExpenses(budgetId){
       return expenses.filter(expense => expense.budgetId === budgetId) 
   }

   function addExpense({budgetId, amount, description}){
    setExpenses(prevExpenses =>{
        return [...prevExpenses, {id:(uuidv4), amount, budgetId, description}]
    })
  }
//Adding a budget
  function  addBudget({name,max}){
     setBudgets(prevBudgets =>{
         // checking names of previous budgets...if names are similar and max is less than previous budget max, then return the previous budget
         if(prevBudgets.find(budget => budget.name === name)){
             return prevBudgets
         }
         return [...prevBudgets, {id:(uuidv4),name, max }]
     })
  }

//deleting budget
//filtering out the budget that we want to delete
  function  deleteBudget({id}){
      setBudgets(prevBudgets =>{
          prevBudgets.filter(budget => budget.id !== id)
      }) 
   }

//deleting  Expense
//filtering out the expense that matches the id
  function  deleteExpense ({id}){
        setExpenses(prevExpenses =>{
            prevExpenses.filter(expense => expense.id !== id)
        })
  }
  return <BudgetsContext.Provider value={{
    budgets,
    expenses,
    getBudgetsExpenses,
    addExpense,
    addBudget,
    deleteBudget,
    deleteExpense,
}}>{children}</BudgetsContext.Provider>
}
