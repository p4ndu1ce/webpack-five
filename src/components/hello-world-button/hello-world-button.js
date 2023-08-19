import './hello-world-button.css';
class HelloWorldButton {
  render() {
    const button = document.createElement('button');
    button.innerHTML = 'Hello World';
    button.classList.add('hello-world-button');
    const body = document.querySelector('body');
    button.addEventListener('click',(ev) => {
      const p = document.createElement('p');
      p.innerHTML = 'Hello World';
      p.classList.add('hello-world-text');
      body.appendChild(p);
    })
    body.appendChild(button);
  }
}

export {HelloWorldButton};