require("../src/db/mongoose")
const User = require("../src/db/models/user")

// 6061dcaee27d0801043e052c

// User.findByIdAndUpdate("60635961ea3468295e753fc4", {age: 1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age: age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount("6061dcaee27d0801043e052c", 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})