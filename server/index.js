const express = require("express")
const mongoose = require("mongoose")
const userModel = require("./schema/userSchema");
const cors = require("cors")
const app = express()
const PORT = process.env.PORT || 8000

const router = express.Router()
const BASE_URI = `mongodb+srv://Shayan:Kingfu_12@learning-cluster.qobbvco.mongodb.net/crudApp`
mongoose
    .connect(BASE_URI)
    .then((res) => console.log("MongoDb Connected"))
app.use(express.json())
app.use(cors())
app.use('/', router)
app.use('/all', router)

router.post('/add', (req, res) => {
    userModel.create(req.body, (err, data) => {
        if (err) {
            res.send(err)
            // console.log(err);
        } else {
            res.json({
                msg: 'user create',
                data
            })
        }
    })
    // const user = 
    // console.log(user);
})
router.get('/add', (req, res) => {
    userModel.find({}, (err, data) => {
        if (err) {
            res.send(err)

        } else {
            res.json(
                data
            )
        }

    })

})
router.get('/:id', (req, res) => {
    console.log(req.params.id);
    userModel.findById({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.send(err)

        } else {
            res.json(
                data
            )
        }

    })

})
router.post('/:id', (req, res) => {
    //    console.log(req.body);
    let user = req.body;
    const editUser = new userModel(user)
    userModel.updateOne({ _id: req.params.id }, editUser, (err, data) => {
        if (err) {
            res.send(err)

        } else {
            res.json(
                editUser
            )
        }

    })

})
router.delete('/:id', (req, res) => {
    //    console.log(req.body);
    const { id } = req.params

    userModel.findByIdAndDelete(id, (err, data) => {
        if (err) {
            res.send(err)

        } else {
            res.json({
                message: "data deleted",
                data,
            }
            )
        }

    })

})


// app.delete("/api/:id", (request, response , next)=>{
//     // const {_id} = request.body;

//     // console.log(_id);
//     poster.findByIdAndDelete(id, (err, data)=>{
//         if(err){
//             response.send("error",err)
//         }else{
//             response.json({
//                 message : "data deleted",
//                 data,
//             })
//         }
//     })
// })

app.listen(PORT, () => console.log(`server running on localhost:${PORT}`))