import MenuButton from './MenuButton'

const MenuBar = ({ editor }) => {
  if (!editor) return null

  const handleButtonClick = (e, action) => {
    e.preventDefault()
    action()
  }

  const buttons = [
    {
      label: 'Bold',
      action: () => editor.chain().focus().toggleBold().run(),
      isActive: editor.isActive('bold')
    },
    {
      label: 'Italic',
      action: () => editor.chain().focus().toggleItalic().run(),
      isActive: editor.isActive('italic')
    },
    // ... other buttons
  ]

  return (
    <div className="flex flex-wrap gap-2 p-2 border-b border-gray-200 bg-gray-50">
      {buttons.map((button) => (
        <MenuButton
          key={button.label}
          onClick={(e) => handleButtonClick(e, button.action)}
          isActive={button.isActive}
        >
          {button.label}
        </MenuButton>
      ))}
    </div>
  )
}

export default MenuBar 