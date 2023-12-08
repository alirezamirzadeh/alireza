import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css'
import { cx } from '@/lib/utils';
import React from 'react';


export const metadata: Metadata = {
  title: 'Alireza Mirzade',
  description: "I'm a frontend developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en" className={cx( GeistSans.variable,
      GeistMono.variable)}>
      <body className='antialiased '>{children}</body>
    </html>
  )
}
