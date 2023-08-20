import { Heading } from "./components/heading/heading";
import {HelloWorldButton} from "./components/hello-world-button/hello-world-button";

const webpackIsAwesome = new Heading();
webpackIsAwesome.render();
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

if (process.env.NODE_ENV === 'production') {
  console.log('Production Mode');
} else if (process.env.NODE_ENV === 'development') {
  console.log('Development Mode');
}

helloWorldButton.methodWathDoesNotExist();