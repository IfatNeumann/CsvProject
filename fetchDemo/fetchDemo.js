async function fetchDemo(){
    const response = await fetch("https://raw.githubusercontent.com/IfatNeumann/CsvProject/main/dataSets/0_spotify_taylorswift.csv");
    const data = await response.text();
    const table = data.trim().split('\n').slice(1);

    const firstRow = table[0]
    console.log(firstRow)
    
    const columns = firstRow.split(',');
    console.log(columns[1])
}

fetchDemo();

