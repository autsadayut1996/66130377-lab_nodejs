const express = require("express");
const router = express.Router();

const users = [
  {
    id: 1,
    fullname: "Autsadayut Thatsanapayak",
    avatar:
      "https://m.media-amazon.com/images/S/pv-target-images/16627900db04b76fae3b64266ca161511422059cd24062fb5d900971003a0b70.jpg",
  },
  {
    id: 2,
    fullname: "66130377",
    avatar:
      "https://cdn.readthecloud.co/wp-content/uploads/2022/12/29075551/avatar-11-750x533.jpg",
  },
];

/**
 * @swagger
 * /user/login:
 *   post:
 *     tags: [User]
 *     summary: Authenticate user.
 *     description: Authenticate user with provided credentials.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User authenticated successfully.
 *       401:
 *         description: Unauthorized. Invalid credentials.
 */
router.post("/user/login", function (req, res) {
  const { username, password } = req.body;
  const id = 1; //รหัส User 1
  // Validate username and password (example: check against database)
  if (username === "66130377" && password === "230739") {
    // Authentication successful
    res
      .status(200)
      .json({ id: id, message: "User authenticated successfully" });
  } else {
    // Authentication failed
    res
      .status(401)
      .json({ id: 0, message: "Unauthorized. Invalid credentials." });
  }
});

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     tags: [User]
 *     summary: Get a user by ID.
 *     description: Retrieve a blog by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *     responses:
 *       200:
 *         description: A single user object.
 *       404:
 *         description: user not found.
 */
router.get("/user/:id", (req, res) => {
  const { id } = req.params;
  const result = users.find((rs) => rs.id === parseInt(id));
  // console.log(id);
  res.json(result);
});

module.exports = router;
