
export const validateProduct = async (req, res, next) => {
  const { fullName, merchantEmail, store } = req.body;
  if (!fullName || !merchantEmail || !store) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  next();
};