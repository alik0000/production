import { Modal } from 'widgets/modal'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useCallback, useState } from 'react'
import { useLockBodyScroll } from 'shared/lib/use-lock-body-scroll/useLockBodyScroll'
export default {
  title: 'widgets/Modal',
  component: Modal
} as ComponentMeta<typeof Modal>
const Template: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  useLockBodyScroll(false)

  const toggleModal = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  return (
      <>
        <button onClick={toggleModal}>toggle</button>
        <Modal isOpen={isOpen} handleClose={() => { setIsOpen(false) }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aperiam asperiores debitis dolorem expedita quasi quidem sit tenetur totam!
          Deserunt dolore dolores fugiat maiores nobis quos repudiandae? Hic labore quam totam!
        </Modal>
      </>
  )
}
export const ModalLight = Template.bind({})
ModalLight.storyName = 'Modal'
