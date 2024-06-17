export default function Boxes({ children, currentStyles }) {
  return (
    <div className={`w-full border-2 rounded-md border-sky-700 grow ${currentStyles.join(' ')}`}>
      {children}
    </div>
  );
}