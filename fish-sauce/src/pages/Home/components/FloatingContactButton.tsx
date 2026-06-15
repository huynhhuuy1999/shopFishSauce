import MaterialIcon from "./MaterialIcon";

export default function FloatingContactButton() {
  return (
    <button
      type="button"
      aria-label="Liên hệ nhanh"
      className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-primary text-on-primary rounded-full shadow-lg flex items-center justify-center active:scale-95 transition-transform z-40 cursor-pointer"
    >
      <MaterialIcon name="sms" fill />
    </button>
  );
}
