const btnloadUsers = document.getElementById('loadUser');
const btnCreateUser = document.getElementById('createUser');
const container = document.getElementById('container');

const API = 'https://jsonplaceholder.typicode.com/';

const getUsers  = async() => {
  return fetch(API + 'users/',
              {method:"GET"})
              .then(response =>{
                return response.json()})
              .catch(error =>{
                console.log(error);
              })
            };


const deleteUser = async (block) =>{
    await fetch(API + 'users/')
          .then(block.remove())
          .catch(error => console.log(error))
};


const renderUsers = (name, email) => {

    const block = document.createElement('div');
    block.classList.add('block');
    block.innerHTML = `
      <span class="info">name: ${name}</span>
      <span class="info">email: ${email}</span>
    `;
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delBtn');
    deleteBtn.innerText = 'X';

    deleteBtn.addEventListener('click', ()=>{
      deleteUser(block);
    })

    block.append(deleteBtn);
    container.append(block);
}


const loadUsers = async()=>{
  const users = await getUsers();
  users.forEach(user=>{
    renderUsers(user.name, user.email)
  })
}

const checkField = (src) => {
  if(!src.value){
    src.classList.add('error');
  }else {
    src.classList.remove('error');
  }
}

const createUser = () => {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  if (!name.value || !email.value) {
    alert('У вас є не заповнене поле');
    checkField(name);
    checkField(email);
  }else{
  renderUsers(name.value, email.value);
    checkField(name);
    checkField(email);
  name.value = "";
  email.value = "";
}}

btnloadUsers.addEventListener('click', loadUsers);
btnCreateUser.addEventListener('click', createUser);
