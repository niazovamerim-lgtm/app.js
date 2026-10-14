
const container = document.querySelector("div");

function getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(users => {
            users.forEach((user) => {
                const cardHTML = `
                    <div class="user-card">
                        <h3 class="user-name">${user.name}</h3>
                        <span class="user-username">@${user.username}</span>
                        <a href="mailto:${user.email}" class="user-email">${user.email}</a>
                        
                        <div class="user-address">
                            <h4>Адрес:</h4>
                            <p>${user.address.street}, ${user.address.suite}</p>
                            <p>${user.address.city}, ${user.address.zipcode}</p>
                        </div>

                        <div class="user-geo">
                            <span>Широта: ${user.address.geo.lat}</span>
                            <span>Долгота: ${user.address.geo.lng}</span>
                        </div>
                    </div>
                `;
                container.insertAdjacentHTML('beforeend', cardHTML);
            });
        })
        .catch(error => console.error("Ошибка при получении данных:", error));
}

getUsers();