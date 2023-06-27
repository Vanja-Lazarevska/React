

export const FetchFunction = async (URL, setterFunction) => {
    const response = await fetch(URL)
    const result = await response.json()
    setterFunction(result.results)
    console.log(result.results)
}