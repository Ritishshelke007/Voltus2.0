const studentModel = require("../Model/studentModel");
const { formatDataToSend } = require("../Middleware/auth.middleware");
// let globalStudent = "";
try {
  const getStudent = async (request, response) => {
    const { email, password } = request.body;

    if (!email || !password) {
      return response.status(400).json({ message: "Please enter all fields" });
    }
    const student = await studentModel.findOne({ email });

    if (!student) {
      return response.status(400).json({ message: "User not found" });
    }

    if (student.password != password) {
      return response.status(400).json({ message: "Invalid password" });
    }

    // globalStudent = student;

    return response.status(200).json(formatDataToSend(student));
  };
  const createStudent = async (request, response) => {
    //emmai prn name year division batch pass

    try {
      console.log("inside");
      const { email, prn, name, year, division, batch, password } =
        request.body;

      const temp = await studentModel.exists({ email });
      if (temp) {
        return response.status(400).json({ message: "User exists" });
      }
      studentModel.create({
        email,
        prn,
        name,
        year,
        division,
        batch,
        password,
      });
    } catch (error) {}

    response.send("create contacts");
  };

  const updateStudent = async (request, response) => {
    const contact = await studentModel.updateOne(
      { name: request.body.name }, // Filter to find the document with the specified name
      { $set: { email: request.body.email } } // Update the age to 30
    );
    response.send("update  contacts with id :" + contact);
  };

  const getOneStudent = async (request, response) => {
    const contacts = await studentModel.find({ name: globalStudent.name });

    response.send(contacts);
  };

  const deleteStudent = async (request, response) => {
    const contact = await studentModel.deleteOne({ name: globalStudent.email });

    response.send("delete  contacts with id :" + contact);
  };

  module.exports = {
    getStudent,
    createStudent,
    getOneStudent,
    updateStudent,
    deleteStudent,
  };
} catch (err) {
  console.log(err);
}
