export const filterTabsData = (data,filterType) =>{
    let filteredData = []

    data.forEach(item => {
        const itemType = item.symbol.includes(filterType)
        if(itemType){
            filteredData.push(item) 
        }
    });

    return filteredData
}