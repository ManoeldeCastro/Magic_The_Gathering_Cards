export const getFromLocalStorage = (name: string, isObject: boolean = false): string | object | null => {
  const item = window.localStorage.getItem(name)

  if (item === null) {
    return null
  }

  return isObject ? JSON.parse(item) : item
}

export const saveToLocalStorage = (name: string, data: any): any => {
  const payload = typeof data === 'object' ? JSON.stringify(data) : data
  return window.localStorage.setItem(name, payload)
}


export const removeFromLocalStorage = (name: string): any => {
  return window.localStorage.removeItem(name)
}