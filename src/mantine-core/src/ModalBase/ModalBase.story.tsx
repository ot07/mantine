import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { ModalBase } from './ModalBase';
import { Button } from '../Button';

export default { title: 'ModalBase' };

// function Demo() {
//   return (
//     <ModalBase>
//       <ModalBase.CloseButton />
//       <ModalBase.Content>
//         <ModalBase.Header>Title</ModalBase.Header>
//         <ModalBase.Body>Modal content</ModalBase.Body>
//         <ModalBase.Footer>Modal Footer</ModalBase.Footer>
//       </ModalBase.Content>
//       <ModalBase.Overlay />
//     </ModalBase>
//   );
// }

const lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tenetur, atque animi ducimus tempora iste distinctio harum nostrum eos tempore voluptatem, voluptas dolorem eveniet fugiat pariatur! Repellendus minus nulla non?';
const content = Array(20)
  .fill(0)
  .map((_, index) => <p key={index}>{lorem}</p>);

export function Usage() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div style={{ padding: 40 }}>
      <ModalBase opened={opened} onClose={close} __staticSelector="Modal">
        {/* <ModalBase.CloseButton aria-label="Test button" /> */}
        <ModalBase.Content>Modal content</ModalBase.Content>
        <ModalBase.Overlay />
      </ModalBase>

      <Button onClick={open}>Open modal</Button>
      {content}
      <Button onClick={open}>Open modal</Button>
    </div>
  );
}