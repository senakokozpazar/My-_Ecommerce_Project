export default function ColorCircle() {
  const colors = ["#23A6F0", "#23856D", "#E77C40", "#252B42"];
  return (
    <div className="mt-4 flex justify-center space-x-2">
      {colors.map((color, index) => (
        <div
          key={index}
          className="h-6 w-6 rounded-full"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}
