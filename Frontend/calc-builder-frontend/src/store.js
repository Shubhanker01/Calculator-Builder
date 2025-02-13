import { create } from 'zustand'

const useCalculatorStore = create((set) => (
    {
        outputItems: [],
        setOutputItems: (items) => set({ outputItems: items })
    }
))

export default useCalculatorStore