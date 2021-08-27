export function greeter(name: string) {
  return `Hello, ${name}`;
}

export interface Person {
  name: string;
  title: string;
}

export { Greet } from './components/Greet';
