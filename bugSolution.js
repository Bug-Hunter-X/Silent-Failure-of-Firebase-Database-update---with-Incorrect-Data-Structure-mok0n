```javascript
function updateData(data) {
  firebase.database().ref('/').update(data).then(() => {
    console.log('Data updated successfully!');
  }).catch((error) => {
    console.error('Error updating data:', error);
    // Handle the error appropriately, e.g., retry or notify the user
  });
}

// Correct usage of updateData function - ensuring path exists
firebase.database().ref('users/someUser').once('value', (snapshot) => {
  if (!snapshot.exists()) {
    // Create user if it doesn't exist
    firebase.database().ref('users/someUser').set({
      name: 'John Doe',
      email: 'john.doe@example.com'
    }).then(() => {
      //Update address once user is created
      const correctData = {
        "users": {
          "someUser": {
            "address": {
              "street": "123 Main St",
              "city": "Anytown",
              "zip": "12345"
            }
          }
        }
      };
      updateData(correctData);
    })
    .catch((error) => {
      console.error('Error creating user:', error);
    });
  } else {
    // Update if user already exists
      const correctData = {
        "users": {
          "someUser": {
            "address": {
              "street": "123 Main St",
              "city": "Anytown",
              "zip": "12345"
            }
          }
        }
      };
      updateData(correctData);
  }
});
```