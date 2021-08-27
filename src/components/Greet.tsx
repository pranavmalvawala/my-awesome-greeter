import * as React from 'react';

interface Props {
  name: string;
}

export function Greet({ name }: Props) {
  return <h1>{name}</h1>;
}
