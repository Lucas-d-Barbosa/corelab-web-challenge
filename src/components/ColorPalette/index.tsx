import styles from "./ColorPalette.module.scss";
interface IColorPaletteProps {
  onColorSelect: (color: string) => void;
}
function ColorPalette({ onColorSelect }: IColorPaletteProps) {
  const colors = [
    "#BAE2FF",
    "#B9FFDD",
    "#FFE8AC",
    "#FFCAB9",
    "#F99494",
    "#9DD6FF",
    "#ECA1FF",
    "#DAFF8B",
    "#FFA285",
    "#CDCDCD",
    "#979797",
    "#A99A7C",
  ];

  return (
    <div className={styles.palette}>
      {colors.map((color) => (
        <button
          key={color}
          className={styles.swatch}
          style={{ backgroundColor: color }}
          aria-label={`Selecionar cor ${color}`}
          onClick={() => onColorSelect(color)}
        />
      ))}
    </div>
  );
}

export default ColorPalette;
