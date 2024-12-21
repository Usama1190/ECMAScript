let express = require("express");
let studentModel = require("./Model/Model");
let connectDB = require("./mongoDBConnect");

connectDB();

let app = express();
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", (req, res) => {
    res.statusCode = 202;
    res.setHeader("Content-Type", "text/html");
    // res.end("<h1>This response from Express Server</h1>");
    res.render('demoEjs',{heading:"This is Ejs"})
})

app.get("/signup", (req, res) => {
    res.statusCode = 202;
    res.setHeader("Content-Type", "text/html");
    res.sendFile(__dirname + "/public/signupForm.html")
})

app.post("/form-data", (req, res) => {
    res.statusCode = 202;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Data Received at Server End....</h1>");
    console.log(req.body);
    insertData(req.body)
})

app.get("/api/studentdata", async (req, res) => {
    // res.status(200).json(await readData());
    let students= await readData();
    res.render('formData',{students});
})

async function insertData(formData) {
    let data = new studentModel({
        full_name: formData.full_name,
        email: formData.email,
        phone: formData.phone,
        birth_date: formData.birth_date,
        gender: formData.gender,
        address: formData.address,
        address_line2: formData.address_line2,
        country: formData.country,
        city: formData.city,
        region: formData.region,
        postal_code: formData.postal_code
    })
    await data.save();
    console.log("Data Inserted!");
}


async function readData(params) {
    let studentsData = await studentModel.find({})
    console.log(studentsData);
    return studentsData;

}

app.listen(3000, () => {
    console.log("Server Started!")
})