import type React from 'react';
import { useState } from 'react';

type GreetingProps = {
  messages: [string, ...string[]];
};

const Greeting: React.FC<GreetingProps> = ({ messages }) => {
  const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={() => setGreeting(randomMessage())}>New Greeting</button>
    </div>
  );
};

export default Greeting;
