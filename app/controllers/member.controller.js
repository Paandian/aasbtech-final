const db = require("../models");
// const config = require("../config/auth.config");
// const { user: Member, role: Role } = db;
const Member = db.user;
const Role = db.role;
const user_roles = db.userRoles;
const Op = db.Sequelize.Op;

// var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { role } = require("../models");

// Create and Save a new member
// exports.create = (req, res) => {
//     // Validate request
//     if (!req.body.username) {
//       res.status(400).send({
//         message: "Content can not be empty!"
//       });
//       return;
//     }

//     // Create a Member
//     const member = {
//       username: req.body.username,
//       email: req.body.email
//       // published: req.body.published ? req.body.published : false
//     };

//     // Save Member in the database
//     Member.create(member)
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while creating the Member."
//         });
//       });
//   };
exports.create = (req, res) => {
  // Save User to Database
  Member.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    active: req.body.active,
    roles: req.body.roles,
    branch: req.body.branch,
    dept: req.body.dept,
    // active: req.body.active ? req.body.active : true
  })
    .then((member) => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            roleCode: {
              [Op.or]: req.body.roles,
            },
          },
        }).then((roles) => {
          member.setRoles(roles).then(() => {
            res.send({ message: "Member was created successfully!" });
          });
        });
      } else {
        // member role = 1
        member.setRoles([9]).then(() => {
          res.send({ message: "Member was created successfully!" });
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

// Retrieve all Members from the database.
exports.findAll = async (req, res) => {
  const username = req.query.username;
  var condition = username
    ? { username: { [Op.like]: `%${username}%` } }
    : null;

  const allMember = await Member.findAll(
    // { where: condition &&

    {
      where: condition,
      // Make sure to include the products
      include: [
        {
          model: role,
          as: "roles",
          required: false,
          // Pass in the Product attributes that you want to retrieve
          // attributes: ["id", "username", "email", "password", "active"],
          // attributes: ["roleId", "userId"],
          // attributes: ["id", "name", "roleCode"],
          attributes: ["name"],
          through: {
            // This block of code allows you to retrieve the properties of the join table
            model: user_roles,
            as: "user_roles",
            // attributes: ["id", "name", "roleCode"],
            attributes: ["roleId", "userId"],
          },
        },
      ],
    }
    // }
  )
    .then((allMember) => {
      res.send(allMember);
      console.log(allMember);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving members.",
      });
    });
};

// router.get(
//   "/orders/",
//   asyncHandler(async (req, res) => {
//     // Get all orders
//     const allOrders = await Order.findAll({
//       // Make sure to include the products
//       include: [
//         {
//           model: Product,
//           as: "products",
//           required: false,
//           // Pass in the Product attributes that you want to retrieve
//           attributes: ["id", "name"],
//           through: {
//             // This block of code allows you to retrieve the properties of the join table
//             model: ProductOrder,
//             as: "productOrders",
//             attributes: ["qty"],
//           },
//         },
//       ],
//     });

//     // If everything goes well respond with the orders
//     return respondWith(res, 200, ["Returning all orders"], { allOrders });
//   })
// );

// Find a single Member with an id
exports.findOneMember = (req, res) => {
  const id = req.params.id;

  Member.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Member with id=" + id,
      });
    });
};

// Update a Member by the id in the request
exports.updateMember = (req, res) => {
  const id = req.params.id;

  Member.update(
    {
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      branch: req.body.branch,
      dept: req.body.dept,
      // active: req.body.active,
      // roles: req.body.roles
      // active: req.body.active ? req.body.active : true
    },
    {
      where: { id: id },
    }
  )
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Member was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Member with id=${id}. Maybe Member was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Member with id=" + id,
      });
    });
};

// Delete a Member with the specified id in the request
exports.deleteMember = (req, res) => {
  const id = req.params.id;

  Member.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Member was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Member with id=${id}. Maybe Member was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Member with id=" + id,
      });
    });
};

// Delete all Members from the database.
// exports.deleteAllMember = (req, res) => {
//     Member.destroy({
//       where: {},
//       truncate: false
//     })
//       .then(nums => {
//         res.send({ message: `${nums} Members were deleted successfully!` });
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while removing all members."
//         });
//       });
//   };

// Find all active members
exports.findAllActiveMember = (req, res) => {
  Member.findAll({ where: { active: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving members.",
      });
    });
};

// Fetch all Member include Roles
// exports.findAllRoles = (req, res) => {
//   Member.findAll({
//     attributes: ["username", "email", "active"],
//     include: [
//       {
//         model: Role,
//         // as: "Roles",
//         attributes: ["name", "roleCode"],
//         through: {
//           attributes: ["userId", "roleId"],
//         },
//       },
//     ],
//   })

//     // .then((userLevel) => {
//     //   res.send(userLevel);
//     // });
//     .then((data) => {
//       res.send(data);
//     });
// };

// Fetch all Member include Roles
exports.findAllRoles = (req, res) => {
  const id = req.params.id;
  Member.findAll({
    attributes: ["username", "email", "active"],
    include: [
      {
        model: Role,
        as: "roles",
        attributes: ["name", "roleCode"],
        through: {
          attributes: ["userId", "roleId"],
        },
      },
    ],
  })
    // .then((userLevel) => {
    //   res.send(userLevel);
    // });
    .then((data) => {
      res.send(data);
    });
};
