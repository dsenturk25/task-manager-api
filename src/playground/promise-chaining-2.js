require("../src/db/mongoose")
const Task = require("../src/db/models/task")

// Task.findByIdAndDelete("6061d3fe01f81c85837886b4").then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount("60635fdbaf2d5c2a77fe907b").then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})