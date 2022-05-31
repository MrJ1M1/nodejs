const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test')
    .then(() => {
        console.log('\n Successfull!...\n');
    })
    .catch((err) =>{
        console.error('\nWrong!...\n', err);
    })

const SizeSchema = new mongoose.Schema({
    h: Number,
    w: Number,
    uom: String
})

const InventorySchema = new mongoose.Schema({
    item: String,
    qty: Number,
    size: SizeSchema,
    status: String
},{collection: 'topshiriqmongodb'})

const Inventory = mongoose.model('Inventory',InventorySchema);

// async function GetInventoryItem(){
//     return await Inventory
//         .find({status: 'A'})
//         .sort({item: 1})
//         .select({_id:0, status:0, size: 0})

// }

async function GetInventoryItem2() {
    return await Inventory
        .find()
        .and([{qty: {$lte: 50}},{item:/.*A.*/i}])
        .sort({qty: -1})
}

async function run(){
    const item = await GetInventoryItem2();
    console.log(item);
}

run();