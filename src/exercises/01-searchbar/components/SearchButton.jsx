import IconCircle from './IconCircle';
function SearchButton() {
  return (
    <button type="submit" aria-label="검색" title="검색">
      {/* {renderIconCircle()} */}
      {/* [외부에서 제어 X ] 내부에 엘리먼트  */}
      <IconCircle />
    </button>
  );
}

export default SearchButton;
