export default function MensagemModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[999]">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Mensagem Indisponível</h2>
        <p className="text-gray-600 mb-6">
          No momento as mensagens não seram enviadas.
        </p>

        <button
          onClick={onClose}
          className="px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition cursor-pointer"
        >
          Entendido
        </button>
      </div>
    </div>
  );
}
