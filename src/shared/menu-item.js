export function MenuItem({ item, level, selected, clickHandler }) {
  const handleClick = () => clickHandler && clickHandler(item);

  return (
    <div style={{ paddingLeft: 10 * level + "px" }}>
      {item.label && (
        <div
          onClick={handleClick}
          className={`d-flex d-row menu-item ${item.classes} ${
            !item.children?.length && "pointer"
          } ${item.value === selected && "selected"}`}
        >
          {item.label}
        </div>
      )}
      {item.children?.length > 0 &&
        item.children.map((c, index) => {
          return <MenuItem key={index} item={c} level={level + 1} selected={selected} clickHandler={clickHandler}/>;
        })}
    </div>
  );
}