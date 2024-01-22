import { useState } from 'react'

export const useSelectedCards = <T,>() => {
  const [selectedCards, setSelectedCards] = useState<T[]>([])

  const toggleCardSelection = (card: T) => {
    setSelectedCards((prevState) => {
      const newState = new Set(prevState)

      if (newState.has(card)) {
        newState.delete(card)
      } else {
        newState.add(card)
      }

      return Array.from(newState)
    })
  }

  return {
    selectedCards,
    toggleCardSelection,
  }
}
