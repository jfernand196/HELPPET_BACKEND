// {
//     _Id: "12365",
//     name: "juan",
//     email:"juan@email.com",
//     password: "123456",
//     userType: "foundation",
//     foundation: {
//         [ 
//             {
//                 _Id: "654123",
//                 foundationId: "_Id(user)",
//                 name: "foundationJuan", 
//                 pets: 
//                     [ 
//                         {
//                             _Id: "987456",
//                             petId: "_Id(foundation)",
//                             name: "PetName",
//                             age: "2",
//                             breed: "criollo",
//                             color: "black",
//                             weight: "10",
//                             photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.petfinder.com%2Fadoption%2Fpet%2F12365%2F&psig=AOvVaw0_X_X_X_X_X_X_X_X_X_&ust=1589788180980000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDyq-_X-oCFQAAAAAdAAAAABAD",
//                         }
//                     ]

//             }
//         ]
//     }
// }

//cirstian user no relaciono task
// {
//     email,
//     firstname,
//     lastname,
//     password,
//     isActive,
//     role,
//     payment: {
//         customerId,
//         cards:[
//                 {
//                 paymentMethodId,
//                 brand,
//                 coubtry,
//                 exp_month,
//                 exp_year,
//                 funding,
//                 last4
//                 }
//             ]
//         }
// }

// cristian task si relaciono user

//     {
//     title,
//     description,
//     isCompleted,
//     userId:{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User"},
//    }

// cristian payment

// {
//     refId,
//     description,
//     value,
//     currency,
//     userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'User'
//     },
//   }