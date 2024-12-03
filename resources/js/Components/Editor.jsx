import PropTypes from 'prop-types';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';

/**
 * @param {Object} props
 * @param {string} props.content
 * @param {function} props.onChange
 */
export default function Editor({ content, onChange }) {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Link.configure({
                openOnClick: false,
            }),
        ],
        content,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
    });

    if (!editor) {
        return null;
    }

    return (
        <div className="prose max-w-none">
            <div className="border rounded-lg overflow-hidden">
                <div className="bg-gray-50 border-b px-4 py-2 flex gap-2">
                    <button
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        className={`p-1 rounded ${editor.isActive('bold') ? 'bg-gray-200' : ''}`}
                        type="button"
                    >
                        Bold
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        className={`p-1 rounded ${editor.isActive('italic') ? 'bg-gray-200' : ''}`}
                        type="button"
                    >
                        Italic
                    </button>
                </div>
                <EditorContent editor={editor} className="p-4" />
            </div>
        </div>
    );
}

Editor.propTypes = {
    content: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}; 