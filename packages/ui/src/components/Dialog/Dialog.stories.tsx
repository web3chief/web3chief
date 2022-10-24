import { ComponentStory } from '@storybook/react'
import { Dialog } from './Dialog'
import { DialogHeader } from './DialogHeader'
import { DialogContent } from './DialogContent'
import React from 'react'
import { useModal } from '../../hooks/useModal'

export default {
  title: 'Dialog',
  component: Dialog,
}

const Template: ComponentStory<typeof Dialog> = () => {
  const { isOpen, closeModal, openModal } = useModal(true)

  return (
    <>
      <button onClick={openModal}>OpenModal</button>
      <Dialog onClose={closeModal} open={isOpen}>
        <DialogHeader title='title' onClose={closeModal} />
        <DialogContent sx={{ height: '500vh' }}>
          I assume you all know CSS Positions, but let’s have a brief review: Up until 3 years ago,
          there were four CSS Positions: static, relative, absolute and fixed. The main difference
          between static or relative and absolute or fixed was the space they take up in the flow of
          the DOM. Positions static & relative keep their natural space in the flow of the document,
          while the absolute & fixed don’t — their space is removed and they have a floating
          behavior. The new Position Sticky has similarities with all types, as I will soon explain.
          I assume you all know CSS Positions, but let’s have a brief review: Up until 3 years ago,
          there were four CSS Positions: static, relative, absolute and fixed. The main difference
          between static or relative and absolute or fixed was the space they take up in the flow of
          the DOM. Positions static & relative keep their natural space in the flow of the document,
          while the absolute & fixed don’t — their space is removed and they have a floating
          behavior. The new Position Sticky has similarities with all types, as I will soon explain.
          I assume you all know CSS Positions, but let’s have a brief review: Up until 3 years ago,
          there were four CSS Positions: static, relative, absolute and fixed. The main difference
          between static or relative and absolute or fixed was the space they take up in the flow of
          the DOM. Positions static & relative keep their natural space in the flow of the document,
          while the absolute & fixed don’t — their space is removed and they have a floating
          behavior. The new Position Sticky has similarities with all types, as I will soon explain.
          I assume you all know CSS Positions, but let’s have a brief review: Up until 3 years ago,
          there were four CSS Positions: static, relative, absolute and fixed. The main difference
          between static or relative and absolute or fixed was the space they take up in the flow of
          the DOM. Positions static & relative keep their natural space in the flow of the document,
          while the absolute & fixed don’t — their space is removed and they have a floating
          behavior. The new Position Sticky has similarities with all types, as I will soon explain.
          I assume you all know CSS Positions, but let’s have a brief review: Up until 3 years ago,
          there were four CSS Positions: static, relative, absolute and fixed. The main difference
          between static or relative and absolute or fixed was the space they take up in the flow of
          the DOM. Positions static & relative keep their natural space in the flow of the document,
          while the absolute & fixed don’t — their space is removed and they have a floating
          behavior. The new Position Sticky has similarities with all types, as I will soon explain.
        </DialogContent>
      </Dialog>
    </>
  )
}

export const Default = Template.bind({})
