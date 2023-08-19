import './hello-world-button.scss';
class HelloWorldButton {
  buttonClassName = 'hello-world-button';
  render() {
    const button = document.createElement('button');
    button.innerHTML = 'Hello World';
    const body = document.querySelector('body');
    button.addEventListener('click',(ev) => {
      const p = document.createElement('p');
      p.innerHTML = 'Hello World';
      p.classList.add('hello-world-text');
      body.appendChild(p);
    })
    button.classList.add(this.buttonClassName);
    body.appendChild(button);
  }
}

export {HelloWorldButton};