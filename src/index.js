import { Heading } from "./components/heading/heading";
import {HelloWorldButton} from "./components/hello-world-button/hello-world-button";

const webpackIsAwesome = new Heading();
webpackIsAwesome.render();
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();