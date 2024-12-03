const MenuBar = ({ editor }) => {
  if (!editor) {
    return null
  }

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
    {
      label: 'Strike',
      action: () => editor.chain().focus().toggleStrike().run(),
      isActive: editor.isActive('strike')
    },
    {
      label: 'Paragraph',
      action: () => editor.chain().focus().setParagraph().run(),
      isActive: editor.isActive('paragraph')
    },
    {
      label: 'H1',
      action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: editor.isActive('heading', { level: 1 })
    },
    {
      label: 'H2',
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: editor.isActive('heading', { level: 2 })
    },
    {
      label: 'Bullet List',
      action: () => editor.chain().focus().toggleBulletList().run(),
      isActive: editor.isActive('bulletList')
    }
  ]

  return (
    <div className="flex flex-wrap gap-2 p-2 border-b border-gray-200 bg-gray-50">
      {buttons.map((button) => (
        <button
          key={button.label}
          type="button"
          onClick={(e) => handleButtonClick(e, button.action)}
          className={`px-3 py-1 border rounded hover:bg-gray-100 ${
            button.isActive ? 'bg-gray-200' : 'bg-white'
          }`}
        >
          {button.label}
        </button>
      ))}
    </div>
  )
}

export default MenuBar
