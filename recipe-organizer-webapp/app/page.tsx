'use client';
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Recipe Organizer</h1>
      <h2>Organiseer jouw recepten!</h2>
      <Link href="/recipes">Check de recepten!</Link>
    </div>
    
  );
}
