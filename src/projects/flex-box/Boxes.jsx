export default function Boxes({ children, currentStyles }) {
  return (
    <div className={`w-full custom-scrollbar overflow-auto border-2 rounded-md border-sky-700 grow ${currentStyles.join(' ')}`}>
      {children}
    </div>
  );
}