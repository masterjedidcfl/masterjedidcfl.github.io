// Set modal with user's credentials
document.getElementById('friendForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    document.getElementById('userName').textContent = name;
    document.getElementById('userEmail').textContent = email;

    let myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show();

    this.reset();
});

// Goofy modal pop up
document.getElementById('profile-pic').addEventListener('click', function(event) {
    event.preventDefault(); 

    let myModal = new bootstrap.Modal(document.getElementById('perishModal'));
    myModal.show();
});



