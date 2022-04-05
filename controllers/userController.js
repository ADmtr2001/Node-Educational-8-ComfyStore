const getAllUsers = async (req, res) => {
	res.send('get all users route');
};

const getSingleUser = async (req, res) => {
	res.json(req.params);
};

const showCurrentUser = async (req, res) => {
	res.send('show current user route');
};

const updateUser = async (req, res) => {
	res.send(req.body);
};

const updateUserPassword = async (req, res) => {
	res.send(req.body);
};

module.exports = {
	getAllUsers,
	getSingleUser,
	showCurrentUser,
	updateUser,
	updateUserPassword
};