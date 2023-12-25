'use client';

import React from 'react';
import Typed from 'typed.js';

export default function TypedComponent({ strings }: { strings: string[] }) {
  const element = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(element.current, {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="min-h-6">
      <span ref={element} />
    </div>
  );
}
