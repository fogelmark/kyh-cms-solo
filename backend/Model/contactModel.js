const Contact = require('../Schema/contactSchema')

exports.createNewSubject = async (req, res) => {
    const { fullName, email, subject } = req.body;
  
    if (!fullName || !email || !subject) {
      return res.status(400).json({ message: 'You need to enter all the fields' });
    }
  
    try {
      const data = await Contact.create({ fullName, email, subject});
      return res.status(201).json(data);
    } catch (error) {
      return res.status(500).json({ message: 'An error occurred' });
    }
  };

  exports.getAllSubject = (req, res) =>{
    Contact.find()
    .then(subject => {
        res.status(200).json(subject)
    })
    .catch(err =>{
        res.status(500).json({
            message: 'Cannot find the subject'
        })
    })
}