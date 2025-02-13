import { create } from 'zustand'

const useCalculatorStore = create((set) => (
    {
        outputItems: [],
        expression: '',
        setOutputItems: (items) => set({ outputItems: items }),
        setExpression: (value) =>
            set((state) => ({ expression: state.expression + value }))
    }
))

export default useCalculatorStore