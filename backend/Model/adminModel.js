const Admin = require('../Schema/adminSchema')
const bcrypt = require('bcryptjs');
const auth = require('../authentication/auth')

exports.createNewAdmin = async (req, res) =>{

  const {email, password} = req.body;

  if(!email || !password){
    return res.status(404).json({message: 'You need to enter all the fields'})
  }
  const salt = bcrypt.genSaltSync(10);
  bcrypt.hash(password, salt, (err, hash) => {
    if(err){
      return res.status(500).json({
        message: 'filed when encrpterin the password'
      })
    }
    Admin.create({ email, passwordHash: hash})
    .then(admin =>{
      res.status(201).json({
        token: auth.generateToken(admin)
      })
    })
  })
}


exports.loginAdmin = (req, res) => {
  const { email, password } = req.body

  if(!email || !password){
    return res.status(400).json({message: 'You need to enter both email and password'})
  }

  Admin.findOne({email})
  
  .then(data =>{
    if(!data){
      return res.status(401).json({message: 'Incorrect credentials'})
    }
    bcrypt.compare(password, data.passwordHash, (err, result) => {
      if(err){
        return res.status(500).json({message: 'Something went wrong when decrypting the password'})
      }
      if(!result){
        return res.status(401).json({message: 'Incorrect credentials'})
      }
      res.status(200).json({token: auth.generateToken(data)})
    })
  })
}


exports.getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) {
      return res.status(404).json({ message: 'Could not find the admin' });
    }
    res.status(200).json(admin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};