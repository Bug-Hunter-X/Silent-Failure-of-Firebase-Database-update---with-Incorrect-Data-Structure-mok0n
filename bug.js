```javascript
function updateData(data) {
  firebase.database().ref('/').update(data).then(() => {
    console.log('Data updated successfully!');
  }).catch((error) => {
    console.error('Error updating data:', error);
  });
}

// Incorrect usage of updateData function
const incorrectData = {
  "users": {
    "someUser": {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "zip": "12345"
      }
    }
  }
};

updateData(incorrectData);
```