import React, { FC } from 'react';

const Foo: FC<{ title: string }> = (props) => <h4>{props.title}</h4>;

export default Foo;