import { addData, getData, removeItem } from './HandelDB.js'



// // const result = await removeItem('t5')
// const result = await addData(data)
// console.log(result)
// const result2 = await getData()
// console.log(result2)

export const reqHandler = (req, res) => {
    // Adding data
    const data = req.body;
    console.log(data)
    addData(data)
    .then((response) => {
        res.json({ message: `${data} added successfully !` });
        console.log('data added successfully');
    })
    .catch((err) =>{
        console.log(err);
        return res.json({ message: err.message });
    })
}
