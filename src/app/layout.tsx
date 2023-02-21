'use client';

import { RecoilRoot } from 'recoil';
import '@/assets/scss/base.scss';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <DndProvider backend={HTML5Backend}>
          <RecoilRoot>{children}</RecoilRoot>
        </DndProvider>
      </body>
    </html>
  );
}
