//z1
function createCounter(n) {
    let timerId;
    let currentCount = n;

    function counter() {
        console.log(currentCount);
        currentCount--;
        if (currentCount < 0) {
            clearInterval(timerId);
        }
    }

    return {
        start: function() {
            if (!timerId) {
                timerId = setInterval(counter, 1000);
            }
        },
        pause: function() {
            clearInterval(timerId);
            timerId = null;
        },
        stop: function() {
            clearInterval(timerId);
            timerId = null;
            currentCount = n;
        }
    };
}

// Пример использования:
const counter = createCounter(5);
counter.start();
setTimeout(() => counter.pause(), 2500); 
setTimeout(() => counter.start(), 3500); 
setTimeout(() => counter.stop(), 5500); 

//z2_promise

function delay(N) {
    return new Promise(resolve => setTimeout(resolve, N * 1000));
}

async function counter(n) {
    for (let i = n; i >= 0; i--) {
        console.log(i);
        await delay(1);
    }
}

// Пример использования:
counter(5); 

//z3
class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  async function loadJson(url) {
    const response = await fetch(url);
    if (response.status == 200) {
      return response.json();
    } else {
      throw new HttpError(response);
    }
  }
  
  async function getGithubUser() {
    while (true) {
      let name = prompt("Введите логин?", "iliakan");
  
      try {
        const user = await loadJson(`https://api.github.com/users/${name}`);
        alert(`Полное имя: ${user.name}.`);
        return user;
      } catch (err) {
        if (err instanceof HttpError && err.response.status == 404) {
          alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
        } else {
          throw err;
        }
      }
    }
  }
  
  getGithubUser();