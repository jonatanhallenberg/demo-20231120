export const getCatFacts = async () => {
    const response = await fetch('https://catfact.ninja/facts');
    const data = await response.json();
    return data.data;
}