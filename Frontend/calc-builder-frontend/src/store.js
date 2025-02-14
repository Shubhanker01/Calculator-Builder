import { create } from 'zustand'

const useCalculatorStore = create((set) => (
    {
        outputItems: [],
        expression: '',
        setOutputItems: (items) => set({ outputItems: items }),
        setExpression: (value) =>
            set((state) => ({ expression: state.expression + value })),
        clearExpression: () => set({ expression: '' }),
        calculateResult: () =>
            set((state) => {
                try {
                    return { expression: eval(state.expression).toString() };
                } catch {
                    return { expression: 'Error' }
                }
            })
    }
))

export default useCalculatorStore