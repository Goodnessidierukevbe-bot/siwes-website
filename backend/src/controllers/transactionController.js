import Transaction from "../models/transactionModel.js";

export const createTransaction = async (req, res) => {
  const transaction = await Transaction.create(req.body);

  res.status(201).json(transaction);
};

// read all students
export const getTransactions = async (req, res) => {
  const transactions = await Transaction.find();

  res.status(200).json(transactions);
};

// read one student
export const getTransaction = async (req, res) => {
  const { id } = req.params;
  const transaction = await Transaction.findById(id);

  if (!transaction) {
    return res.status(404).json({ message: "Transaction not found" });
  }

  res.status(200).json(transaction);
};

// partially update a transaction
export const updateTransaction = async (req, res) => {
  const { id } = req.params;

  const transaction = await Transaction.findByIdAndUpdate(
    id,
    (req.body = {
      new: true,
      runValidators: true,
    }),
  );

  if (!transaction) {
    return res.status(404).json({ message: "Transaction not found" });
  }
  res.status(200).json(transaction);
};

// delete a transaction
export const deleteTransaction = async (req, res) => {
  const { id } = req.params;
  const transaction = await Transaction.findByIdAndDelete(id);

  if (!transaction) {
    return res.status(404).json({ message: "Transaction not found" });
  }
  res.status(200).json(transaction);
};
