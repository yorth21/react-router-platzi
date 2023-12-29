import { useEffect, useState } from 'react'

function useLocalStorage (itemName, initialValue) {
  const [item, setItem] = useState(initialValue)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = window.localStorage.getItem(itemName)

        if (!localStorageItem) {
          window.localStorage.setItem(itemName, JSON.stringify(initialValue))
        } else {
          setItem(JSON.parse(localStorageItem))
        }
      } catch (error) {
        const localStorageItem = []
        window.localStorage.setItem(itemName, JSON.stringify(localStorageItem))
        setItem(JSON.parse(localStorageItem))
      } finally {
        setLoading(false)
      }
    }, 1000)
  }, [initialValue, itemName])

  const saveItem = (newItem) => {
    window.localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return {
    item,
    loading,
    saveItem
  }
}

export { useLocalStorage }
