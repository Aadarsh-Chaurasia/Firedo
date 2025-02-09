import { addData, getData, removeItem } from './HandelDB.js'



// // const result = await removeItem('t5')
// const result = await addData(data)
// console.log(result)
// const result2 = await getData()
// console.log(result2)

export const reqHandler = (req, res) => {
    // Add task
    if (req.method === 'POST') 
    {
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
    // Get task list
    else if (req.method === 'GET'){
        // Returning the saved data
        getData().then((data) =>{
            res.json(data);
        })
    }
    // Remove task from DB
    else if (req.method === 'DELETE'){
        const { id } = req.body;
        console.log(id);
        removeItem(id).then(() =>{
            console.log('data removed');
            return res.json({ message: `${id} deleted successfully !` });
        })
        .catch(err => {
            console.log('error');
        })
    }
}
