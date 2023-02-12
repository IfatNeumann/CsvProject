// Data from: https://www.kaggle.com/datasets/thespacefreak/taylor-swift-spotify-data
        
// Danceability = How suitable a track is for dancing based on a combination of
// musical elements including tempo, rhythm stability, beat

getData();

async function getData(){
    const response = await fetch('test.csv');
    const data = await response.text();
    console.log(data);
    const table = data.trim().split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const songName = columns[1];
        const danceability = columns[7];
        console.log(songName, danceability);
    });
    console.log(table)
}